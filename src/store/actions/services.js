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

