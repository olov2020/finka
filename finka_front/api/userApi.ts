import {$host} from "./axiosApi";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const userRegistrationApi = async (email: string, password: string) => {
    try {
        const response = await $host.post(`/signup/`, { email, password });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const userLoginApi = async (email: string, password: string) => {
    try {
        const response = await $host.post(`/login/`, { email, password });
        await AsyncStorage.setItem("access_token", response.data.access_token);
        await AsyncStorage.setItem("refresh_token", response.data.refresh_token);
        return response.data;
    } catch (error) {
        throw error;
    }
};
