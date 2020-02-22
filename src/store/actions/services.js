import * as types from './types';

export const addSum = sum => {
    return { type: types.ADD_SUM, payload: sum };
};

export const deleteSum = sum => {
    return { type: types.DELETE_SUM, payload: sum };
};

export const setSum = sum => {
    return { type: types.SET_SUM, payload: sum };
};

export const orderClearSum = sum => {
    return { type: types.ORDER_CLEAR_SUM, payload: sum };
};

export const orderAddSum = sum => {
    return { type: types.ORDER_ADD_SUM, payload: sum };
};

export const orderDeleteSum = sum => {
    return { type: types.ORDER_DELETE_SUM, payload: sum };
};

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

export const setAdditionalOfTotal = (serviceId, additionalPrice) => {
    return { type: types.SET_ADDITIONAL_OF_TOTAL, payload: { serviceId, additionalPrice } };
};

export const deleteAdditionalOfTotal = (serviceId, additionalPrice) => {
    return { type: types.DELETE_ADDITIONAL_OF_TOTAL, payload: { serviceId, additionalPrice } };
};
