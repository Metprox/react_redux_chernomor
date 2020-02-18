import * as actionTypes from '../actions/actionTypes';

const initState = {
    toggleMore: false,
    toggleNotification: false,
};

export const togglerHeader = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.TOGGLER_MORE_ACTIVE:
            return {
                toggleMore: !state.toggleMore,
                toggleNotification: false,
            };
        case actionTypes.TOGGLER_NOTIFICATION_ACTIVE:
            return {
                toggleMore: false,
                toggleNotification: !state.toggleNotification,
            };
        default:
            return state;
    }
};
