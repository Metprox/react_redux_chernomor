import * as types from './types';

export const setCheckedOfService = serviceId => {
    return { type: types.SET_CHECKED_OF_SERVICE, payload: serviceId };
};

export const deleteCheckedOfService = serviceId => {
    return { type: types.DELETE_CHECKED_OF_SERVICE, payload: serviceId };
};

export const setCountOfService = serviceId => {
    return { type: types.SET_COUNT_OF_SERVICE, payload: serviceId };
};

export const deleteCountOfService = serviceId => {
    return { type: types.DELETE_COUNT_OF_SERVICE, payload: serviceId };
};

export const setAdditionalOfChecked = (serviceId, additionalId) => {
    return { type: types.SET_ADDITIONAL_OF_CHECKED, payload: { serviceId, additionalId } };
};

export const deleteAdditionalOfChecked = (serviceId, additionalId) => {
    return { type: types.DELETE_ADDITIONAL_OF_CHECKED, payload: { serviceId, additionalId } };
};

export const setTotalOfService = (serviceId, serviceTotalPrice) => {
    return { type: types.SET_TOTAL_OF_SERVICE, payload: { serviceId, serviceTotalPrice } };
};

export const deleteTotalOfService = (serviceId, serviceTotalPrice) => {
    return {
        type: types.DELETE_TOTAL_OF_SERVICE,
        payload: {
            serviceId,
            serviceTotalPrice,
        },
    };
};

export const defaultTotalOfService = (serviceId, serviceTotalPrice) => {
    return { type: types.DEFAULT_TOTAL_OF_SERVICE, payload: { serviceId, serviceTotalPrice } };
};
