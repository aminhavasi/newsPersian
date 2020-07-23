export const login = (state = {}, action) => {
    switch (action.type) {
        case "SET_LOGIN":
            return action.payload;
        case "CLEAR_LOGIN":
            return action.payload;
        default:
            return state;
    }
};
export const register = (state = {}, action) => {
    switch (action.type) {
        case "SET_REGISTER":
            return action.payload;
        case "CLEAR_REGISTER":
            return action.payload;
        default:
            return state;
    }
};
