import { $authHost } from "@/api/axiosApi";
import { ReminderItemProps } from "@/types/ReminderItemProps.type";

export const addReminderApi = async ({ name, price, date, link }: ReminderItemProps) => {
  try {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price.toString());
    formData.append("date", date);
    formData.append("link", link);
    const response = await $authHost.post('/reminders/', formData, {
      headers: {
        ContentType: "application/json",
      }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export const getReminderByIdApi = async ({ id }: { id: number }) => {
  try {
    const response = await $authHost.get(`/reminders/${id}/`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export const changeReminderByIdApi = async ({
  name, price, date, link, id
}: ReminderItemProps & { id: number }) => {
  try {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price.toString());
    formData.append("date", date);
    formData.append("link", link);
    const response = await $authHost.patch(`/reminders/${id}/`, formData);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export const getAllReminderApi = async () => {
  try {
    const response = await $authHost.get(`/reminders/`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export const deleteReminderByIdApi = async ({ id }: { id: number }) => {
  try {
    const response = await $authHost.delete(`/reminders/${id}/`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}
