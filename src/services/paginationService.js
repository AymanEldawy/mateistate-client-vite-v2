import http from "./http";

export const getOneBy = async (entity, value, column = "number", code, chequeId) => {
  return http.post(`/pagination/one-by`, { entity, value, column, code, chequeId });
};

export const getNextOne = async (entity, value, code, chequeId) => {
  return http.post(`/pagination/next-one`, { entity, value: +value, code, chequeId });
};

export const getPreviousOne = async (entity, value, code, chequeId) => {
  return http.post(`/pagination/previous-one`, { entity, value: +value, code, chequeId });
};

export const getFirstOne = async (entity, code, chequeId) => {

  return http.post(`/pagination/first-one`, { entity, code, chequeId });
};

export const getLastOne = async (entity, code, chequeId) => {
  return http.post(`/pagination/last-one`, { entity, code, chequeId });
};

