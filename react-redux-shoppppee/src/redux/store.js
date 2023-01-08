import { createStore } from "redux";

import reducers from "./reducers/index";

//createstore 2 nd argument is redux thunk or redux saga middleware
//currently we are not using it so it is empty
//the third parameter will help to see redux tab in developers tool 
//in the browser
const store = createStore(
    reducers, {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;