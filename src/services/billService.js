import http from "./http";
import API_URL_CONSTANTS from "./APIUrlConstants";

export const getSingleBill = (id, signal) => {
  return http.get(`${API_URL_CONSTANTS.BASE_BILLS}/${id}`, {
    signal,
  });
};

export const getAllBills = ({ signal }) => {
  return http.get(API_URL_CONSTANTS.BASE_BILLS, {
    signal,
  });
};

export const createBill = (data) => {
  return http.post(API_URL_CONSTANTS.BASE_BILLS, data, {
    // headers: {
    //   "Content-Type": "multipart/form-data",
    // },
  });
};

export const updateBill = (country_id, data) => {
  return http.patch(
    `${API_URL_CONSTANTS.BASE_BILLS}/${country_id}`,
    data,
    // {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // }
  );
};

export const deleteBill = (id) => {
  return http.delete(
    `${API_URL_CONSTANTS.BASE_BILLS}/${id}`
  );
};

export const deleteManyBills = (ids) => {
  return http.post(
    `${API_URL_CONSTANTS.BASE_BILLS}/bulk-delete`, ids
  );
};


export const getSearchBill = (value) => {
  return http.get(`${API_URL_CONSTANTS.BASE_BILLS}/${value}`);
};

export const getBillPatternByCode = (code) => {
  return http.get(`${API_URL_CONSTANTS.BASE_BILLS}/${code}`);
};