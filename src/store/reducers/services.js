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
        case types.SET_CHECKED_OF_SERVICE:
            return {
                ...state,
                services: state.services.map(s => {
                    if (s._id === payload) {
                        return { ...s, checked: true };
                    }
                    return { ...s };
                }),
            };
        case types.DELETE_CHECKED_OF_SERVICE:
            return {
                ...state,
                services: state.services.map(s => {
                    if (s._id === payload) {
                        return { ...s, checked: false };
                    }
                    return { ...s };
                }),
            };
        case types.SET_COUNT_OF_SERVICE:
            return {
                ...state,
                services: state.services.map(s => {
                    if (s._id === payload) {
                        return { ...s, count: !!s.count ? s.count + 1 : 1 };
                    }
                    return { ...s };
                }),
            };
        case types.DELETE_COUNT_OF_SERVICE:
            return {
                ...state,
                services: state.services.map(s => {
                    if (s._id === payload) {
                        return { ...s, count: !!s.count ? s.count - 1 : 0 };
                    }
                    return { ...s };
                }),
            };
        case types.SET_ADDITIONAL_OF_CHECKED:
            return {
                ...state,
                services: state.services.map(s => {
                    if (s._id === payload.serviceId) {
                        return {
                            ...s,
                            additional: s.additional.map(a => {
                                if (a._id === payload.additionalId) {
                                    return { ...a, checked: true };
                                } else {
                                    return { ...a };
                                }
                            }),
                        };
                    }
                    return { ...s };
                }),
            };
        case types.DELETE_ADDITIONAL_OF_CHECKED:
            return {
                ...state,
                services: state.services.map(s => {
                    if (s._id === payload.serviceId) {
                        return {
                            ...s,
                            additional: s.additional.map(a => {
                                if (a._id === payload.additionalId) {
                                    return { ...a, checked: false };
                                } else {
                                    return { ...a };
                                }
                            }),
                        };
                    }
                    return { ...s };
                }),
            };
        default:
            return state;
    }
};
