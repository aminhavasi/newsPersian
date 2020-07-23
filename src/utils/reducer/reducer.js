import { combineReducers } from "redux";
import { login, register } from "./authReducer";

export const reducers = combineReducers({
    login,
    register,
});
