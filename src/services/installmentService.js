import http from "./http";
import API_URL_CONSTANTS from "./APIUrlConstants";

export const getSingleInstallment = (contractId) => {
  return http.get(`${API_URL_CONSTANTS.BASE_CONTRACT}/${API_URL_CONSTANTS.BASE_INSTALLMENTS}/${contractId}`);
};

export const createInstallment = (data) => {
  return http.post(`${API_URL_CONSTANTS.BASE_CONTRACT}/${API_URL_CONSTANTS.BASE_INSTALLMENTS}`, data);
};

export const updateInstallment = (installmentId, data) => {
  return http.patch(
    `${API_URL_CONSTANTS.BASE_CONTRACT}/${API_URL_CONSTANTS.BASE_INSTALLMENTS}/${installmentId}`,
    data,
    // {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // }
  );
};