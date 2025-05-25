import http from "./http";
import API_URL_CONSTANTS from "./APIUrlConstants";

export const getSingleOwnerExpenses = (id, signal) => {
  return http.get(`${API_URL_CONSTANTS.OWNER_EXPENSES}/${id}`);
};

export const getAllOwnerExpenses = (signal) => {
  return http.get(API_URL_CONSTANTS.OWNER_EXPENSES);
};

export const createOwnerExpenses = (data) => {
  return http.post(API_URL_CONSTANTS.OWNER_EXPENSES, data, {
    // headers: {
    //   "Content-Type": "multipart/form-data",
    // },
  });
};

export const updateOwnerExpenses = (country_id, data) => {
  return http.patch(
    `${API_URL_CONSTANTS.OWNER_EXPENSES}/${country_id}`,
    data
    // {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // }
  );
};

export const deleteOwnerExpenses = (id) => {
  return http.delete(`${API_URL_CONSTANTS.OWNER_EXPENSES}/${id}`);
};
export const getSearchOwnerExpenses = (value) => {
  return http.get(`${API_URL_CONSTANTS.OWNER_EXPENSES}?search=${value}`);
};

export const deleteManyOwnerExpenses = (ids) => {
  return http.post(`${API_URL_CONSTANTS.OWNER_EXPENSES}/bulk-delete`, ids);
};
