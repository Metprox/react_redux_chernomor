import * as types from './types';

export const addResult = (additional, id) => {
    return { type: types.ADD_RESULT, payload: { id, additional } };
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

export const addAdditionalResult = additional => {
    return { type: types.ADD_COUNT_RESULT, payload: additional };
};

export const deleteAdditionalResult = additional => {
    return { type: types.DELETE_COUNT_RESULT, payload: additional };
};
