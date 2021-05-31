import {BUY_CARD} from './CardTypes';
import {RETURN_CARD} from './CardTypes'
export const buyCard=()=>{
    return{
        type: 'BUY_CARD'
    }
}

export const returnCard=()=>{
    return{
        type:"RETURN_CARD"
    }
}