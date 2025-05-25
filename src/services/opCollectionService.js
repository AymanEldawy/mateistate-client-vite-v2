import http from "./http";
import API_URL_CONSTANTS from "./APIUrlConstants";

export const getSingleCollection = (id, signal) => {
  return http.get(`${API_URL_CONSTANTS.BASE_COLLECTION}/${id}`);
};

export const getAllCollections = (signal) => {
  return http.get(API_URL_CONSTANTS.BASE_COLLECTION);
};

export const createCollection = (data) => {
  return http.post(API_URL_CONSTANTS.BASE_COLLECTION, data, {
    // headers: {
    //   "Content-Type": "multipart/form-data",
    // },
  });
};

export const updateCollection = (country_id, data) => {
  return http.patch(
    `${API_URL_CONSTANTS.BASE_COLLECTION}/${country_id}`,
    data,
    // {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // }
  );
};

export const deleteCollection = (id) => {
  return http.delete(
    `${API_URL_CONSTANTS.BASE_COLLECTION}/${id}`
  );
};