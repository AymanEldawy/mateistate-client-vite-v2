import http from "./http";
import API_URL_CONSTANTS from "./APIUrlConstants";

export const getSingleVoucher = (id) => {
  return http.get(`${API_URL_CONSTANTS.BASE_VOUCHER}/${id}`);
};

export const getAllVouchers = (signal) => {
  return http.get(API_URL_CONSTANTS.BASE_VOUCHER);
};

export const createVoucher = (data) => {
  return http.post(API_URL_CONSTANTS.BASE_VOUCHER, data);
};

export const createVoucherWithDetails = (data) => {
  return http.post(`${API_URL_CONSTANTS.BASE_VOUCHER}/with-details`, data);
};

export const updateVoucher = (id, data) => {
  return http.put(`${API_URL_CONSTANTS.BASE_VOUCHER}/${id}`, data);
};

export const createVoucherGridEntry = (voucherId, data) => {
  return http.post(`${API_URL_CONSTANTS.BASE_VOUCHER}/${voucherId}/grid`, data);
};

export const getVoucherGridEntries = (voucherId) => {
  return http.get(`${API_URL_CONSTANTS.BASE_VOUCHER}/${voucherId}/grid`);
};

export const createVoucherPictures = (voucherId, data) => {
  return http.post(`${API_URL_CONSTANTS.BASE_VOUCHER}/${voucherId}/pictures`, data);
};

export const getVoucherPictures = (voucherId) => {
  return http.get(`${API_URL_CONSTANTS.BASE_VOUCHER}/${voucherId}/pictures`);
}; 