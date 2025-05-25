import http from "./http";
import API_URL_CONSTANTS from "./APIUrlConstants";

export const getSingleCategoryProblem = (id) => {
  return http.get(`${API_URL_CONSTANTS.BASE_CATEGORY_PROBLEM}/${id}`);
};

export const getAllCategoryProblems = (signal) => {
  return http.get(API_URL_CONSTANTS.BASE_CATEGORY_PROBLEM);
};

export const createCategoryProblem = (data) => {
  return http.post(API_URL_CONSTANTS.BASE_CATEGORY_PROBLEM, data, {
    // headers: {
    //   "Content-Type": "multipart/form-data",
    // },
  });
};

export const updateCategoryProblem = (CategoryProblem_id, data) => {
  return http.patch(
    `${API_URL_CONSTANTS.BASE_CATEGORY_PROBLEM}/${CategoryProblem_id}`,
    data
    // {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // }
  );
};

export const deleteCategoryProblem = (id) => {
  return http.delete(`${API_URL_CONSTANTS.BASE_CATEGORY_PROBLEM}/${id}`);
};

export const deleteManyCategoryProblems = (ids) => {
  return http.post(`${API_URL_CONSTANTS.BASE_CATEGORY_PROBLEM}/bulk-delete`, ids);
};
