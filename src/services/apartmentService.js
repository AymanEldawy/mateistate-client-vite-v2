import http from "./http";
import API_URL_CONSTANTS from "./APIUrlConstants";

export const getSingleApartment = (id) => {
  return http.get(`${API_URL_CONSTANTS.BASE_APARTMENT}/${id}`);
};

export const getAllApartments = (signal) => {
  return http.get(API_URL_CONSTANTS.BASE_APARTMENT);
};

export const createApartment = (data) => {
  return http.post(API_URL_CONSTANTS.BASE_APARTMENT, data, {
    // headers: {
    //   "Content-Type": "multipart/form-data",
    // },
  });
};

export const updateApartment = (country_id, data) => {
  return http.patch(
    `${API_URL_CONSTANTS.BASE_APARTMENT}/${country_id}`,
    data,
    // {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // }
  );
};

export const deleteApartment = (id) => {
  return http.delete(
    `${API_URL_CONSTANTS.BASE_APARTMENT}/${id}`
  );
};

export const deleteManyApartments = (ids) => {
  return http.post(
    `${API_URL_CONSTANTS.BASE_APARTMENT}/bulk-delete`, ids
  );
};



export const getSearchApartment = (value) => {
  return http.get(
    `${API_URL_CONSTANTS.BASE_APARTMENT}?search=${value}`
  );
};
