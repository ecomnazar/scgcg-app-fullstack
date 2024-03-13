import { setUserLocalStorage } from "../lib/localStorage";
import { setAccessToken } from "../lib/token";
import { API_ENDPOINTS } from "./endpoints";
import { instance } from "./instance";
import { IResponse } from "./signupApi";

interface Props {
  email: string;
  password: string;
}

export const signinApi = async (data: Props) => {
  try {
    const response = (await instance.post(
      API_ENDPOINTS.SIGNIN,
      data
    )) as IResponse;
    console.log(response.data);
    setUserLocalStorage(JSON.stringify(response.data.user));
    setAccessToken(response.data.token);
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
