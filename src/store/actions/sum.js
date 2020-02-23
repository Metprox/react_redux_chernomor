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
