import API_URL_CONSTANTS from "./APIUrlConstants";
import http from "./http";

export const getSingleStore = (id) => {
  return http.get(`${API_URL_CONSTANTS.BASE_STORE}/${id}`);
};

export const getSearchStore = (search) => {
  return http.get(`${API_URL_CONSTANTS.BASE_STORE}?search=${search}`);
};

export const getAllStores = (signal) => {
  return http.get(API_URL_CONSTANTS.BASE_STORE);
};

export const createStore = (data) => {
  return http.post(API_URL_CONSTANTS.BASE_STORE, data, {
    // headers: {
    //   "Content-Type": "multipart/form-data",
    // },
  });
};

export const updateStore = (country_id, data) => {
  return http.patch(
    `${API_URL_CONSTANTS.BASE_STORE}/${country_id}`,
    data
    // {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // }
  );
};

export const deleteStore = (id) => {
  return http.delete(`${API_URL_CONSTANTS.BASE_STORE}/${id}`);
};

export const deleteManyStores = (ids) => {
  return http.post(`${API_URL_CONSTANTS.BASE_STORE}/bulk-delete`, {ids});
};

export const getStoreCode = (parentId) => {
  return http.get(`${API_URL_CONSTANTS.BASE_STORE}/code=${parentId}`);
};


export const getStoreReceivable = (buildingId) => {
  return http.get(
    `${API_URL_CONSTANTS.BASE_STORE}/receivable?buildingId=${buildingId}`
  );
};

export const getStoreCash = (buildingId) => {
  return http.get(
    `${API_URL_CONSTANTS.BASE_STORE}/bank?buildingId=${buildingId}`
  );
};


export const getStoreCodeNumber = (parentId) => {
  return http.get(
    `${API_URL_CONSTANTS.BASE_STORE}/${parentId}/next-child-info`
  );
};