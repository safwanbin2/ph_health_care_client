import { jwtDecode } from "jwt-decode";

export const storeUserInfo = (token: string) => {
  if (!token || window === undefined) {
    return;
  }
  return localStorage.setItem("accessToken", token);
};

export const getUserInfo = () => {
  const token = localStorage.getItem("accessToken");
  if (!token) return;
  let decoded: any = jwtDecode(token);
  return {
    ...decoded,
    role: decoded?.role.toLowerCase(),
  };
};
