import {$authHost} from "@/api/axiosApi";

export const addBalanceApi = async (balance: string, date_from: string, date_to: string, evenly: boolean) => {
    try {
        const formData = new FormData();
        formData.append("balance", balance);
        formData.append("date_from", date_from);
        formData.append("date_to", date_to);
        formData.append("evenly", evenly.toString());

        const response = await $authHost.post('/balance/add/', formData, {
            headers: {
                ContentType: "application/json",
            }
        });

        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const getBalanceByIdApi = async (id: number) => {
    try {
        const response = await $authHost.get(`/balance/${id}/`);
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const changeBalanceByIdApi = async (id: number) => {
    try {
        const response = await $authHost.put(`/balance/change/${id}/`);
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const getBalanceToClosestDateApi = async () => {
    try {
        const response = await $authHost.get(`/balance/`);
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const deleteBalanceByIdApi = async (id: number) => {
    try {
        const response = await $authHost.delete(`/balance/delete/${id}/`);
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
}
