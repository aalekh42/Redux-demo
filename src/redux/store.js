import {applyMiddleware, combineReducers, createStore} from "redux";
import CardReducer from "./Cards/CardReducer";
import IceCreamReducer from "./IceCream/IceCreamReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from "redux-logger";

const rootReducer=combineReducers({
    Card:CardReducer,
    IceCream:IceCreamReducer
})
const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(logger)));
// const store=createStore(CardReducer);

export default store;