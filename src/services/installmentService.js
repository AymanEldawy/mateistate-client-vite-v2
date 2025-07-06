import API_URL_CONSTANTS from "./APIUrlConstants";
import http from "./http";

export const getSingleInstallment = (id) => {
  return http.get(`${API_URL_CONSTANTS.BASE_CONTRACT}/${API_URL_CONSTANTS.BASE_INSTALLMENTS}/${id}`);
};

export const getInstallmentByContractId = (contractId) => {
  return http.get(`${API_URL_CONSTANTS.BASE_CONTRACT}/${contractId}${API_URL_CONSTANTS.BASE_INSTALLMENTS}`);
};

export const createInstallment = (data) => {
  console.log(data,'data installment');
  
  return http.post(`${API_URL_CONSTANTS.BASE_CONTRACT}/${API_URL_CONSTANTS.BASE_INSTALLMENTS}`, data);
};

export const installmentCanUpdateCheques = (installmentId) => {
  return http.get(`${API_URL_CONSTANTS.BASE_CONTRACT}/${API_URL_CONSTANTS.BASE_INSTALLMENTS}/${installmentId}/can-update`);
};

export const updateInstallment = (installmentId, data) => {
  return http.put(
    `${API_URL_CONSTANTS.BASE_CONTRACT}/${API_URL_CONSTANTS.BASE_INSTALLMENTS}/${installmentId}`,
    data,
    // {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // }
  );
};