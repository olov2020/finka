import {$host} from "./axiosApi";

export const userRegistrationApi = async (email: string, password: string) => {
    return await $host.post(`/signup/`, {email, password})
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return new Error(error.data.message);
        })
};

export const userLoginApi = async (email: string, password: string) => {
    const response = await $host.post(`/login/`, {email, password});

    localStorage.setItem("access_token", response.data.access_token);
    localStorage.setItem("refresh_token", response.data.refresh_token);
    return response.data;
};