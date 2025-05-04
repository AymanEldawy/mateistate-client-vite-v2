import http from "./http";
import API_URL_CONSTANTS from "./APIUrlConstants";

export const getSingleShop = (id, signal) => {
  return http.get(`${API_URL_CONSTANTS.BASE_SHOP}/${id}`, {
    signal,
  });
};

export const getAllShops = (signal) => {
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

export const updateShop= (shopId, data) => {
  return http.patch(
    `${API_URL_CONSTANTS.BASE_SHOP}/${shopId}`,
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
  return http.post(
    `${API_URL_CONSTANTS.BASE_SHOP}/bulk-delete`, ids
  );
};
