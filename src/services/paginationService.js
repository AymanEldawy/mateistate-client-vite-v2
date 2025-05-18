import http from "./http";
import API_URL_CONSTANTS from "./APIUrlConstants";

export const getOneBy = async (entity, value, column = "number") => {
  console.log(`entity: ${entity}, value: ${value}, column: ${column}`);

  const params = {
    entity: 'bank',
    value,
    column,
  }
  // Object.keys(params).forEach(key => params[key] === undefined && delete params[key]);

  return http.post(`/pagination/one-by`, { ...params });
};

export const getNextOne = async (entity, value, columns = ["*"], code) => {
  return http.post(`/pagination/next-one`, { entity, value: +value, code });
};

export const getPreviousOne = async (entity, value, columns = ["*"], code) => {
  getNextOne(entity, value, columns, code);
  return http.post(`/pagination/previous-one`, { entity, value: +value, code });
};

export const getFirstOne = async (entity, columns = ["*"], code) => {
  let params = {
    entity
  }
  if (code) params.code = code;
  return http.post(`/pagination/first-one`, { ...params });
};

export const getLastOne = async (entity, columns = ["*"], code) => {
  console.log(`entity: ${entity}, columns: ${columns}, code: ${code}`);

  let params = {
    entity: 'bank',
  }
  if (code) params.code = code;
  return http.post(`/pagination/last-one`, { ...params });
};

