import http from "./http";
import API_URL_CONSTANTS from "./APIUrlConstants";

export const getSingleService = (id, signal) => {
    return http.get(`${API_URL_CONSTANTS.BASE_SERVICE}/${id}`);
};

export const getAllServices = (signal) => {
    return http.get(API_URL_CONSTANTS.BASE_SERVICE);
};

export const createService = (data) => {
    return http.post(API_URL_CONSTANTS.BASE_SERVICE, data, {
        // headers: {
        //   "Content-Type": "multipart/form-data",
        // },
    });
};

export const updateService = (service_id, data) => {
    return http.patch(
        `${API_URL_CONSTANTS.BASE_SERVICE}/${service_id}`,
        data,
        // {
        //   headers: {
        //     "Content-Type": "multipart/form-data",
        //   },
        // }
    );
};

export const deleteService = (id) => {
    return http.delete(
        `${API_URL_CONSTANTS.BASE_SERVICE}/${id}`
    );
};

export const deleteManyServices = (ids) => {
    return http.delete(
        `${API_URL_CONSTANTS.BASE_SERVICE}/bulk-delete`, ids
    );
};



export const getServiceCode = (parentId) => {
    return http.delete(
        `${API_URL_CONSTANTS.BASE_SERVICE}/code=${parentId}`
    );
};
