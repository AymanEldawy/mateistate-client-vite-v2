import http from "./http";
import API_URL_CONSTANTS from "./APIUrlConstants";

export const getSingleVoucher = (id) => {
  return http.get(`${API_URL_CONSTANTS.BASE_VOUCHER}/${id}`);
};

export const getAllVouchers = (signal) => {
  return http.get(API_URL_CONSTANTS.BASE_VOUCHER, {
    signal,
  });
};

export const createVoucher = (data) => {
  return http.post(API_URL_CONSTANTS.BASE_VOUCHER, data);
};

export const updateVoucher = (id, data) => {
  return http.put(`${API_URL_CONSTANTS.BASE_VOUCHER}/${id}`, data);
};

export const deleteVoucher = (id) => {
  return http.delete(`${API_URL_CONSTANTS.BASE_VOUCHER}/${id}`);
};

export const deleteManyVouchers = (ids) => {
  return http.post(`${API_URL_CONSTANTS.BASE_VOUCHER}/bulk-delete`, ids);
};

export const getSearchVoucher = (value) => {
  return http.get(`${API_URL_CONSTANTS.BASE_VOUCHER}?search=${value}`);
};

export const getVouchersByType = (voucherType, signal) => {
  return http.get(`${API_URL_CONSTANTS.BASE_VOUCHER}?voucherType=${voucherType}`, {
    signal,
  });
}; 