import CartReducer from "./CartReducer";
import {combineReducers} from 'redux';

const reducer=combineReducers({
    cartItems: CartReducer
})
export default reducer