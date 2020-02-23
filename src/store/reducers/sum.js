import * as types from '../actions/types';

const initState = {
    sum: 0,
};

export const sumReducer = (state = initState, action) => {
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
        default:
            return state;
    }
};
