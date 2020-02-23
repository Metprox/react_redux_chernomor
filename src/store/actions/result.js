import * as types from './types';

export const addResult = service => {
    return { type: types.ADD_RESULT, payload: service };
};

export const deleteResult = result => {
    return { type: types.DELETE_RESULT, payload: result };
};

export const addCountResult = id => {
    return { type: types.ADD_COUNT_RESULT, payload: id };
};

export const deleteCountResult = id => {
    return { type: types.DELETE_COUNT_RESULT, payload: id };
};

export const addAdditionalResult = (additional, serviceId) => {
    return { type: types.ADD_ADDITIONAL_RESULT, payload: { additional, serviceId } };
};

export const deleteAdditionalResult = (serviceId, additionalId) => {
    return { type: types.DELETE_ADDITIONAL_RESULT, payload: { serviceId, additionalId } };
};

export const setTotalOfResult = (serviceId, serviceTotalPrice) => {
    return { type: types.SET_TOTAL_OF_RESULT, payload: { serviceId, serviceTotalPrice } };
};

export const deleteTotalOfResult = (serviceId, serviceTotalPrice) => {
    return {
        type: types.DELETE_TOTAL_OF_RESULT,
        payload: {
            serviceId,
            serviceTotalPrice,
        },
    };
};

export const defaultTotalOfResult = (serviceId, serviceTotalPrice) => {
    return { type: types.DEFAULT_TOTAL_OF_RESULT, payload: { serviceId, serviceTotalPrice } };
};
