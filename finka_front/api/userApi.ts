import { $authHost, $host } from "./axiosApi";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const registrationApi = async (email: string, password: string) => {
  try {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    const response = await $host.post(`/account/register/`, formData, {
      headers: {
        ContentType: "application/json",
      }
    });

    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const loginApi = async (email: string, password: string) => {
  try {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    const response = await $host.post(`/account/login/`, formData, {
      headers: {
        ContentType: "application/json",
      }
    });

    await AsyncStorage.setItem("access", response.data.access);
    await AsyncStorage.setItem("refresh", response.data.refresh);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const changeAccountDataApi = async (email: string, name: string, surname: string) => {
  try {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("name", name);
    formData.append("surname", surname);
    const response = await $authHost.patch(`/account/`, formData, {
      headers: {
        ContentType: "application/json",
      }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export const postHelpMessage = async (message: string, tg: string) => {
  try {
    const formData = new FormData();
    formData.append("message", message);
    formData.append("tg", tg);
    const response = await $authHost.post(`/help/`, formData, {
      headers: {
        ContentType: "application/json",
      }
    });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}
