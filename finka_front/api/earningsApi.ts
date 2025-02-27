import {$authHost} from "@/api/axiosApi";

export const addEarningsApi = async (name: string, amount: number, date: string) => {
    try {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("amount", amount.toString());
        formData.append("date", date);

        const response = await $authHost.post('/earnings/add/', formData, {
            headers: {
                ContentType: "application/json",
            }
        });

        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const getEarningsByIdApi = async (id: number) => {
    try {
        const response = await $authHost.get(`/earnings/${id}/`);
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const changeEarningsByIdApi = async (id: number) => {
    try {
        const response = await $authHost.put(`/earnings/change/${id}/`);
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const getEarningsFromTime1ToTime2Api = async (time1: number, time2: number) => {
    try {
        const response = await $authHost.get(`/earnings/show/${time1}/${time2}/`);
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const deleteEarningsByIdApi = async (id: number) => {
    try {
        const response = await $authHost.delete(`/earnings/delete/${id}/`);
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
}
