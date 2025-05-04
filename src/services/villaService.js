import http from "./http";
import API_URL_CONSTANTS from "./APIUrlConstants";

export const getSingleVilla = (id, signal) => {
    return http.get(`${API_URL_CONSTANTS.BASE_VILLA}/${id}`, {
        signal,
    });
};

export const getAllVillas = (signal) => {
    return http.get(API_URL_CONSTANTS.BASE_VILLA, {
        signal,
    });
};

export const createVilla = (data) => {
    return http.post(API_URL_CONSTANTS.BASE_VILLA, data, {
        // headers: {
        //   "Content-Type": "multipart/form-data",
        // },
    });
};

export const updateVilla = (country_id, data) => {
    return http.patch(
        `${API_URL_CONSTANTS.BASE_VILLA}/${country_id}`,
        data,
        // {
        //   headers: {
        //     "Content-Type": "multipart/form-data",
        //   },
        // }
    );
};

export const deleteVilla = (id) => {
    return http.delete(
        `${API_URL_CONSTANTS.BASE_VILLA}/${id}`
    );
};

export const deleteManyVillas = (ids) => {
    return http.delete(
        `${API_URL_CONSTANTS.BASE_VILLA}/bulk-delete`, ids
    );
};



export const getVillaCode = (parentId) => {
    return http.delete(
        `${API_URL_CONSTANTS.BASE_VILLA}/code=${parentId}`
    );
};
