import axios from "axios";

export const $host = axios.create({
    baseURL: 'http://localhost:8000/api',
});

export const $authHost = axios.create({
    baseURL: 'http://localhost:8000/api',
});

$authHost.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem('access_token');
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);