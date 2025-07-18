import API_URL_CONSTANTS from "./APIUrlConstants";
import http from "./http";

export const getSingleMaterialGroup = (id, signal) => {
  return http.get(`${API_URL_CONSTANTS.BASE_MATERIAL_GROUPS}/${id}`);
};

export const getAllMaterialGroups = (signal) => {
  return http.get(API_URL_CONSTANTS.BASE_MATERIAL_GROUPS);
};

export const createMaterialGroup = (data) => {
  return http.post(API_URL_CONSTANTS.BASE_MATERIAL_GROUPS, data, {
    // headers: {
    //   "Content-Type": "multipart/form-data",
    // },
  });
};

export const updateMaterialGroup = (MaterialGroupId, data) => {
  return http.patch(
    `${API_URL_CONSTANTS.BASE_MATERIAL_GROUPS}/${MaterialGroupId}`,
    data
    // {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // }
  );
};

export const deleteMaterialGroup = (id) => {
  return http.delete(`${API_URL_CONSTANTS.BASE_MATERIAL_GROUPS}/${id}`);
};

export const deleteManyMaterialGroup = (ids) => {
  return http.post(`${API_URL_CONSTANTS.BASE_MATERIAL_GROUPS}/bulk-delete`, {ids});
};

export const getMaterialGroupCode = (parentId) => {
  return http.get(`${API_URL_CONSTANTS.BASE_MATERIAL_GROUPS}/code=${parentId}`);
};
export const getSearchMaterial = (value) => {
  return http.get(`${API_URL_CONSTANTS.BASE_MATERIAL_GROUPS}?search=${value}`);
};

export const getMaterialGroupCodeNumber = (parentId) => {
  return http.get(
    `${API_URL_CONSTANTS.BASE_MATERIAL_GROUPS}/${parentId}/next-child-info`
  );
};