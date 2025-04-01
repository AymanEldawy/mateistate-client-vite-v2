import http from "./http";
import API_URL_CONSTANTS from "./APIUrlConstants";

export const getSingleParking = ({ id, signal }) => {
  return http.get(`${API_URL_CONSTANTS.BASE_PARKING}/${id}`, {
    signal,
  });
};

export const getAllParkings = ({ signal }) => {
  return http.get(API_URL_CONSTANTS.BASE_PARKING, {
    signal,
  });
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
  return http.delete(
    `${API_URL_CONSTANTS.BASE_PARKING}?ids=${ids.join(',')}`
  );
};



export const getParkingCode = (parentId) => {
  return http.delete(
    `${API_URL_CONSTANTS.BASE_PARKING}/code=${parentId}`
  );
};
