import http from "./http";
import API_URL_CONSTANTS from "./APIUrlConstants";

export const getSingleBillPattern = (id) => {
  return http.get(`${API_URL_CONSTANTS.BASE_BILL_PATTERN}/${id}`);
};

export const getAllBillPatterns = ({ signal }) => {
  return http.get(API_URL_CONSTANTS.BASE_BILL_PATTERN, {
    signal,
  });
};

export const createBillPattern = (data) => {
  return http.post(API_URL_CONSTANTS.BASE_BILL_PATTERN, data, {
    // headers: {
    //   "Content-Type": "multipart/form-data",
    // },
  });
};

export const updateBillPattern = (country_id, data) => {
  return http.patch(
    `${API_URL_CONSTANTS.BASE_BILL_PATTERN}/${country_id}`,
    data,
    // {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // }
  );
};
export const deleteBillPattern = (id) => {
  return http.delete(
    `${API_URL_CONSTANTS.BASE_BILL_PATTERN}/${id}`
  );
};

export const deleteManyBillPatterns = (ids) => {
  return http.post(
    `${API_URL_CONSTANTS.BASE_BILL_PATTERN}/bulk-delete`, ids
  );
};
