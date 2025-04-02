import http from "./http";
import API_URL_CONSTANTS from "./APIUrlConstants";

export const getSingleShop = ({ id, signal }) => {
  return http.get(`${API_URL_CONSTANTS.BASE_SHOP}/${id}`, {
    signal,
  });
};

export const getAllShops = ({ signal }) => {
  return http.get(API_URL_CONSTANTS.BASE_SHOP, {
    signal,
  });
};

export const createShop = (data) => {
  return http.post(API_URL_CONSTANTS.BASE_SHOP, data, {
    // headers: {
    //   "Content-Type": "multipart/form-data",
    // },
  });
};

export const updateApartment = (country_id, data) => {
  return http.patch(
    `${API_URL_CONSTANTS.BASE_SHOP}/${country_id}`,
    data,
    // {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // }
  );
};

export const deleteShop = (id) => {
  return http.delete(
    `${API_URL_CONSTANTS.BASE_SHOP}/${id}`
  );
};

export const deleteManyShops = (ids) => {
  return http.delete(
    `${API_URL_CONSTANTS.BASE_SHOP}?ids=${ids.join(',')}`
  );
};



export const getShopCode = (parentId) => {
  return http.delete(
    `${API_URL_CONSTANTS.BASE_SHOP}/code=${parentId}`
  );
};
