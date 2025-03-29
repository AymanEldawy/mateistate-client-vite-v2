import http from "./http";
import API_URL_CONSTANTS from "./APIUrlConstants";

export const getSingleReturn = ({ id, signal }) => {
  return http.get(`${API_URL_CONSTANTS.BASE_RETURN}/${id}`, {
    signal,
  });
};

export const getAllReturns = ({ signal }) => {
  return http.get(API_URL_CONSTANTS.BASE_RETURN, {
    signal,
  });
};

export const createReturn = (data) => {
  return http.post(API_URL_CONSTANTS.BASE_RETURN, data, {
    // headers: {
    //   "Content-Type": "multipart/form-data",
    // },
  });
};

export const updateReturn = (country_id, data) => {
  return http.patch(
    `${API_URL_CONSTANTS.BASE_RETURN}/${country_id}`,
    data,
    // {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // }
  );
};

export const deleteReturn = (id) => {
  return http.delete(
    `${API_URL_CONSTANTS.BASE_RETURN}/${id}`
  );
};