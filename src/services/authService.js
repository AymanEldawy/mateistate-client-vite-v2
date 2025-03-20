import http from "./http";
import API_URL_CONSTANTS from "./APIUrlConstants";

export const loginService = (userData) => {
  return http.post(`${API_URL_CONSTANTS.BASE_AUTH}/signin`, userData);
};

export const verifyService = (email, code) => {
  return http.post(`${API_URL_CONSTANTS.BASE_AUTH}/verify`, {
    email,
    code
  });
};

export const changePasswordService = (oldPassword, newPassword) => {
  return http.post(`${API_URL_CONSTANTS.BASE_AUTH}/change-password`, {
    oldPassword,
    newPassword
  });
};

export const forgotPasswordService = (userEmail) => {
  return http.post(`${API_URL_CONSTANTS.BASE_AUTH}/forget-password`, {
    email: userEmail,
  });
};

export const changeEmailService = (email, password) => {
  return http.post(`${API_URL_CONSTANTS.BASE_AUTH}/change-email`, {
    email,
    password
  });
};

export const resetPasswordService = (data) => {
  return http.patch(`${API_URL_CONSTANTS.BASE_AUTH}/reset-password`, data);
};

export const refreshToken = (data) => {
  return http.post(`${API_URL_CONSTANTS.BASE_AUTH}/refresh-token`, data);
};

export const logout = (data) => {
  return http.post(`${API_URL_CONSTANTS.BASE_AUTH}/refresh-token`, data);
};