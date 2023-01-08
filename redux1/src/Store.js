import { applyMiddleware, compose, createStore } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import reducer from "./reducer";


const Store=createStore(reducer,composeWithDevTools(applyMiddleware()))
export default Store;

//how to create store js in react?  
