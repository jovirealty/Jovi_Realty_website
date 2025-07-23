import { useState } from 'react';
import axios from 'axios';

const API_BASE = "https://api.jovirealty.com/api";

const useFormApi = (route) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [response, setResponse] = useState(null);

    // Call this to submit the form
    const submitForm = async (formData) => {
        setLoading(true);
        setError(null);
        setResponse(null);

        try {
            const res = await axios.post(`${API_BASE}/${route}`, formData, {
                headers: { "Content-Type": "application/json" }
            });
            setResponse(res.data);
            return res.data;
        } catch(err) {
            setError(err.response?.data?.message || "Something went wrong");
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return { loading, error, response, submitForm };
};

export default useFormApi;