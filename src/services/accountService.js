import API_URL_CONSTANTS from "./APIUrlConstants";
import http from "./http";

export const getSingleAccount = (id) => {
  return http.get(`${API_URL_CONSTANTS.BASE_ACCOUNT}/${id}`);
};

export const getSearchAccount = (value) => {
  return http.get(`${API_URL_CONSTANTS.BASE_ACCOUNT}?search=${value}`);
};

export const getAllAccounts = () => {
  return http.get(API_URL_CONSTANTS.BASE_ACCOUNT);
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
    data
    // {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // }
  );
};

export const deleteAccount = (id) => {
  return http.delete(`${API_URL_CONSTANTS.BASE_ACCOUNT}/${id}`);
};

export const deleteManyAccounts = (ids) => {
  return http.post(`${API_URL_CONSTANTS.BASE_ACCOUNT}/bulk-delete`, ids);
};

export const getAccountSearch = (value) => {
  return http.get(
    `${API_URL_CONSTANTS.BASE_ACCOUNT}?search=${value}&page=1&limit=15`
  );
};

export const getAccountCode = (parentId) => {
  return http.get(`${API_URL_CONSTANTS.BASE_ACCOUNT}/code=${parentId}`);
};

export const getAccountCash = (buildingId) => {
  return http.get(
    `${API_URL_CONSTANTS.BASE_ACCOUNT}/bank?buildingId=${buildingId}`
  );
};

export const getAccountChildrenByParentId = (parentId) => {
  return http.get(`${API_URL_CONSTANTS.BASE_ACCOUNT}/${parentId}/children`);
};

export const getAccountCodeNumber = (parentId) => {
  return http.get(
    `${API_URL_CONSTANTS.BASE_ACCOUNT}/${parentId}/next-child-info`
  );
};

export const getLeavesAccounts = () => {
  return http.get(`${API_URL_CONSTANTS.BASE_ACCOUNT}/leaves`);
};

export const getAccountSuppliersOnly = () => {
  return http.get(
    `${API_URL_CONSTANTS.BASE_ACCOUNT}/suppliers-customers?=supplier`
  );
};

export const getAccountCustomersOnly = () => {
  return http.get(
    `${API_URL_CONSTANTS.BASE_ACCOUNT}/suppliers-customers?=customer`
  );
};

export const getAllChartAccounts = () => {
  return http.get(`${API_URL_CONSTANTS.BASE_ACCOUNT}?is_root=true`);
};
