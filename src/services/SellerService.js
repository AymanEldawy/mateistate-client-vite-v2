import http from "./http";
import API_URL_CONSTANTS from "./APIUrlConstants";

export const getSingleSeller = (id, signal) => {
  return http.get(`${API_URL_CONSTANTS.BASE_SELLER}/${id}`);
};

export const getSearchSeller = (value, signal) => {
  return http.get(`${API_URL_CONSTANTS.BASE_SELLER}?search=${value}`, {
    signal,
  });
};

export const getAllSellers = (signal) => {
  return http.get(API_URL_CONSTANTS.BASE_SELLER);
};

export const createSeller = (data) => {
  return http.post(API_URL_CONSTANTS.BASE_SELLER, data, {
    // headers: {
    //   "Content-Type": "multipart/form-data",
    // },
  });
};

export const updateSeller = (country_id, data) => {
  return http.patch(
    `${API_URL_CONSTANTS.BASE_SELLER}/${country_id}`,
    data
    // {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // }
  );
};

export const deleteSeller = (id) => {
  return http.delete(`${API_URL_CONSTANTS.BASE_SELLER}/${id}`);
};

export const deleteManySellers = (ids) => {
  return http.post(`${API_URL_CONSTANTS.BASE_SELLER}/bulk-delete`, ids);
};

export const getSellerCode = (parentId) => {
  return http.get(`${API_URL_CONSTANTS.BASE_SELLER}/code=${parentId}`);
};

export const getSellerReceivable = (buildingId) => {
  return http.get(
    `${API_URL_CONSTANTS.BASE_SELLER}/receivable?buildingId=${buildingId}`
  );
};

export const getSellerCash = (buildingId) => {
  return http.get(
    `${API_URL_CONSTANTS.BASE_SELLER}/bank?buildingId=${buildingId}`
  );
};
