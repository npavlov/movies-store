import { createStore, applyMiddleware } from "redux";
import reducer from "./Reducers";
import thunkMiddleware from "redux-thunk";

const store = createStore(reducer as any, applyMiddleware(thunkMiddleware));

export default store;
