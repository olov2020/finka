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
        const refreshToken = AsyncStorage.getItem('refresh_token');

        const response = await $host.post('/refresh/', { refreshToken });
        const { accessToken, newRefreshToken } = response.data;

        AsyncStorage.setItem('access_token', accessToken);
        AsyncStorage.setItem('refresh_token', newRefreshToken);

        return accessToken;
    } catch (error) {
        console.error('Error refreshing access token:', error);
        throw error;
    }
};

$authHost.interceptors.request.use(
    async (config) => {
        const accessToken = AsyncStorage.getItem('access_token');
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
