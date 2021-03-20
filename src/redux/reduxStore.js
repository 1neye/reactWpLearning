import {combineReducers, createStore} from "redux";
import postReducer from '../reducers/postReducer'


let reducers = combineReducers({
    postPage: postReducer,
})

let store = createStore(reducers)

export default store