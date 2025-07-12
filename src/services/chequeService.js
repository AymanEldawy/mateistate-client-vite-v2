import API_URL_CONSTANTS from "./APIUrlConstants";
import http from "./http";

export const getSingleCheque = (id) => {
  return http.get(`${API_URL_CONSTANTS.BASE_CHEQUE}/${id}`);
};

export const getAllCheques = (signal) => {
  return http.get(API_URL_CONSTANTS.BASE_CHEQUE);
};

export const createCheque = (data) => {
  const newdata = Object.keys(data)
    .filter((key) => data[key] !== null)
    .reduce((acc, key) => {
      if (data[key]) {
        acc[key] = data[key];
      }
      return acc;
    }, {});
  return http.post(API_URL_CONSTANTS.BASE_CHEQUE, newdata);
};

export const updateCheque = (id, data) => {
  return http.patch(`${API_URL_CONSTANTS.BASE_CHEQUE}/${id}`, data);
};

export const deleteCheque = (id) => {
  return http.delete(`${API_URL_CONSTANTS.BASE_CHEQUE}/${id}`);
};

// export const deleteManyCheques = (ids) => {
//   return http.post(
//     `${API_URL_CONSTANTS.BASE_CHEQUE}/bulk-delete`, {ids}
//   );
// };

export const getSearchCheque = (value) => {
  return http.get(`${API_URL_CONSTANTS.BASE_CHEQUE}?search=${value}`);
};
