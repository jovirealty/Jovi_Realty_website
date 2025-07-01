import axios from 'axios';

const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_BRIDGE_API_BASE_URL}/v2/OData/bcres`,
    header: {
        'Content-Type': 'application/json',
    },
    params: {
        access_token: import.meta.env.VITE_BRIDGE_SERVER_ACCESS_TOKEN,
        $count: true,
    },
});

export default axiosClient;