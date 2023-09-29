import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./Data/reducer";
 
 
export const store= legacy_createStore(reducer,applyMiddleware(thunk))