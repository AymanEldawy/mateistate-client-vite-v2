import http from "./http";
import API_URL_CONSTANTS from "./APIUrlConstants";

export const getSingleCategory = (id, signal) => {
  return http.get(`${API_URL_CONSTANTS.BASE_CATEGORY}/${id}`);
};

export const getAllCategories = (signal) => {
  return http.get(API_URL_CONSTANTS.BASE_CATEGORY);
};

export const createCategory = (data) => {
  return http.post(API_URL_CONSTANTS.BASE_CATEGORY, data, {
    // headers: {
    //   "Content-Type": "multipart/form-data",
    // },
  });
};

export const updateCategory = (country_id, data) => {
  return http.patch(
    `${API_URL_CONSTANTS.BASE_CATEGORY}/${country_id}`,
    data
    // {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // }
  );
};

export const deleteCategory = (id) => {
  return http.delete(`${API_URL_CONSTANTS.BASE_CATEGORY}/${id}`);
};

export const deleteManyCategories = (ids) => {
  return http.post(`${API_URL_CONSTANTS.BASE_CATEGORY}/bulk-delete`, ids);
};

export const getSearchCategory = (value) => {
  return http.get(`${API_URL_CONSTANTS.BASE_CATEGORY}/?search=${value}&page=1&limit=15`);
};
