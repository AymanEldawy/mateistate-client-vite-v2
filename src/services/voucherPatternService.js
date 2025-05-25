import http from "./http";
import API_URL_CONSTANTS from "./APIUrlConstants";

export const getSingleVoucherPattern = (id) => {
  return http.get(`${API_URL_CONSTANTS.BASE_VOUCHER_PATTERN}/${id}`);
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
    `${API_URL_CONSTANTS.BASE_VOUCHER_PATTERN}/bulk-delete`, ids
  );
};
