import http from "./http";
import API_URL_CONSTANTS from "./APIUrlConstants";

export const getSingleBank = (id) => {
  return http.get(`${API_URL_CONSTANTS.BASE_BANK}/${id}`);
};

export const getAllBanks = (signal) => {
  return http.get(API_URL_CONSTANTS.BASE_BANK);
};

export const createBank = (data) => {
  return http.post(API_URL_CONSTANTS.BASE_BANK, data, {
    // headers: {
    //   "Content-Type": "multipart/form-data",
    // },
  });
};

export const updateBank = (bank_id, data) => {
  return http.patch(
    `${API_URL_CONSTANTS.BASE_BANK}/${bank_id}`,
    data,
    // {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // }
  );
};

export const deleteBank = (id) => {
  return http.delete(
    `${API_URL_CONSTANTS.BASE_BANK}/${id}`
  );
};

export const deleteManyBanks = (ids) => {
  return http.post(
    `${API_URL_CONSTANTS.BASE_BANK}/bulk-delete`, ids
  );
};

