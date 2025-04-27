import { $authHost } from "@/api/axiosApi";
import { EarningsItemProps } from "@/types/EarningsItemProps.type";

export const addEarningsApi = async ({
  name,
  earning,
  date,
}: EarningsItemProps) => {
  try {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("earning", earning.toString());
    formData.append("date", date);
    const response = await $authHost.post('/earnings/', formData, {
      headers: {
        ContentType: "application/json",
      }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export const getEarningsByIdApi = async ({ id }: { id: number }) => {
  try {
    const response = await $authHost.get(`/earnings/${id}/`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export const getAllEarningsApi = async () => {
  try {
    const response = await $authHost.get(`/earnings/`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export const changeEarningsByIdApi = async ({
  id,
  name,
  earning,
  date,
}: EarningsItemProps & { id: number }) => {
  try {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("earning", earning);
    formData.append("date", date);
    const response = await $authHost.patch(`/earnings/${id}/`, formData, {
      headers: {
        ContentType: "application/json",
      }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export const getEarningsFromDatesApi = async ({ date1, date2 }: { date1: string, date2: string }) => {
  try {
    const response = await $authHost.get(`/earnings/?start_date=${date1}&end_date=${date2}`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export const deleteEarningsByIdApi = async ({ id }: { id: number }) => {
  try {
    const response = await $authHost.delete(`/earnings/${id}/`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}
