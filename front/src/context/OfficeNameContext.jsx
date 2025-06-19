import { createContext, useState, useCallback } from "react";
import useSingleOfficeApi from "../hooks/useSingleOfficeApi ";

export const OfficeNameContext = createContext();

export const OfficeNameProvider = ({ children }) => {
    const [officeCache, setOfficeCache] = useState({});

    const fetchAndCacheOfficeName = useCallback((officeMlsId) => {
        if(!officeMlsId || officeCache[officeMlsId]) return;
        // Use custom hook for a single office fetch
        // Here, the actual fetch will be triggered by the hook in the child
        // This function only exists for API symmetry, but does nothing
        // because useSingleOfficeApi will handle the fetching
    }, [officeCache]);

    const getOfficeName = (officeMlsId) => {
        if(!officeMlsId) return undefined;
        return officeCache[officeMlsId];
    };

    const cacheOfficeName = (officeMlsId, officeName) => {
        setOfficeCache((prev) => {
            if(prev[officeMlsId]) return prev; // already cached
            return { ...prev, [officeMlsId]: officeName };
        });
    };
    
    return (
        <OfficeNameContext.Provider value={{ getOfficeName, fetchAndCacheOfficeName, cacheOfficeName }}>
            {children}
        </OfficeNameContext.Provider>
    );
}