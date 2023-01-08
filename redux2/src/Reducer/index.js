import {combineReducers} from 'redux'
import counterreducer from './counterreducer'
//collect all the reducers
const reducers=combineReducers({
    //counter here is the  name of member whoes value is stored in store
    counter:counterreducer
})
export default reducers;