import http from "./http";
import API_URL_CONSTANTS from "./APIUrlConstants";

const getFullUrl = ({ name, value, columns, code, url, column }) => {
  const params = new URLSearchParams();
  params.append("name", name);
  if (column) params.append("column", column);
  if (value) params.append("value", value);
  if (columns.length) params.append("columns", columns.join(","));
  if (code) params.append("code", code);

  return `${url}?${params.toString()}`
}

export const getOneBy = async (name, value, column = "id", columns = ["*"]) => {
  const params = new URLSearchParams();
  if (name) params.append("name", name);
  if (value) params.append("value", value);
  if (column) params.append("column", column);
  if (columns.length) params.append("columns", columns.join(","));

  return http.get(`${API_URL_CONSTANTS.BASE_ACCOUNT}?${params.toString()}`);
};

export const getNextOne = async (name, value, columns = ["*"], code) => {
  const fullUrl = getFullUrl({ url: '/next', name, value, columns, code })
  return http.get(fullUrl);
};

export const getPreviousOne = async (name, value, columns = ["*"], code) => {
  const fullUrl = getFullUrl({ url: '/previous', name, value, columns, code })
  return http.get(fullUrl);
};

export const getFirstOne = async (name, columns = ["*"], code) => {
  const fullUrl = getFullUrl({ url: '/first', name, columns, code })
  return http.get(fullUrl);
};

export const getLastOne = async (name, columns = ["*"], code) => {
  const fullUrl = getFullUrl({ url: '/last', name, columns, code })
  return http.get(fullUrl);
};

export const getLastOneBy = async (name, column = 'id', value, columns = ["*"]) => {
  const fullUrl = getFullUrl({ url: '/last', name, value, columns, column })
  return http.get(fullUrl);
};
