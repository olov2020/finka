import {$authHost} from "@/api/axiosApi";

export const addSavingsApi = async (name: string, money: number, date: string) => {
    try {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("money", money.toString());
        formData.append("date", date);

        const response = await $authHost.post('/savings/add/', formData, {
            headers: {
                ContentType: "application/json",
            }
        });

        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const getSavingsByIdApi = async (id: number) => {
    try {
        const response = await $authHost.get(`/savings/${id}/`);
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const changeSavingsByIdApi = async (id: number) => {
    try {
        const response = await $authHost.put(`/savings/change/${id}/`);
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const deleteSavingsByIdApi = async (id: number) => {
    try {
        const response = await $authHost.delete(`/savings/delete/${id}/`);
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
}
