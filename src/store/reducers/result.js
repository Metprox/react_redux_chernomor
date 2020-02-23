import * as types from '../actions/types';
import { utilMixin } from '../../tools/custom/Functions.js';

const initState = {
    result: [],
};

export const resultReducer = (state = initState, action) => {
    const { type, payload } = action;
    switch (type) {
        case types.ADD_RESULT:
            if (state.result.length === 0) {
                return { ...state, result: [...state.result, payload] };
            } else {
                let newResult = state.result.filter(r => r._id !== payload._id);
                return {
                    ...state,
                    result: [...newResult, payload],
                };
            }
        case types.DELETE_RESULT:
            return {
                ...state,
                result: state.result.filter(r => r._id !== payload),
            };
        case types.ADD_ADDITIONAL_RESULT:
            return {
                ...state,
                result: state.result.map(r => {
                    if (r._id === payload.serviceId && !!r.additional === false) {
                        return { ...r, additional: [payload.additional] };
                    } else if (r._id === payload.serviceId && !!r.additional === true) {
                        return {
                            ...r,
                            additional: [...r.additional, { ...payload.additional }],
                        };
                    } else {
                        return { ...r };
                    }
                }),
            };
        case types.DELETE_ADDITIONAL_RESULT:
            return {
                ...state,
                result: state.result.map(r => {
                    if (r._id === payload.serviceId) {
                        return {
                            ...r,
                            additional: r.additional.filter(a => a._id !== payload.additionalId),
                        };
                    } else {
                        return {
                            ...r,
                        };
                    }
                }),
            };
        case types.ADD_COUNT_RESULT:
            return {
                ...state,
                result: state.result.map(r => {
                    if (r._id === payload && !!r.count === false) {
                        return Object.assign({}, r, (r['count'] = 1));
                    } else if (r._id !== payload) {
                        return r;
                    } else {
                        return Object.assign({}, r, (r.count += 1));
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
        case types.SET_TOTAL_OF_RESULT:
            return {
                ...state,
                result: state.result.map(r => {
                    if (r._id === payload.serviceId) {
                        let additPrice = utilMixin(payload.serviceTotalPrice);
                        if (!!r.totalPrice === false) {
                            let servicePrice = utilMixin(r.price);
                            let resultPrice = servicePrice + additPrice;
                            return {
                                ...r,
                                totalPrice: `$${resultPrice.toFixed(2)}`,
                            };
                        } else {
                            let servicePrice = utilMixin(r.totalPrice);
                            let resultPrice = servicePrice + additPrice;
                            return {
                                ...r,
                                totalPrice: `$${resultPrice.toFixed(2)}`,
                            };
                        }
                    }
                    return { ...r };
                }),
            };
        case types.DELETE_TOTAL_OF_RESULT:
            return {
                ...state,
                result: state.result.map(r => {
                    if (r._id === payload.serviceId) {
                        let additPrice = utilMixin(payload.serviceTotalPrice);
                        if (!!r.totalPrice === false) {
                            let servicePrice = utilMixin(r.price);
                            let resultPrice = servicePrice - additPrice;
                            return {
                                ...r,
                                totalPrice: `$${resultPrice.toFixed(2)}`,
                            };
                        } else {
                            let servicePrice = utilMixin(r.totalPrice);
                            let resultPrice = servicePrice - additPrice;
                            return {
                                ...r,
                                totalPrice: `$${resultPrice.toFixed(2)}`,
                            };
                        }
                    }
                    return { ...r };
                }),
            };
            case types.DEFAULT_TOTAL_OF_RESULT:
                return {
                    ...state,
                    result: state.result.map(r => {
                        if (r._id === payload.serviceId) {
                            let price = utilMixin(payload.serviceTotalPrice);
                            return {
                                ...r,
                                totalPrice: `$${price.toFixed(2)}`,
                            };
                        }
                        return { ...r };
                    }),
                };
        default:
            return state;
    }
};
