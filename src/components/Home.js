import React from 'react';
import Header from './Header';
import Footer from './Footer';

import {buyCard,returnCard, buyIceCream, returnIceCream} from '../redux';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Home(props){
    const user="Aalekh";
    return(
        <>
        <Header />
        <h2>Hello Branch 1 here created by {user}</h2>
        <div>Number of Cards :{props.numOfcards}</div>
        <button onClick={props.buyCard}>BUY</button>
        <button onClick={props.returnCard}>RETURN</button>
        <div>NUmber of IceCeam :{props.numOfIceCreams}</div>
        <button onClick={props.buyIceCream}>BUY</button>
        <button onClick={props.returnIceCream}>RETURN</button>
        {/* <button >RESET</button> */}
        <Router>
          <Footer />
        </Router>
        </>
    )
}

//STEP 1(gets redux state as parameter and returns an object. So we can use this state as props)
const mapStateToProps = state =>{
    return{
        numOfcards:state.Card.numOfcards, 
        //used here state.Card because we have mentioned an object inside combinereducers of store.js(where Card is for CardReducer)
        
        numOfIceCreams:state.IceCream.numOfIceCreams
    //used here state.IceCream because we have mentioned an object inside combinereducers of store.js(Where IceCream is for IceCreamReducer)

    }
}

//STEP 2 (Use dispatch as a paramter and returns a function. Here e can use action Creater methods will act as an props)
const mapDispatchToProps=dispatch=>{
    return{
        buyCard:()=>dispatch(buyCard()),
        returnCard:()=>dispatch(returnCard()),
        buyIceCream:()=>dispatch(buyIceCream()),
        returnIceCream:()=>dispatch(returnIceCream())
    }
}

//STEP 3 (Connect)
export default connect(mapStateToProps,mapDispatchToProps)(Home);