import {BUY_CARD} from './CardTypes';
import {RETURN_CARD} from './CardTypes';
import {MODAL_CARD} from './CardTypes';

export const buyCard=(number=1)=>{
    return{
        type: 'BUY_CARD',
        payload: number
    }
}

export const returnCard=()=>{
    return{
        type:"RETURN_CARD"
    }
}

export const modalCard=()=>{
    return{
        type:"MODAL_CARD"
    }
}