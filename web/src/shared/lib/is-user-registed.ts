import Cookies from "js-cookie";

export const isUserRegistered = () => {
  const isRegistered = Cookies.get("accessToken");
  return isRegistered;
};
