export const login = (event, type) => {
    return async (dispatch, getState) => {
        const person = { ...getState().login };
        if (type === "email") {
            person.email = event;
        } else {
            person.password = event;
        }
        await dispatch({ type: "SET_LOGIN", payload: person });
    };
};

export const register = (event, type) => {
    return async (dispatch, getState) => {
        const person = { ...getState().register };
        if (type === "email") {
            person.email = event;
        } else if (type === "password") {
            person.password = event;
        } else {
            person.username = event;
        }
        await dispatch({ type: "SET_REGISTER", payload: person });
    };
};

export const recovery = (event) => {
    return async (dispatch) => {
        await dispatch({ type: "SET_RECOVERY", payload: event });
    };
};
