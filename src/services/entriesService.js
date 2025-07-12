import API_URL_CONSTANTS from "./APIUrlConstants";
import http from "./http";

export const getSingleEntry = (id, signal) => {
  return http.get(`${API_URL_CONSTANTS.BASE_ENTRIES}/${id}`);
};

export const getAllEntries = (signal) => {
  return http.get(API_URL_CONSTANTS.BASE_ENTRIES);
};

export const createEntry = (data) => {
  return http.post(API_URL_CONSTANTS.BASE_ENTRIES, data, {
    // headers: {
    //   "Content-Type": "multipart/form-data",
    // },
  });
};

export const updateEntry = (entryId, data) => {
  return http.put(
    `${API_URL_CONSTANTS.BASE_ENTRIES}/${entryId}`,
    data,
    // {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // }
  );
};

export const deleteEntry = (id) => {
  return http.delete(
    `${API_URL_CONSTANTS.BASE_ENTRIES}/${id}`
  );
};

export const deleteManyEntries = (ids) => {
  return http.post(
    `${API_URL_CONSTANTS.BASE_ENTRIES}/bulk-delete`, {ids}
  );
};


export const getEntryLastNumberByType = (code) => {
  return http.get(`${API_URL_CONSTANTS.BASE_ENTRIES}/last?code=${code}`);
};

export const getSearchEntry = (value) => {
  return http.get(`${API_URL_CONSTANTS.BASE_ENTRIES}/${value}`);
};



export const getEntriesByCreatedFrom = (createdFromId) => {
  return http.get(`${API_URL_CONSTANTS.BASE_ENTRIES}/created-from/${createdFromId}`);
};
