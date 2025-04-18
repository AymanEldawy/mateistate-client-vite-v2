import http from "./http";
import API_URL_CONSTANTS from "./APIUrlConstants";

export const getSingleBuilding = (id) => {
  return http.get(`${API_URL_CONSTANTS.BASE_BUILDING}/${id}`);
};

export const getAllBuildings = ({ signal }) => {
  return http.get(API_URL_CONSTANTS.BASE_BUILDING, {
    signal,
  });
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
    data,
    // {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // }
  );
};

export const deleteBuilding = (id) => {
  return http.delete(
    `${API_URL_CONSTANTS.BASE_BUILDING}/${id}`
  );
};

export const deleteManyBuildings = (ids) => {
  return http.post(
    `${API_URL_CONSTANTS.BASE_BUILDING}/bulk-delete`, ids
  );
};

export const getBuildingDetails = () => {
  return http.get(`${API_URL_CONSTANTS.BASE_BUILDING}/details`);
};

export const getSingleBuildingDetails = (id) => {
  return http.get(`${API_URL_CONSTANTS.BASE_BUILDING}/${id}/details`);
};

export const getSearchBuilding = (value) => {
  return http.get(`${API_URL_CONSTANTS.BASE_BUILDING}/${value}`);
};

export const generateBuildingUnits = ({
  grid,
  flatsDetails,
  row,
  UPDATES_ROWS,
}) => {
  return http.post(`${API_URL_CONSTANTS.BASE_BUILDING}/units`, {
    grid,
    flatsDetails,
    row,
    UPDATES_ROWS,
  });
};