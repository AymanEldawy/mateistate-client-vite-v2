import http from "./http";
import API_URL_CONSTANTS from "./APIUrlConstants";

export const getSingleVoucher = ({ id, signal }) => {
  return http.get(`${API_URL_CONSTANTS.BASE_VOUCHER}/${id}`, {
    signal,
  });
};

export const getAllVouchers = ({ signal }) => {
  return http.get(API_URL_CONSTANTS.BASE_VOUCHER, {
    signal,
  });
};

export const createVoucher = (data) => {
  return http.post(API_URL_CONSTANTS.BASE_VOUCHER, data, {
    // headers: {
    //   "Content-Type": "multipart/form-data",
    // },
  });
};

export const updateVoucher = (country_id, data) => {
  return http.patch(
    `${API_URL_CONSTANTS.BASE_VOUCHER}/${country_id}`,
    data,
    // {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // }
  );
};

export const deleteVoucher = (id) => {
  return http.delete(
    `${API_URL_CONSTANTS.BASE_VOUCHER}/${id}`
  );
};

export const deleteManyVouchers = (ids) => {
  return http.delete(
    `${API_URL_CONSTANTS.BASE_VOUCHER}?ids=${ids.join(',')}`
  );
};


export const getVoucherLastNumberByType = (code) => {
  return http.get(`${API_URL_CONSTANTS.BASE_VOUCHER}/last?code=${code}`);
};

export const getSearchVoucher = (value) => {
  return http.get(`${API_URL_CONSTANTS.BASE_VOUCHER}/${value}`);
};
