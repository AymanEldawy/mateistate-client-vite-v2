import http from "./http";
import API_URL_CONSTANTS from "./APIUrlConstants";

export const getOneBy = async (entity, value, column = "number") => {
  return http.post(`/pagination/one-by`, { entity, value, column });
};

export const getNextOne = async (entity, value, columns = ["*"], code) => {
  return http.post(`/pagination/next-one`, { entity, value: +value, code });
};

export const getPreviousOne = async (entity, value, columns = ["*"], code) => {
  return http.post(`/pagination/previous-one`, { entity, value: +value, code });
};

export const getFirstOne = async (entity, columns = ["*"], code) => {

  return http.post(`/pagination/first-one`, { entity, code });
};

export const getLastOne = async (entity, columns = ["*"], code) => {
  return http.post(`/pagination/last-one`, { entity, code });
};

