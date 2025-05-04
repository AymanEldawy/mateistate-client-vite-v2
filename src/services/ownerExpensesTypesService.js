import http from "./http";
import API_URL_CONSTANTS from "./APIUrlConstants";

export const getSingleOwnerExpensesTypes = (id, signal) => {
  return http.get(`${API_URL_CONSTANTS.OWNER_EXPENSES_TYPES}/${id}`, {
    signal,
  });
};

export const getAllOwnerExpensesTypes = (signal) => {
  return http.get(API_URL_CONSTANTS.OWNER_EXPENSES_TYPES, {
    signal,
  });
};

export const createOwnerExpensesTypes = (data) => {
  return http.post(API_URL_CONSTANTS.OWNER_EXPENSES_TYPES, data, {
    // headers: {
    //   "Content-Type": "multipart/form-data",
    // },
  });
};

export const updateOwnerExpensesTypes = (country_id, data) => {
  return http.patch(
    `${API_URL_CONSTANTS.OWNER_EXPENSES_TYPES}/${country_id}`,
    data
    // {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // }
  );
};

export const deleteOwnerExpensesTypes = (id) => {
  return http.delete(`${API_URL_CONSTANTS.OWNER_EXPENSES_TYPES}/${id}`);
};
export const getSearchOwnerExpensesTypes = (value) => {
  return http.get(`${API_URL_CONSTANTS.OWNER_EXPENSES_TYPES}?search=${value}`);
};

export const deleteManyOwnerExpensesTypes = (ids) => {
  return http.post(`${API_URL_CONSTANTS.OWNER_EXPENSES_TYPES}/bulk-delete`, ids);
};
