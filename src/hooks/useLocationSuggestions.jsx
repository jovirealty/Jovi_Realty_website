import { useEffect, useState } from "react";
import axiosClient from '../api/axiosClient';
import useDebouncedValue from "./useDebouncedValue";

const useLocationSuggestions = (query, activeTab) => {
    const [suggestions, setSuggestions] = useState([]);
    const [loading, setLoading] = useState(false);
    const debounced = useDebouncedValue(query, 250);

    // Match how your Searchbar builds the type clause
    const propertyTypeClause = activeTab === "buy" ? "PropertyType eq 'Residential'" : "PropertyType eq 'Residential Income'";

    useEffect(() => {
        let aborted = false;
        async function run() {
            if(!debounced) {
                setSuggestions([]);
                return;
            }
            setLoading(true);
            try {
                const { data } = await axiosClient.get("/Property", {
                    params: {
                        $select: "City",
                        $filter: 
                        `StandardStatus eq 'Active' and ${propertyTypeClause} and ` +
                        `contains(tolower(City), '${debounced.toLowerCase()}')`,
                        $orderby: "City asc",
                        $top: 30,
                    }
                });
                const cities = Array.from(
                    new Set((data?.value || []).map(r => r.City).filter(Boolean))
                );
                if(!aborted) {
                    setSuggestions(cities);
                }
            } catch(err) {
                if(!aborted) setSuggestions([]);
            } finally {
                if(!aborted) setLoading(false);
            }
        }
        run();
        return () => { aborted = true; };
    }, [debounced, activeTab, propertyTypeClause]);
    return { suggestions, loading };
};

export default useLocationSuggestions;