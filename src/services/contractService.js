import API_URL_CONSTANTS from "./APIUrlConstants";
import http from "./http";

export const getSingleContract = (id, signal) => {
  return http.get(`${API_URL_CONSTANTS.BASE_CONTRACT}/${id}`);
};

export const getAllContracts = (signal) => {
  return http.get(API_URL_CONSTANTS.BASE_CONTRACT);
};

export const createContract = (data) => {
  return http.post(API_URL_CONSTANTS.BASE_CONTRACT, data, {
    // headers: {
    //   "Content-Type": "multipart/form-data",
    // },
  });
};

export const renewContract = (contractId, data) => {
  return http.post(`${API_URL_CONSTANTS.BASE_CONTRACT}/${contractId}`, data, {
    // headers: {
    //   "Content-Type": "multipart/form-data",
    // },
  });
};

export const updateContract = (contractId, data) => {
  return http.put(
    `${API_URL_CONSTANTS.BASE_CONTRACT}/${contractId}`,
    data,
    // {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // }
  );
};

export const deleteContract = (id) => {
  return http.delete(
    `${API_URL_CONSTANTS.BASE_CONTRACT}/${id}`
  );
};

export const deleteManyContracts = (ids) => {
  return http.post(
    `${API_URL_CONSTANTS.BASE_CONTRACT}/bulk-delete`, {ids}
  );
};

export const getSearchContract = (value) => {
  return http.get(`${API_URL_CONSTANTS.BASE_CONTRACT}?search=${value}`);
};


