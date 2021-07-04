import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Tooltip from './Tooltip';
import {buyCard,returnCard, buyIceCream, returnIceCream} from '../redux';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Redirect} from "react-router-dom";

function NewHome(props){
    const [number,setNumber]=React.useState(1);
    const user="Aalekh";
    {/*const {authorized}=props;
     if(!authorized){
        return(
            <Redirect to="./"/>
        )
    } */}
    return(
        <>
        
        <input type="text" value={number} onChange={(e)=>setNumber(e.target.value)}></input>
        <button onClick={()=>props.buyCard(number)}>BUY{number}Cards</button>
        {/* <div><span>MODAL HERE</span>
        {props.showModal?<h2>MODAL</h2>:null}
        </div>
        <Tooltip user={user} />
        <button >RESET</button> */}
        </>
    )
}

//STEP 1(gets redux state as parameter and returns an object. So we can use this state as props)
const mapStateToProps = state =>{
    return{
        numOfcards:state.Card.numOfcards, 
        //used here state.Card because we have mentioned an object inside combinereducers of store.js(where Card is for CardReducer)
        showModal:state.Card.showModal,
        numOfIceCreams:state.IceCream.numOfIceCreams
    //used here state.IceCream because we have mentioned an object inside combinereducers of store.js(Where IceCream is for IceCreamReducer)

    }
}

//STEP 2 (Use dispatch as a paramter and returns a function. Here e can use action Creater methods will act as an props)
const mapDispatchToProps=dispatch=>{
    return{
        buyCard:number=>dispatch(buyCard(number)),
        returnCard:()=>dispatch(returnCard()),
        buyIceCream:()=>dispatch(buyIceCream()),
        returnIceCream:()=>dispatch(returnIceCream())
    }
}

//STEP 3 (Connect)
export default connect(mapStateToProps,mapDispatchToProps)(NewHome);