import {BUY_CARD} from "./CardTypes";
import {RETURN_CARD} from "./CardTypes";
import {MODAL_CARD} from "./CardTypes";

const initialState={
    numOfcards:10,
    showModal:true
}
const CardReducer=(state=initialState,action)=>{
    switch(action.type){
    case BUY_CARD:
        return{
            ...state,
            numOfcards:state.numOfcards-action.payload
        }
    case RETURN_CARD:
        return{
            ...state,
            numOfcards:state.numOfcards+1
        }
    case MODAL_CARD:
        return{
            ...state,
            showModal:!state.showModal
        }
        default:
            return state
    }
}
export default CardReducer;