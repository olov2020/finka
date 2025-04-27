import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const $host = axios.create({
    baseURL: 'http://localhost:8000/api',
});

export const $authHost = axios.create({
    baseURL: 'http://localhost:8000/api',
});

// Function to refresh the access token
const refreshAccessToken = async () => {
    try {
        const refreshToken = await AsyncStorage.getItem('refresh');

        const response = await $host.get(`/account/refresh_token/${refreshToken}/`);
        const { access, refresh } = response.data;

        await AsyncStorage.setItem('access', access);
        await AsyncStorage.setItem('refresh', refresh);

        return access;
    } catch (error) {
        console.error('Error refreshing access token:', error);
        throw error;
    }
};

$authHost.interceptors.request.use(
    async (config) => {
        const accessToken = await AsyncStorage.getItem('access');
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

$authHost.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                const newAccessToken = await refreshAccessToken();
                axios.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;
                originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
                return $authHost(originalRequest);
            } catch (refreshError) {
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);
