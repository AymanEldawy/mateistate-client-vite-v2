import http from "./http";
import API_URL_CONSTANTS from "./APIUrlConstants";

export const getSingleUserWorkTime = ({ id, signal }) => {
    return http.get(`${API_URL_CONSTANTS.BASE_USER_WORK_TIME}/${id}`, {
        signal,
    });
};

export const getAllUserWorkTimes = ({ signal }) => {
    return http.get(API_URL_CONSTANTS.BASE_USER_WORK_TIME, {
        signal,
    });
};

export const createUserWorkTime = (data) => {
    return http.post(API_URL_CONSTANTS.BASE_USER_WORK_TIME, data, {
        // headers: {
        //   "Content-Type": "multipart/form-data",
        // },
    });
};

export const updateUserWorkTime = (userWorkTime_id, data) => {
    return http.patch(
        `${API_URL_CONSTANTS.BASE_USER_WORK_TIME}/${userWorkTime_id}`,
        data,
        // {
        //   headers: {
        //     "Content-Type": "multipart/form-data",
        //   },
        // }
    );
};

export const deleteUserWorkTime = (id) => {
    return http.delete(
        `${API_URL_CONSTANTS.BASE_USER_WORK_TIME}/${id}`
    );
};

export const deleteManyUserWorkTimes = (ids) => {
    return http.delete(
        `${API_URL_CONSTANTS.BASE_USER_WORK_TIME}/bulk-delete`, ids
    );
};



export const getUserWorkTimeCode = (parentId) => {
    return http.delete(
        `${API_URL_CONSTANTS.BASE_USER_WORK_TIME}/code=${parentId}`
    );
};
