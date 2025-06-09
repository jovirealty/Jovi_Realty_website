import { useState, useEffect } from 'react';
import axiosClient from '../api/axiosClient';

/**
 * Custom hook to fetch data from Bridge API endpoints.
 * 
 * @param {string} endpoint - The API endpoint (relative to base URL)
 * @param {object} queryParams - Additional query parameters for the request. OData params (e.g. { $filter, $top, $orderby })
 * @param {boolean} lazy - If true, prevents auto-fetch
 * 
 * @returns {{ data, error, loading, refetch, setQueryParams }}
 */

const useBridgeApi = (endpoint, queryParams = {}, lazy = false) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(!lazy);
    const [queryParamsInternal, setQueryParamsInternal] = useState(queryParams);

    const fetchData = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await axiosClient.get(endpoint, {
                params: queryParamsInternal,
            });
            setData(response.data);
        } catch(err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if(!lazy) {
            fetchData();
        }
    }, [endpoint, JSON.stringify(queryParamsInternal)]);

    return { data, error, loading, refetch: fetchData, setQueryParams: setQueryParamsInternal };
};

export default useBridgeApi;