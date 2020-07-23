import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { reducers } from "./../reducer/reducer";

export const store = createStore(reducers, compose(applyMiddleware(thunk)));
store.subscribe(() => console.log(store.getState()));
