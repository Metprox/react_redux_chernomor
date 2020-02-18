const init = [];

export const testReducer = (store = init, action) => {
    switch (action.type) {
        case 1: {
            return store;
        }
        default:
            return store;
    }
};
