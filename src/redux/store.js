import {  createStore} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import movieReducer from "./reducers"
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
const store = createStore(movieReducer,applyMiddleware(thunk))
export default store;