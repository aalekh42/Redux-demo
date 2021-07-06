// To understand Async Actions thorugh Api Call (refer Codevolution #Video 12 redux playlist)
const redux = require('redux')
const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = require('redux-thunk').default;
const axios = require ('axios');

const createStore = redux.createStore
//initial State
const initialState={
    loading:false,
    data:[],
    error:''    
}
//Action Types
const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS ='FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

//Action Creator
const fetchUsersRequest =() =>{
    return{
        type:FETCH_USERS_REQUEST
    }
}

const fetchUsersSuccess=users=>{
    return{
        type:FETCH_USERS_SUCCESS,
        payload:users
    }
}

const fetchUsersFailure=error=>{
    return{
        type:FETCH_USERS_FAILURE,
        payload:error
    }
}

//reducer
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_USERS_REQUEST:
            return{
                ...state,
                loading:true
            }
        case FETCH_USERS_SUCCESS:
            return{
                loading:false,
                users:action.payload,
                error:''
            }
        case FETCH_USERS_FAILURE:
            return{
                loading:false,
                users:[],
                error:action.payload
            }
            
    }
}
//action Creator(returns Action) But thunkmiddleware helps to return function instead of action Object.
const fetchUsers=()=>{
    return function(dispatch){
        dispatch(fetchUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            //response.data is the list of users
            const users=response.data.map(user=>user.id)
            dispatch(fetchUsersSuccess(users))
        })
        .catch(error=>{
            //error.message is the error message
            dispatch(fetchUsersFailure(error).message)
        })
    }
}

const store=createStore(reducer,applyMiddleware(thunkMiddleware))
store.subscribe(()=>{console.log(store.getState())})
store.dispatch(fetchUsers)