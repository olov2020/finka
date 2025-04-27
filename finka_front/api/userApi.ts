import {$authHost, $host} from "./axiosApi";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const registrationApi = async (email: string, password: string) => {
    try {
        const formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);
        const response = await $host.post(`/account/register/`, formData, {
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
        const response = await $host.post(`/account/login/`, formData, {
            headers: {
                ContentType: "application/json",
            }
        });

        await AsyncStorage.setItem("access", response.data.access);
        await AsyncStorage.setItem("refresh", response.data.refresh);
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const changeAccountDataApi = async (email: string, name: string, surname: string, id: number) => {
    try {
        const formData = new FormData();
        formData.append("email", email);
        formData.append("name", name);
        formData.append("surname", surname);
        const response = await $authHost.patch(`/account/${id}/`, formData, {
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