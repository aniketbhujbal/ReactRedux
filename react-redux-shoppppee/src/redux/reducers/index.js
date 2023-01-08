import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer } from "./productsReducers";
/* const reducers = combineReducers({
    allProducts: productsReducer,

}); */
//key is the key that we are storing in our state object
const reducers = combineReducers({
    allProducts: productsReducer,
    product: selectedProductsReducer,
});
export default reducers;