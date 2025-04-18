import http from "./http";
import API_URL_CONSTANTS from "./APIUrlConstants";

export const getSingleCountry = (id, signal) => {
  return http.get(`${API_URL_CONSTANTS.BASE_COUNTRY}/${id}`, {
    signal,
  });
};

export const getAllCountries = ({ signal }) => {
  return http.get(API_URL_CONSTANTS.BASE_COUNTRY, {
    signal,
  });
};

export const createCountry = (data) => {
  return http.post(API_URL_CONSTANTS.BASE_COUNTRY, data, {
    // headers: {
    //   "Content-Type": "multipart/form-data",
    // },
  });
};

export const updateCountry = (country_id, data) => {
  return http.patch(
    `${API_URL_CONSTANTS.BASE_COUNTRY}/${country_id}`,
    data
    // {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // }
  );
};

export const deleteCountry = (id) => {
  return http.delete(`${API_URL_CONSTANTS.BASE_COUNTRY}/${id}`);
};

export const deleteManyCountries = (ids) => {
  return http.post(`${API_URL_CONSTANTS.BASE_COUNTRY}/bulk-delete`, ids);
};

export const getCountryCode = (parentId) => {
  return http.get(`${API_URL_CONSTANTS.BASE_COUNTRY}/code=${parentId}`);
};

export const getCountryReceivable = (buildingId) => {
  return http.get(
    `${API_URL_CONSTANTS.BASE_COUNTRY}/receivable?buildingId=${buildingId}`
  );
};

export const getCountryCash = (buildingId) => {
  return http.get(
    `${API_URL_CONSTANTS.BASE_COUNTRY}/bank?buildingId=${buildingId}`
  );
};
