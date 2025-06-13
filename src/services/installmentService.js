import API_URL_CONSTANTS from "./APIUrlConstants";
import http from "./http";

export const getSingleInstallment = (id) => {
  return http.get(`${API_URL_CONSTANTS.BASE_CONTRACT}/${API_URL_CONSTANTS.BASE_INSTALLMENTS}/${id}`);
};

export const getInstallmentByContractId = (contractId) => {
  return http.get(`${API_URL_CONSTANTS.BASE_CONTRACT}/${API_URL_CONSTANTS.BASE_INSTALLMENTS}?contractId=${contractId}`);
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