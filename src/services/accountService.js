import http from "./http";
import API_URL_CONSTANTS from "./APIUrlConstants";

export const getSingleAccount = ({ id, signal }) => {
  return http.get(`${API_URL_CONSTANTS.BASE_ACCOUNT}/${id}`, {
    signal,
  });
};

export const getAllAccounts = ({ signal }) => {
  return http.get(API_URL_CONSTANTS.BASE_ACCOUNT, {
    signal,
  });
};

export const createAccount = (data) => {
  return http.post(API_URL_CONSTANTS.BASE_ACCOUNT, data, {
    // headers: {
    //   "Content-Type": "multipart/form-data",
    // },
  });
};

export const updateAccount = (country_id, data) => {
  return http.patch(
    `${API_URL_CONSTANTS.BASE_ACCOUNT}/${country_id}`,
    data,
    // {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // }
  );
};

export const deleteAccount = (id) => {
  return http.delete(
    `${API_URL_CONSTANTS.BASE_ACCOUNT}/${id}`
  );
};

export const deleteManyAccounts = (ids) => {
  return http.delete(
    `${API_URL_CONSTANTS.BASE_ACCOUNT}?ids=${ids.join(',')}`
  );
};



export const getAccountCode = (parentId) => {
  return http.get(
    `${API_URL_CONSTANTS.BASE_ACCOUNT}/code=${parentId}`
  );
};


export const getAccountReceivable = (buildingId) => {
  return http.get(
    `${API_URL_CONSTANTS.BASE_ACCOUNT}/buildingId=${buildingId}`
  );
};
