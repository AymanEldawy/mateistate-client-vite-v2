import http from "./http";
import API_URL_CONSTANTS from "./APIUrlConstants";

export const getSingleChequePattern = (id) => {
  return http.get(`${API_URL_CONSTANTS.BASE_CHEQUE_PATTERN}/${id}`);
};

export const getSearchChequePattern = (value) => {
  return http.get(`${API_URL_CONSTANTS.BASE_CHEQUE_PATTERN}?search=${value}`);
};

export const getAllChequePatterns = (signal) => {
  return http.get(API_URL_CONSTANTS.BASE_CHEQUE_PATTERN);
};

export const createChequePattern = (data) => {
  return http.post(API_URL_CONSTANTS.BASE_CHEQUE_PATTERN, data, {
    // headers: {
    //   "Content-Type": "multipart/form-data",
    // },
  });
};

export const updateChequePattern = (country_id, data) => {
  return http.patch(
    `${API_URL_CONSTANTS.BASE_CHEQUE_PATTERN}/${country_id}`,
    data,
    // {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // }
  );
};
export const deleteChequePattern = (id) => {
  return http.delete(
    `${API_URL_CONSTANTS.BASE_CHEQUE_PATTERN}/${id}`
  );
};

export const deleteManyChequePatterns = (ids) => {
  return http.post(
    `${API_URL_CONSTANTS.BASE_CHEQUE_PATTERN}/bulk-delete`, ids
  );
};

export const getChequePatternByCode = (code) => {
  return http.get(`${API_URL_CONSTANTS.BASE_CHEQUE_PATTERN}/${code}`);
};