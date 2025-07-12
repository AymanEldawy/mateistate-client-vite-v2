import API_URL_CONSTANTS from "./APIUrlConstants";
import http from "./http";

export const getSingleShop = (id, signal) => {
  return http.get(`${API_URL_CONSTANTS.BASE_SHOP}/${id}`);
};

export const getAllShops = ({ buildingId }) => {
  if (!buildingId) {
    return http.get(API_URL_CONSTANTS.BASE_SHOP);
  }
  return http.get(`${API_URL_CONSTANTS.BASE_SHOP}?buildingId=${buildingId}`);
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
    `${API_URL_CONSTANTS.BASE_SHOP}/bulk-delete`, {ids}
  );
};


export const getSearchShop = (value) => {
  return http.get(
    `${API_URL_CONSTANTS.BASE_SHOP}?search=${value}`
  );
};

export const getAvailableShopsByBuildingId = (buildingId) => {
  return http.get(
    `${API_URL_CONSTANTS.BASE_SHOP}/available?buildingId=${buildingId}`
  );
};
