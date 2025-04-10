import {$authHost} from "@/api/axiosApi";

export const addReminderApi = async (name: string, money: number, date: string, time: string, url: string) => {
    try {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("money", money.toString());
        formData.append("date", date);
        formData.append("time", time);
        formData.append("url", url);

        const response = await $authHost.post('/reminder/add/', formData, {
            headers: {
                ContentType: "application/json",
            }
        });

        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const getReminderByIdApi = async (id: number) => {
    try {
        const response = await $authHost.get(`/reminder/${id}/`);
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const changeReminderByIdApi = async (id: number) => {
    try {
        const response = await $authHost.put(`/reminder/change/${id}/`);
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const getAllReminderApi = async () => {
    try {
        const response = await $authHost.get(`/reminder/`);
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const deleteReminderByIdApi = async (id: number) => {
    try {
        const response = await $authHost.delete(`/reminder/delete/${id}/`);
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
}
