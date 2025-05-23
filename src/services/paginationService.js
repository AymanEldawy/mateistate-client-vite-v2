import http from "./http";
import API_URL_CONSTANTS from "./APIUrlConstants";

export const getOneBy = async (entity, value, column = "id", columns = ["*"]) => {
  const params = new URLSearchParams();
  if (entity) params.append("entity", entity);
  if (value) params.append("value", value);
  if (column) params.append("column", column);
  if (columns.length) params.append("columns", columns.join(","));

  return http.get(`${API_URL_CONSTANTS.BASE_ACCOUNT}?${params.toString()}`);
};

export const getNextOne = async (entity, value, columns = ["*"], code) => {
   return http.post(`pagination/next-one`, {
    entity,
    value,
    code,
  });
};

export const getPreviousOne = async (entity, value, columns = ["*"], code) => {
 return http.post(`pagination/previous-one`, {
    entity,
    value,
    code,
  });
};

export const getFirstOne = async (entity, columns = ["*"], code) => {
  return http.post(`pagination/first-one`, {
    entity,
    code,
  });
};

export const getLastOne = async (entity, columns = ["*"], code) => {
  return http.post(`pagination/last-one`, {
    entity,
    code,
  });
};

