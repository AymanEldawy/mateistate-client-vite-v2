import API_URL_CONSTANTS from "./APIUrlConstants";
import http from "./http";

export const getSingleLand = (id, signal) => {
  return http.get(`${API_URL_CONSTANTS.BASE_LAND}/${id}`);
};

export const getAllLands = (signal) => {
  return http.get(API_URL_CONSTANTS.BASE_LAND);
};

export const getSearchLand = (search) => {
  return http.get(`${API_URL_CONSTANTS.BASE_LAND}?search=${search}`);
};

export const createLand = (data) => {
  return http.post(API_URL_CONSTANTS.BASE_LAND, data, {
    // headers: {
    //   "Content-Type": "multipart/form-data",
    // },
  });
};

export const updateLand = (country_id, data) => {
  return http.patch(
    `${API_URL_CONSTANTS.BASE_LAND}/${country_id}`,
    data,
    // {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // }
  );
};

export const deleteLand = (id) => {
  return http.delete(
    `${API_URL_CONSTANTS.BASE_LAND}/${id}`
  );
};

export const deleteManyLands = (ids) => {
  return http.post(
    `${API_URL_CONSTANTS.BASE_LAND}/bulk-delete`, {ids}
  );
};
