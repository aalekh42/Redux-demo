import {BUY_CARD} from "./CardTypes";
import {RETURN_CARD} from "./CardTypes"

const initialState={
    numOfcards:10
}
const CardReducer=(state=initialState,action)=>{
    switch(action.type){
    case BUY_CARD:
        return{
            ...state,
            numOfcards:state.numOfcards-1
        }
    case RETURN_CARD:
        return{
            ...state,
            numOfcards:state.numOfcards+1
        }
        default:
            return state
    }
}
export default CardReducer;