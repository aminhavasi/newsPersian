import { combineReducers } from "redux";
import { login, register, recoveryPassword } from "./authReducer";

export const reducers = combineReducers({
    login,
    register,
    recoveryPassword,
});
