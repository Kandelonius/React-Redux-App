import { combineReducers } from "redux";
import { brewReducer as brew } from "./brewReducer";

export default combineReducers({
    brew,
});