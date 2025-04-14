import http from "./http";
import API_URL_CONSTANTS from "./APIUrlConstants";

export const getSingleCategory = ({ id, signal }) => {
  return http.get(`${API_URL_CONSTANTS.BASE_CATEGORY}/${id}`, {
    signal,
  });
};

export const getAllCategories = ({ signal }) => {
  return http.get(API_URL_CONSTANTS.BASE_CATEGORY, {
    signal,
  });
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

export const getCategoryCode = (parentId) => {
  return http.get(`${API_URL_CONSTANTS.BASE_CATEGORY}/code=${parentId}`);
};

export const getCategoryReceivable = (buildingId) => {
  return http.get(
    `${API_URL_CONSTANTS.BASE_CATEGORY}/receivable?buildingId=${buildingId}`
  );
};

export const getCategoryCash = (buildingId) => {
  return http.get(
    `${API_URL_CONSTANTS.BASE_CATEGORY}/bank?buildingId=${buildingId}`
  );
};
