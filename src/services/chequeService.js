import http from "./http";
import API_URL_CONSTANTS from "./APIUrlConstants";

export const getSingleCheque = ({ id, signal }) => {
  return http.get(`${API_URL_CONSTANTS.BASE_CHEQUE}/${id}`, {
    signal,
  });
};

export const getAllCheques = ({ signal }) => {
  return http.get(API_URL_CONSTANTS.BASE_CHEQUE, {
    signal,
  });
};

export const createCheque = (data) => {
  return http.post(API_URL_CONSTANTS.BASE_CHEQUE, data, {
    // headers: {
    //   "Content-Type": "multipart/form-data",
    // },
  });
};

export const updateCheque = (country_id, data) => {
  return http.patch(
    `${API_URL_CONSTANTS.BASE_CHEQUE}/${country_id}`,
    data,
    // {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // }
  );
};

export const deleteCheque = (id) => {
  return http.delete(
    `${API_URL_CONSTANTS.BASE_CHEQUE}/${id}`
  );
};

export const deleteManyCheques = (ids) => {
  return http.delete(
    `${API_URL_CONSTANTS.BASE_CHEQUE}?ids=${ids.join(',')}`
  );
};
