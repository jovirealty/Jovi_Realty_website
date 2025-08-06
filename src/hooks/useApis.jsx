import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const useApis = (endpoint, queryParams={}, options={}) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(!options.lazy);
    const [error, setError] = useState(null);
    const [params, setParams] = useState(queryParams);

    const fetchData = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get(`${import.meta.env.VITE_JOVI_API}${endpoint}`, {
                params,
                ...options,
            });
            setData(response.data);
        } catch (err) {
            console.log('error from useApis', err.message );
            setError(err);
        } finally {
            setLoading(false);
        }
    }, [endpoint, JSON.stringify(params)]);

    useEffect(() => {
        if(!options.lazy) {
            fetchData();
        }
    }, [fetchData, options.lazy]);

    return { data, loading, error, refetch: fetchData, setParams };
};

export default useApis;