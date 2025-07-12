import API_URL_CONSTANTS from "./APIUrlConstants";
import http from "./http";

export const getSingleReturn = (id, signal) => {
  return http.get(`${API_URL_CONSTANTS.BASE_RETURN}/${id}`);
};

export const getAllReturns = (signal) => {
  return http.get(API_URL_CONSTANTS.BASE_RETURN);
};

export const createReturn = (data) => {
  return http.post(API_URL_CONSTANTS.BASE_RETURN, data, {
    // headers: {
    //   "Content-Type": "multipart/form-data",
    // },
  });
};

export const updateReturn = (id, data) => {
  return http.put(
    `${API_URL_CONSTANTS.BASE_RETURN}/${id}`,
    data,
    // {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // }
  );
};

export const deleteReturn = (id) => {
  return http.delete(
    `${API_URL_CONSTANTS.BASE_RETURN}/${id}`
  );
};

export const getReturnByChequeId = (chequeId) => {
  return http.get(`${API_URL_CONSTANTS.BASE_RETURN}/cheque/${chequeId}`);
};
