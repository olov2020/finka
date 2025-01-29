import {$host} from "./axiosApi";

export const userRegistrationApi = async (email: string, password: string) => {
    return await $host.post(`/signUp`, {email, password})
        .then((response) => {
            return response.data;
        })
        .catch((error: { message: '' }) => {
            return error.message;
        })
};

export const userLoginApi = async (email: string, password: string) => {
    const response = await $host.post(`/signIn`, {email, password});
    return response.data;
};