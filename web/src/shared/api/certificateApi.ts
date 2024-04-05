import { API_ENDPOINTS } from "./endpoints";
import { instance } from "./instance";

interface Props {
  id: number;
  fullname: string;
  email: string;
}

export const getCertificateApi = async (data: Props) => {
  try {
    const response = await instance.post(API_ENDPOINTS.CERTIFICATE, data);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
