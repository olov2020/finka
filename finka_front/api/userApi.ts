import {$authHost, $host} from "./axiosApi";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const registrationApi = async (email: string, password: string) => {
    try {
        const formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);
        const response = await $host.post(`/signup/`, formData, {
            headers: {
                ContentType: "application/json",
            }
        });

        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const loginApi = async (email: string, password: string) => {
    try {
        const formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);
        const response = await $host.post(`/login/`, formData, {
            headers: {
                ContentType: "application/json",
            }
        });

        await AsyncStorage.setItem("access_token", response.data.access_token);
        await AsyncStorage.setItem("refresh_token", response.data.refresh_token);
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const forgotPasswordApi = async (email: string) => {
    try {
        const formData = new FormData();
        formData.append("email", email);
        const response = await $host.post(`/forgot-password/`, formData, {
            headers: {
                ContentType: "application/json",
            }
        });

        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const changeAccountDataApi = async (email: string, name: string) => {
    try {
        const formData = new FormData();
        formData.append("email", email);
        formData.append("name", name);
        const response = await $authHost.put(`/account/change/`, formData, {
            headers: {
                ContentType: "application/json",
            }
        });

        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const getAccountDataApi = async () => {
    try {
        const response = await $authHost.get(`/account/`);
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
}