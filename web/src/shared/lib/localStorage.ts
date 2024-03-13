export const setUserLocalStorage = (data: string) =>
  localStorage.setItem("user", data);
export const getUserLocalStorage = () =>
  localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")!)
    : null;
