import http from "./http";
import API_URL_CONSTANTS from "./APIUrlConstants";

export const getSingleOwner = ({ id, signal }) => {
  return http.get(`${API_URL_CONSTANTS.BASE_owner}/${id}`, {
    signal,
  });
};

export const getAllOwners = ({ signal }) => {
  return http.get(API_URL_CONSTANTS.BASE_owner, {
    signal,
  });
};

export const createOwner = (data) => {
  return http.post(API_URL_CONSTANTS.BASE_owner, data, {
    // headers: {
    //   "Content-Type": "multipart/form-data",
    // },
  });
};

export const updateOwner = (country_id, data) => {
  return http.patch(
    `${API_URL_CONSTANTS.BASE_owner}/${country_id}`,
    data
    // {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // }
  );
};

export const deleteOwner = (id) => {
  return http.delete(`${API_URL_CONSTANTS.BASE_owner}/${id}`);
};

export const deleteManyOwners = (ids) => {
  return http.post(`${API_URL_CONSTANTS.BASE_owner}/bulk-delete`, ids);
};

export const getOwnerCode = (parentId) => {
  return http.get(`${API_URL_CONSTANTS.BASE_owner}/code=${parentId}`);
};

export const getOwnerReceivable = (buildingId) => {
  return http.get(
    `${API_URL_CONSTANTS.BASE_owner}/receivable?buildingId=${buildingId}`
  );
};

export const getOwnerCash = (buildingId) => {
  return http.get(
    `${API_URL_CONSTANTS.BASE_owner}/bank?buildingId=${buildingId}`
  );
};
