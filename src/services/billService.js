import http from "./http";
import API_URL_CONSTANTS from "./APIUrlConstants";

export const getSingleBill = (id) => {
  return http.get(`${API_URL_CONSTANTS.BASE_BILLS}/${id}`);
};

export const getAllBills = (signal) => {
  return http.get(API_URL_CONSTANTS.BASE_BILLS, {
    signal,
  });
};

export const createBill = (data) => {
  return http.post(API_URL_CONSTANTS.BASE_BILLS, data);
};

export const updateBill = (id, data) => {
  return http.put(`${API_URL_CONSTANTS.BASE_BILLS}/${id}`, data);
};

export const deleteBill = (id) => {
  return http.delete(`${API_URL_CONSTANTS.BASE_BILLS}/${id}`);
};

export const deleteManyBills = (ids) => {
  return http.post(`${API_URL_CONSTANTS.BASE_BILLS}/bulk-delete`, ids);
};

export const getSearchBill = (value) => {
  return http.get(`${API_URL_CONSTANTS.BASE_BILLS}?search=${value}`);
};

export const getBillPatternByCode = (code) => {
  return http.get(`${API_URL_CONSTANTS.BASE_BILLS}/${code}`);
};