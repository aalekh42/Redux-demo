import {applyMiddleware, combineReducers, createStore} from "redux";
import CardReducer from "./Cards/CardReducer";
import IceCreamReducer from "./IceCream/IceCreamReducer";
import UserReducer from "./Users/UserReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from "redux-logger";
import thunk from "redux-thunk";

const rootReducer=combineReducers({
    Card:CardReducer,
    IceCream:IceCreamReducer,
    User:UserReducer
})
const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(logger,thunk)));
// const store=createStore(CardReducer);
// store.subscribe(()=>{console.log(store.getState())})

export default store;