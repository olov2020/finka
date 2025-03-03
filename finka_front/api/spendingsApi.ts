import {$authHost} from "@/api/axiosApi";

export const addSpendingsApi = async (name: string, categories: string[], amount: number, amount_measure: string, price: number, date: string, result: number) => {
    try {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("categories", categories.toString());
        formData.append("amount", amount.toString());
        formData.append("amount_measure", amount_measure);
        formData.append("price", price.toString());
        formData.append("date", date);
        formData.append("result", result.toString());

        const response = await $authHost.post('/spendings/add/', formData, {
            headers: {
                ContentType: "application/json",
            }
        });

        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const getSpendingsByIdApi = async (id: number) => {
    try {
        const response = await $authHost.get(`/spendings/${id}/`);
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const changeSpendingsByIdApi = async (id: number) => {
    try {
        const response = await $authHost.put(`/spendings/change/${id}/`);
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const getSpendingsFromTime1ToTime2Api = async (time1: string, time2: string) => {
    try {
        const response = await $authHost.get(`/spendings/show/${time1}/${time2}/`);
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const deleteSpendingsByIdApi = async (id: number) => {
    try {
        const response = await $authHost.delete(`/spendings/delete/${id}/`);
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
}
