import * as types from './types';

export const addResult = result => {
    return { type: types.ADD_RESULT, payload: result };
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
