import { $authHost } from "@/api/axiosApi";
import { SpendingsItemProps } from "@/types/SpendingsItemProps.type";

export const addSpendingsApi = async ({
  name,
  category,
  price,
  date,
}: SpendingsItemProps) => {
  try {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("category", category);
    formData.append("price", price);
    formData.append("date", date);
    const response = await $authHost.post('/spendings/', formData, {
      headers: {
        ContentType: "application/json",
      }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export const getAllSpendingsApi = async () => {
  try {
    const response = await $authHost.get(`/spendings/`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export const changeSpendingsByIdApi = async ({
  id,
  name,
  category,
  price,
  date,
}: SpendingsItemProps & { id: number }) => {
  try {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("category", category);
    formData.append("price", price);
    formData.append("date", date);
    const response = await $authHost.patch(`/spendings/${id}/`, formData, {
      headers: {
        ContentType: "application/json",
      }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export const getSpendingsFromDatesApi = async ({ date1, date2 }: { date1: string, date2: string }) => {
  try {
    const response = await $authHost.get(`/spendings/?start_date=${date1}&end_date=${date2}`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export const deleteSpendingsByIdApi = async ({ id }: { id: number }) => {
  try {
    const response = await $authHost.delete(`/spendings/${id}/`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export const getAnaliticsApi = async() => {
  try {
    const response = await $authHost.get(`/analytics/`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}
