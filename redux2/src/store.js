import {applyMiddleware, compose, createStore} from "redux"
import {composeWithDevTools} from 'redux-devtools-extension'
import reducers from "./Reducer"
const store=createStore(reducers,composeWithDevTools(applyMiddleware()))
export default store;