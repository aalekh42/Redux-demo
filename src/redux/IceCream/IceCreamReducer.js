import {BUY_ICECREAM, RETURN_ICECREAM} from './IceCreamType';

const initialState={
    numOfIceCreams:10
}

const IceCreamReducer=(state=initialState,action)=>{
    switch(action.type){
        case BUY_ICECREAM:
            return{
                ...state,
                numOfIceCreams:state.numOfIceCreams-1
            }
        case RETURN_ICECREAM:
            return{
                ...state,
                numOfIceCreams:state.numOfIceCreams+2
            }
        default:
            return state;
    }
}

export default IceCreamReducer;