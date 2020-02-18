import * as actionTypes from './actionTypes';

export const toggleMore = () => {
    return { type: actionTypes.TOGGLER_MORE_ACTIVE };
};
export const toggleNotification = () => {
    return { type: actionTypes.TOGGLER_NOTIFICATION_ACTIVE };
};
