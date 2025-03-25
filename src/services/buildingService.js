import http from "./http";
import API_URL_CONSTANTS from "./APIUrlConstants";

export const getSingleBuilding = ({ id, signal }) => {
  return http.get(`${API_URL_CONSTANTS.BASE_BUILDING}/${id}`, {
    signal,
  });
};

export const getAllBuildings = ({ signal }) => {
  return http.get(API_URL_CONSTANTS.BASE_BUILDING, {
    signal,
  });
};

export const createBuilding = (data) => {
  return http.post(API_URL_CONSTANTS.BASE_BUILDING, data, {
    // headers: {
    //   "Content-Type": "multipart/form-data",
    // },
  });
};

export const updateBuilding = (country_id, data) => {
  return http.patch(
    `${API_URL_CONSTANTS.BASE_BUILDING}/${country_id}`,
    data,
    // {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // }
  );
};

export const deleteBuilding = (id) => {
  return http.delete(
    `${API_URL_CONSTANTS.BASE_BUILDING}/${id}`
  );
};

export const deleteManyBuildings = (ids) => {
  return http.delete(
    `${API_URL_CONSTANTS.BASE_BUILDING}?ids=${ids.join(',')}`
  );
};
