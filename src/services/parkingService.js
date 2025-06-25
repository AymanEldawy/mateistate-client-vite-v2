import API_URL_CONSTANTS from "./APIUrlConstants";
import http from "./http";

export const getSingleParking = (id, signal) => {
  return http.get(`${API_URL_CONSTANTS.BASE_PARKING}/${id}`);
};

export const getAllParkings = ({ buildingId }) => {
  if (!buildingId) {
    return http.get(API_URL_CONSTANTS.BASE_PARKING);
  }
  return http.get(`${API_URL_CONSTANTS.BASE_PARKING}?buildingId=${buildingId}`);
};


export const createParking = (data) => {
  return http.post(API_URL_CONSTANTS.BASE_PARKING, data, {
    // headers: {
    //   "Content-Type": "multipart/form-data",
    // },
  });
};

export const updateParking = (country_id, data) => {
  return http.patch(
    `${API_URL_CONSTANTS.BASE_PARKING}/${country_id}`,
    data,
    // {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // }
  );
};

export const deleteParking = (id) => {
  return http.delete(
    `${API_URL_CONSTANTS.BASE_PARKING}/${id}`
  );
};

export const deleteManyParkings = (ids) => {
  return http.post(
    `${API_URL_CONSTANTS.BASE_PARKING}/bulk-delete`, ids
  );
};


export const getSearchParking = (value) => {
  return http.get(`${API_URL_CONSTANTS.BASE_PARKING}?search=${value}`);
};

export const getParkingCode = (parentId) => {
  return http.get(
    `${API_URL_CONSTANTS.BASE_PARKING}/code=${parentId}`
  );
};

export const getAvailableParkingsByBuildingId = (buildingId) => {
  return http.get(
    `${API_URL_CONSTANTS.BASE_PARKING}/available?buildingId=${buildingId}`
  );
};
