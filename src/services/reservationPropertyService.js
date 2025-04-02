import http from "./http";
import API_URL_CONSTANTS from "./APIUrlConstants";

export const getSingleReservationProperty = ({ id, signal }) => {
    return http.get(`${API_URL_CONSTANTS.BASE_RESERVATION_PROPERTY}/${id}`, {
        signal,
    });
};

export const getAllReservationProperties = ({ signal }) => {
    return http.get(API_URL_CONSTANTS.BASE_RESERVATION_PROPERTY, {
        signal,
    });
};

export const createReservationProperty = (data) => {
    return http.post(API_URL_CONSTANTS.BASE_RESERVATION_PROPERTY, data, {
        // headers: {
        //   "Content-Type": "multipart/form-data",
        // },
    });
};

export const updateReservationProperty = (reservationProperty_id, data) => {
    return http.patch(
        `${API_URL_CONSTANTS.BASE_RESERVATION_PROPERTY}/${reservationProperty_id}`,
        data,
        // {
        //   headers: {
        //     "Content-Type": "multipart/form-data",
        //   },
        // }
    );
};

export const deleteReservationProperty = (id) => {
    return http.delete(
        `${API_URL_CONSTANTS.BASE_RESERVATION_PROPERTY}/${id}`
    );
};

export const deleteManyReservationProperties = (ids) => {
    return http.delete(
        `${API_URL_CONSTANTS.BASE_RESERVATION_PROPERTY}?ids=${ids.join(',')}`
    );
};



export const getReservationPropertyCode = (parentId) => {
    return http.delete(
        `${API_URL_CONSTANTS.BASE_RESERVATION_PROPERTY}/code=${parentId}`
    );
};
