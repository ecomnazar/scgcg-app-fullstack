export const setUserLocalStorage = (data: string) =>
  localStorage.setItem("user", data);
export const getUserLocalStorage = () =>
  localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")!)
    : null;

export const removeUserLocalStorage = () => localStorage.removeItem("user");

// ----------------

export const setActiveCourseLS = (data: string) =>
  localStorage.setItem("activeCourse", data);
export const getActiveCourse = (): number[] =>
  localStorage.getItem("activeCourse")
    ? JSON.parse(localStorage.getItem("activeCourse")!)
    : [0, 0];
