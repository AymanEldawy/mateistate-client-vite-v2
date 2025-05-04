import http from "./http";
import API_URL_CONSTANTS from "./APIUrlConstants";

export const getSingleMaterial = (id, signal) => {
  return http.get(`${API_URL_CONSTANTS.BASE_MATERIALS}/${id}`, {
    signal,
  });
};

export const getAllMaterials = (signal) => {
  return http.get(API_URL_CONSTANTS.BASE_MATERIALS, {
    signal,
  });
};

export const createMaterial = (data) => {
  return http.post(API_URL_CONSTANTS.BASE_MATERIALS, data, {
    // headers: {
    //   "Content-Type": "multipart/form-data",
    // },
  });
};

export const updateMaterial = (materialId, data) => {
  return http.patch(
    `${API_URL_CONSTANTS.BASE_MATERIALS}/${materialId}`,
    data
    // {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // }
  );
};

export const deleteMaterial = (id) => {
  return http.delete(`${API_URL_CONSTANTS.BASE_MATERIALS}/${id}`);
};

export const deleteManyMaterial = (ids) => {
  return http.post(`${API_URL_CONSTANTS.BASE_MATERIALS}/bulk-delete`, ids);
};

export const getMaterialCode = (parentId) => {
  return http.get(`${API_URL_CONSTANTS.BASE_MATERIALS}/code=${parentId}`);
};