import * as types from '../actions/types';
import services from '../../../static/todos.json';

const initState = {
    result: [],
};

export const resultReducer = (state = initState, action) => {
    const { type, payload } = action;
    switch (type) {
        case types.ADD_RESULT:
            console.log([...state.result, Object.assign({}, payload)]);
            return {
                ...state,
                result: [...state.result, Object.assign({}, payload)],
            };
        case types.DELETE_RESULT:
            return {
                ...state,
                result: state.result.filter(r => r._id !== payload),
            };
        case types.ADD_ADDITIONAL_RESULT:
            return {
                ...state,
                result: [...state.result, payload],
            };
        case types.DELETE_ADDITIONAL_RESULT:
            return {
                ...state,
                result: state.result.filter(r => r._id !== payload),
            };
        case types.ADD_COUNT_RESULT:
            return {
                ...state,
                result: state.result.map(r => {
                    if (r._id === payload && !!r.count === false) {
                        return Object.assign(r, (r['count'] = 1));
                    } else if (r._id !== payload) {
                        return r;
                    } else {
                        return Object.assign(r, (r.count += 1));
                    }
                }),
            };
        case types.DELETE_COUNT_RESULT:
            return {
                ...state,
                result: state.result.map(r => {
                    if (r._id === payload && !!r.count === false) {
                        return r;
                    } else if (r._id !== payload) {
                        return r;
                    } else {
                        return Object.assign(r, (r.count -= 1));
                    }
                }),
            };
        default:
            return state;
    }
};