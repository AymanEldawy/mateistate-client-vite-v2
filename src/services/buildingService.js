import API_URL_CONSTANTS from "./APIUrlConstants";
import http from "./http";

export const getSingleBuilding = (id) => {
  return http.get(`${API_URL_CONSTANTS.BASE_BUILDING}/${id}`);
};

export const getAllBuildings = (signal) => {
  return http.get(API_URL_CONSTANTS.BASE_BUILDING);
};

export const createBuilding = (data) => {
  return http.post(API_URL_CONSTANTS.BASE_BUILDING, data, {
    // headers: {
    //   "Content-Type": "multipart/form-data",
    // },
  });
};

export const updateBuilding = (building_id, data) => {
  return http.patch(
    `${API_URL_CONSTANTS.BASE_BUILDING}/${building_id}`,
    data
    // {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // }
  );
};

export const deleteBuilding = (id) => {
  return http.delete(`${API_URL_CONSTANTS.BASE_BUILDING}/${id}`);
};

export const deleteManyBuildings = (ids) => {
  return http.post(`${API_URL_CONSTANTS.BASE_BUILDING}/bulk-delete`, {ids});
};

export const getBuildingDetails = () => {
  return http.get(`${API_URL_CONSTANTS.BASE_BUILDING}/details`);
};

export const getSingleBuildingDetails = (id) => {
  return http.get(`${API_URL_CONSTANTS.BASE_BUILDING}/${id}/details`);
};

export const getSearchBuilding = (value) => {
  return http.get(`${API_URL_CONSTANTS.BASE_BUILDING}?search=${value}`);
};

export const generateBuildingDetailsAndUnits = ({
  propertyValues,
  mainBuildingId,
  units,
}) => {
  return http.post(`property-values/create-with-color`, {
    propertyValues,
    mainBuildingId,
    ...units,
  });
};

export const getBuildingDetailsAndUnits = (buildingId) => {
  return http.get(`/property-values/find-with-color/${buildingId}`);
};

export const getAccountReceivable = (buildingId) => {
  return http.get(
    `${API_URL_CONSTANTS.BASE_BUILDING}/${buildingId}/receivable`
  );
};
