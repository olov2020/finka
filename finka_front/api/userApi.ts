import {$host} from "./axiosApi";

export const register = async (email: string, password: string) => {
    return await $host.post(`/signUp`, {email, password})
        .then((response) => {
            return response.data;
        })
        .catch((error: { message: '' }) => {
            alert(`Упс... что-то пошло не так! ${error.message}`);
            return false;
        })
};

export const login = async (email: string, password: string) => {
    const response = await $host.post(`/signIn`, {email, password});
    return response.data;
};