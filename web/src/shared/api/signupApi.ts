import { setUserLocalStorage } from "../lib/localStorage";
import { setAccessToken } from "../lib/token";
import { API_ENDPOINTS } from "./endpoints";
import { instance } from "./instance";

export interface IUser {
  email: string;
  fullname: string;
  gender: string;
  region: string;
}

interface Props {
  email: string;
  password: string;
  fullname: string;
  region: string;
  gender: string;
}

export interface IResponse {
  data: {
    token: string;
    user: IUser;
  };
}

export const signupApi = async (data: Props) => {
  try {
    const response = (await instance.post(
      API_ENDPOINTS.SIGNUP,
      data
    )) as IResponse;
    setUserLocalStorage(JSON.stringify(response.data.user));
    setAccessToken(response.data.token);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
