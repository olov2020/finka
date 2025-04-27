import { $authHost } from "@/api/axiosApi";
import { SavingsItemProps } from "@/types/SavingsItemProps.type";

export const getAllSavingsApi = async () => {
  try {
    const response = await $authHost.get(`/savings/`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export const addSavingsApi = async ({ name, saving, date }: SavingsItemProps) => {
  try {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("saving", saving.toString());
    formData.append("date", date);

    const response = await $authHost.post('/savings/', formData, {
      headers: {
        ContentType: "application/json",
      }
    });

    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export const getSavingsByIdApi = async ({ id }: { id: number }) => {
  try {
    const response = await $authHost.get(`/savings/${id}/`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export const changeSavingsByIdApi = async ({
  id,
  name,
  saving,
  date,
}: SavingsItemProps & { id: number }) => {
  try {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("saving", saving);
    formData.append("date", date);
    const response = await $authHost.patch(`/savings/${id}/`, formData, {
      headers: {
        ContentType: "application/json",
      }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export const deleteSavingsByIdApi = async ({ id }: { id: number }) => {
  try {
    const response = await $authHost.delete(`/savings/${id}/`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}
