import axios from 'axios';

// Creating a central "client" so we can config it once
const api = axios.create({
    baseURL: 'http://localhost:8080', // Connecting to Spring Boot
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token'); // Get from browser storage
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default api;