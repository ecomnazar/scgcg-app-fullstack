import { API_ENDPOINTS } from "./endpoints";
import { instance } from "./instance";

export const getUsersApi = async () => {
  try {
    const response = await instance.get(API_ENDPOINTS.USER);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
