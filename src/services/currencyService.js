import API_URL_CONSTANTS from "./APIUrlConstants";
import http from "./http";

export const getSingleCurrency = (id) => {
    return http.get(`${API_URL_CONSTANTS.BASE_CURRENCY}/${id}`);
};

export const getSearchCurrency = (value) => {
    return http.get(`${API_URL_CONSTANTS.BASE_CURRENCY}?search=${value}`);
};

export const getAllCurrencies = () => {
    return http.get(API_URL_CONSTANTS.BASE_CURRENCY);
};

export const createCurrency = (data) => {
    return http.post(API_URL_CONSTANTS.BASE_CURRENCY, data, {
        // headers: {
        //   "Content-Type": "multipart/form-data",
        // },
    });
};

export const updateCurrency = (currency_id, data) => {
    return http.patch(
        `${API_URL_CONSTANTS.BASE_CURRENCY}/${currency_id}`,
        data,
        // {
        //   headers: {
        //     "Content-Type": "multipart/form-data",
        //   },
        // }
    );
};

export const deleteCurrency = (id) => {
    return http.delete(
        `${API_URL_CONSTANTS.BASE_CURRENCY}/${id}`
    );
};

export const deleteManyCurrencies = (ids) => {
    return http.post(
        `${API_URL_CONSTANTS.BASE_CURRENCY}/bulk-delete`, {ids}
    );
};



export const getCurrencyCode = (parentId) => {
    return http.delete(
        `${API_URL_CONSTANTS.BASE_CURRENCY}/code=${parentId}`
    );
};
