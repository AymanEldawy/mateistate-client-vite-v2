import API_URL_CONSTANTS from "./APIUrlConstants";
import http from "./http";

export const getSinglePartial = (id, signal) => {
  return http.get(`${API_URL_CONSTANTS.BASE_PARTIAL_COLLECTION}/${id}`);
};

export const getAllPartials = (signal) => {
  return http.get(API_URL_CONSTANTS.BASE_PARTIAL_COLLECTION);
};

export const createPartial = (data) => {
  return http.post(API_URL_CONSTANTS.BASE_PARTIAL_COLLECTION, data, {
    // headers: {
    //   "Content-Type": "multipart/form-data",
    // },
  });
};

export const updatePartial = (country_id, data) => {
  return http.patch(
    `${API_URL_CONSTANTS.BASE_PARTIAL_COLLECTION}/${country_id}`,
    data,
    // {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // }
  );
};

export const deletePartial = (id) => {
  return http.delete(
    `${API_URL_CONSTANTS.BASE_PARTIAL_COLLECTION}/${id}`
  );
};

export const getNextPartial = (chqId, number) => {
  return http.get(
    `${API_URL_CONSTANTS.BASE_PARTIAL_COLLECTION}/next?cheque_id=${chqId}&number=${number}`
  );
};

export const getPreviousPartial = (chqId, number) => {
  return http.get(
    `${API_URL_CONSTANTS.BASE_PARTIAL_COLLECTION}/previous?cheque_id=${chqId}&number=${number}`
  );
};

export const getFirstPartial = (chqId) => {
  return http.get(
    `${API_URL_CONSTANTS.BASE_PARTIAL_COLLECTION}/${chqId}`
  );
};

export const getLastPartial = (chqId) => {
  return http.get(
    `${API_URL_CONSTANTS.BASE_PARTIAL_COLLECTION}/${chqId}`
  );
};

export const getPartialBy = (chqId, number) => {
  return http.get(
    `${API_URL_CONSTANTS.BASE_PARTIAL_COLLECTION}?cheque_id=${chqId}&number=${number}`
  );
};

export const getPartialByChequeId = (chequeId) => {
  return http.get(`${API_URL_CONSTANTS.BASE_PARTIAL_COLLECTION}/cheque/${chequeId}`);
};
