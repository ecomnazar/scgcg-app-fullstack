import Cookies from "js-cookie";
export const getAccessToken = () => Cookies.get("accessToken");
export const setAccessToken = (token: string) =>
  Cookies.set("accessToken", token);
export const removeAccessToken = () => Cookies.remove("accessToken");
