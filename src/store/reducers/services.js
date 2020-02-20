import * as types from '../actions/types';
import services from '../../../static/todos.json';

const initState = {
    services,
    sum: 0,
    order_sum: 0,
};

export const servicesReducer = (state = initState, action) => {
    const { type, payload } = action;
    switch (type) {
        case types.ADD_SUM:
            return {
                ...state,
                sum: state.sum + payload,
            };
        case types.DELETE_SUM:
            return {
                ...state,
                sum: state.sum - payload,
            };
        case types.SET_SUM:
            return {
                ...state,
                sum: (state.sum = payload),
            };
        case types.ORDER_ADD_SUM:
            return {
                ...state,
                order_sum: state.order_sum + payload,
            };
        case types.ORDER_DELETE_SUM:
            return {
                ...state,
                order_sum: state.order_sum - payload,
            };
        case types.ORDER_CLEAR_SUM:
            return {
                ...state,
                order_sum: (state.order_sum = payload),
            };
        default:
            return state;
    }
};
