import * as types from '../actions/types';
import services from '../../../static/todos.json';
import { utilMixin } from '../../tools/custom/Functions.js';

const initState = {
    services,
    sum: 0,
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
                                    return {
                                        ...a,
                                        checked: true,
                                    };
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
        case types.SET_ADDITIONAL_OF_TOTAL:
            return {
                ...state,
                services: state.services.map(s => {
                    if (s._id === payload.serviceId) {
                        let additPrice = utilMixin(payload.additionalPrice);
                        if (!!s.totalPrice === false) {
                            let servicePrice = utilMixin(s.price);
                            let resultPrice = servicePrice + additPrice;
                            return {
                                ...s,
                                totalPrice: `$${resultPrice.toFixed(2)}`,
                            };
                        } else {
                            let servicePrice = utilMixin(s.totalPrice);
                            let resultPrice = servicePrice + additPrice;
                            return {
                                ...s,
                                totalPrice: `$${resultPrice.toFixed(2)}`,
                            };
                        }
                    }
                    return { ...s };
                }),
            };
        case types.DELETE_ADDITIONAL_OF_TOTAL:
            return {
                ...state,
                services: state.services.map(s => {
                    if (s._id === payload.serviceId) {
                        let additPrice = utilMixin(payload.additionalPrice);
                        if (!!s.totalPrice === false) {
                            let servicePrice = utilMixin(s.price);
                            let resultPrice = servicePrice - additPrice;
                            return {
                                ...s,
                                totalPrice: `$${resultPrice.toFixed(2)}`,
                            };
                        } else {
                            let servicePrice = utilMixin(s.totalPrice);
                            let resultPrice = servicePrice - additPrice;
                            return {
                                ...s,
                                totalPrice: `$${resultPrice.toFixed(2)}`,
                            };
                        }
                    }
                    return { ...s };
                }),
            };
        default:
            return state;
    }
};
