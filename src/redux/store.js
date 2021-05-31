import {combineReducers, createStore} from "redux";
import CardReducer from "./Cards/CardReducer";
import IceCreamReducer from "./IceCream/IceCreamReducer";

const rootReducer=combineReducers({
    Card:CardReducer,
    IceCream:IceCreamReducer
})
const store=createStore(rootReducer);
// const store=createStore(CardReducer);

export default store;