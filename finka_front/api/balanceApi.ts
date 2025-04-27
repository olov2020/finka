import { $authHost } from "@/api/axiosApi";
import { BalanceItemProps } from "@/types/BalanceItemProps.type";

export const getAllBalanceApi = async () => {
  try {
    const response = await $authHost.get(`/balance/`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}


export const addBalanceApi = async ({ name, balance, start_date, end_date }: BalanceItemProps) => {
  try {
    const formData = new FormData();
    formData.append("balance", balance);
    formData.append("name", name);
    formData.append("start_date", start_date);
    formData.append("end_date", end_date);
    const response = await $authHost.post('/balance/', formData, {
      headers: {
        ContentType: "application/json",
      }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export const getBalanceByIdApi = async ({ id }: { id: number }) => {
  try {
    const response = await $authHost.get(`/balance/${id}/`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export const changeBalanceByIdApi = async ({
  name, balance, start_date, end_date, id,
}: BalanceItemProps & { id: number }) => {
  try {
    const formData = new FormData();
    formData.append("balance", balance);
    formData.append("name", name);
    formData.append("start_date", start_date);
    formData.append("end_date", end_date);
    const response = await $authHost.patch(`/balance/${id}/`, formData, {
      headers: {
        ContentType: "application/json",
      }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export const deleteBalanceByIdApi = async ({ id }: { id: number }) => {
  try {
    const response = await $authHost.delete(`/balance/${id}/`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}
