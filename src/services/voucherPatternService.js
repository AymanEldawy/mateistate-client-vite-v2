import API_URL_CONSTANTS from "./APIUrlConstants";
import http from "./http";

export const getSingleVoucherPattern = (id) => {
  return http.get(`${API_URL_CONSTANTS.BASE_VOUCHER_PATTERN}/${id}`);
};

export const getSearchVoucherPattern = (value, signal) => {
  return http.get(`${API_URL_CONSTANTS.BASE_VOUCHER_PATTERN}?search=${value}`, {
    signal,
  });
};

export const getAllVoucherPatterns = (signal) => {
  return http.get(API_URL_CONSTANTS.BASE_VOUCHER_PATTERN);
};

export const createVoucherPattern = (data) => {
  return http.post(API_URL_CONSTANTS.BASE_VOUCHER_PATTERN, data, {
    // headers: {
    //   "Content-Type": "multipart/form-data",
    // },
  });
};

export const updateVoucherPattern = (country_id, data) => {
  return http.patch(
    `${API_URL_CONSTANTS.BASE_VOUCHER_PATTERN}/${country_id}`,
    data,
    // {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // }
  );
};
export const deleteVoucherPattern = (id) => {
  return http.delete(
    `${API_URL_CONSTANTS.BASE_VOUCHER_PATTERN}/${id}`
  );
};

export const deleteManyVoucherPatterns = (ids) => {
  return http.post(
    `${API_URL_CONSTANTS.BASE_VOUCHER_PATTERN}/bulk-delete`, {ids}
  );
};


export const getVoucherPatternByCode = (code) => {
  return http.get(`${API_URL_CONSTANTS.BASE_VOUCHER_PATTERN}/code/${code}`);
};