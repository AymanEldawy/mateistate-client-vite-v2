import http from "./http";
import API_URL_CONSTANTS from "./APIUrlConstants";

export const getSingleAccount = (id) => {
  return http.get(`${API_URL_CONSTANTS.BASE_ACCOUNT}/${id}`);
};

export const getSearchAccount = (value) => {
  return http.get(`${API_URL_CONSTANTS.BASE_ACCOUNT}?search=${value}`);
};

export const getAllAccounts = (signal) => {
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
  return http.post(
    `${API_URL_CONSTANTS.BASE_ACCOUNT}/bulk-delete`, ids
  );
};


export const getAccountSearch = (value) => {
  return http.get(
    `${API_URL_CONSTANTS.BASE_ACCOUNT}?search=${value}&page=1&limit=15`
  );
};

export const getAccountCode = (parentId) => {
  return http.get(
    `${API_URL_CONSTANTS.BASE_ACCOUNT}/code=${parentId}`
  );
};


export const getAccountReceivable = (buildingId) => {
  return http.get(
    `${API_URL_CONSTANTS.BASE_ACCOUNT}/receivable?buildingId=${buildingId}`
  );
};

export const getAccountCash = (buildingId) => {
  return http.get(
    `${API_URL_CONSTANTS.BASE_ACCOUNT}/bank?buildingId=${buildingId}`
  );
};
