import http from "./http";
import API_URL_CONSTANTS from "./APIUrlConstants";

export const getSingleUser = (id, signal) => {
  return http.get(`${API_URL_CONSTANTS.BASE_USER}/${id}`, {
    signal,
  });
};

export const getAllUsers = (signal) => {
  return http.get(API_URL_CONSTANTS.BASE_USER, {
    signal,
  });
};

export const createUser = (data) => {
  return http.post(API_URL_CONSTANTS.BASE_USER, data, {
    // headers: {
    //   "Content-Type": "multipart/form-data",
    // },
  });
};

export const updateUser = (country_id, data) => {
  return http.patch(
    `${API_URL_CONSTANTS.BASE_USER}/${country_id}`,
    data,
    // {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // }
  );
};

export const deleteUser = (id) => {
  return http.delete(
    `${API_URL_CONSTANTS.BASE_USER}/${id}`
  );
};

export const deleteManyUsers = (ids) => {
  return http.post(
    `${API_URL_CONSTANTS.BASE_USER}/bulk-delete`, ids
  );
};
