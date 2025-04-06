import http from "./http";
import API_URL_CONSTANTS from "./APIUrlConstants";

export const getSingleBank = ({ id, signal }) => {
  return http.get(`${API_URL_CONSTANTS.BASE_BANK}/${id}`, {
    signal,
  });
};

export const getAllBanks = ({ signal }) => {
  return http.get(API_URL_CONSTANTS.BASE_BANK, {
    signal,
  });
};

export const createBank = (data) => {
  console.log("🚀 ~ createBank ~ data:", data)
  return http.post(API_URL_CONSTANTS.BASE_BANK, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const updateBank = (country_id, data) => {
  return http.patch(
    `${API_URL_CONSTANTS.BASE_BANK}/${country_id}`,
    data,
    // {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // }
  );
};

export const deleteBank = (id) => {
  return http.delete(
    `${API_URL_CONSTANTS.BASE_BANK}/${id}`
  );
};

export const deleteManyBanks = (ids) => {
  return http.delete(
    `${API_URL_CONSTANTS.BASE_BANK}?ids=${ids.join(',')}`
  );
};

