export const storeUserInfo = (token: string) => {
  if (!token || window === undefined) {
    return;
  }
  return localStorage.setItem("accessToken", token);
};
