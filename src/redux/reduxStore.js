import {applyMiddleware, combineReducers, createStore} from "redux";
import postReducer from '../reducers/postReducer'
import thunkMiddleware from 'redux-thunk'


let reducers = combineReducers({
    postPage: postReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware) )

export default store