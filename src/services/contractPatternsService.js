import http from "./http";
import API_URL_CONSTANTS from "./APIUrlConstants";

export const getSingleContractPattern = (id) => {
  return http.get(`${API_URL_CONSTANTS.BASE_CONTRACT_PATTERN}/${id}`);
};

export const getAllContractPatterns = ({ signal }) => {
  return http.get(API_URL_CONSTANTS.BASE_CONTRACT_PATTERN, {
    signal,
  });
};

export const createContractPattern = (data) => {
  return http.post(API_URL_CONSTANTS.BASE_CONTRACT_PATTERN, data, {
    // headers: {
    //   "Content-Type": "multipart/form-data",
    // },
  });
};

export const updateContractPattern = (country_id, data) => {
  return http.patch(
    `${API_URL_CONSTANTS.BASE_CONTRACT_PATTERN}/${country_id}`,
    data,
    // {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // }
  );
};
export const deleteContractPattern = (id) => {
  return http.delete(
    `${API_URL_CONSTANTS.BASE_CONTRACT_PATTERN}/${id}`
  );
};

export const deleteManyContractPatterns = (ids) => {
  return http.post(
    `${API_URL_CONSTANTS.BASE_CONTRACT_PATTERN}/bulk-delete`, ids
  );
};
