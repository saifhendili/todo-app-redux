import { createStore, combineReducers } from "redux";
import reducer from "../reducers/todoreducers";

const store = createStore(reducer);

export default store;