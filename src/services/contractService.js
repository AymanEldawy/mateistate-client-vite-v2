import http from "./http";
import API_URL_CONSTANTS from "./APIUrlConstants";

export const getSingleContract = (id, signal) => {
  return http.get(`${API_URL_CONSTANTS.BASE_CONTRACT}/${id}`, {
    signal,
  });
};

export const getAllContracts = (signal) => {
  return http.get(API_URL_CONSTANTS.BASE_CONTRACT, {
    signal,
  });
};

export const createContract = (data) => {
  return http.post(API_URL_CONSTANTS.BASE_CONTRACT, data, {
    // headers: {
    //   "Content-Type": "multipart/form-data",
    // },
  });
};

export const updateContract = (country_id, data) => {
  return http.patch(
    `${API_URL_CONSTANTS.BASE_CONTRACT}/${country_id}`,
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
    `${API_URL_CONSTANTS.BASE_CONTRACT}/bulk-delete`, ids
  );
};

export const getSearchContract = (value) => {
  return http.get(`${API_URL_CONSTANTS.BASE_CHEQUE}/${value}`);
};


