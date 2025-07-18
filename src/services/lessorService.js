import API_URL_CONSTANTS from "./APIUrlConstants";
import http from "./http";

export const getSingleLessor = (id, signal) => {
  return http.get(`${API_URL_CONSTANTS.BASE_Lessor}/${id}`);
};

export const getSearchLessor = (search) => {
  return http.get(`${API_URL_CONSTANTS.BASE_Lessor}?search=${search}`);
};

export const getAllLessors = (signal) => {
  return http.get(API_URL_CONSTANTS.BASE_Lessor);
};

export const createLessor = (data) => {
  return http.post(API_URL_CONSTANTS.BASE_Lessor, data, {
    // headers: {
    //   "Content-Type": "multipart/form-data",
    // },
  });
};

export const updateLessor = (country_id, data) => {
  return http.patch(
    `${API_URL_CONSTANTS.BASE_Lessor}/${country_id}`,
    data
    // {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // }
  );
};

export const deleteLessor = (id) => {
  return http.delete(`${API_URL_CONSTANTS.BASE_Lessor}/${id}`);
};

export const deleteManyLessor = (ids) => {
  return http.post(`${API_URL_CONSTANTS.BASE_Lessor}/bulk-delete`, {ids});
};

export const getLessorCode = (parentId) => {
  return http.get(`${API_URL_CONSTANTS.BASE_Lessor}/code=${parentId}`);
};

export const getLessorReceivable = (buildingId) => {
  return http.get(
    `${API_URL_CONSTANTS.BASE_Lessor}/receivable?buildingId=${buildingId}`
  );
};

export const getLessorCash = (buildingId) => {
  return http.get(
    `${API_URL_CONSTANTS.BASE_Lessor}/bank?buildingId=${buildingId}`
  );
};
