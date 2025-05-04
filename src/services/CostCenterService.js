import http from "./http";
import API_URL_CONSTANTS from "./APIUrlConstants";

export const getSingleCostCenter = (id, signal) => {
  return http.get(`${API_URL_CONSTANTS.BASE_COST_CENTER}/${id}`, {
    signal,
  });
};

export const getAllCostCenters = (signal) => {
  return http.get(API_URL_CONSTANTS.BASE_COST_CENTER, {
    signal,
  });
};

export const createCostCenter = (data) => {
  return http.post(API_URL_CONSTANTS.BASE_COST_CENTER, data, {
    // headers: {
    //   "Content-Type": "multipart/form-data",
    // },
  });
};

export const updateCostCenter = (country_id, data) => {
  return http.patch(
    `${API_URL_CONSTANTS.BASE_COST_CENTER}/${country_id}`,
    data
    // {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // }
  );
};

export const deleteCostCenter = (id) => {
  return http.delete(`${API_URL_CONSTANTS.BASE_COST_CENTER}/${id}`);
};

export const deleteManyCostCenters = (ids) => {
  return http.post(`${API_URL_CONSTANTS.BASE_COST_CENTER}/bulk-delete`, ids);
};

export const getCostCenterCode = (parentId) => {
  return http.get(`${API_URL_CONSTANTS.BASE_COST_CENTER}/code=${parentId}`);
};
export const getSearchCostCenter = (value) => {
  return http.get(`${API_URL_CONSTANTS.BASE_COST_CENTER}?search=${value}`);
};

export const getCostCenterReceivable = (buildingId) => {
  return http.get(
    `${API_URL_CONSTANTS.BASE_COST_CENTER}/receivable?buildingId=${buildingId}`
  );
};

export const getCostCenterCash = (buildingId) => {
  return http.get(
    `${API_URL_CONSTANTS.BASE_COST_CENTER}/bank?buildingId=${buildingId}`
  );
};
