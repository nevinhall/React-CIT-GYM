import counterReducer from './counter'
import userManagmentReducer from './userManagment'


import {combineReducers} from 'redux'

const allReducers = combineReducers({
    counterReducer,
    user: userManagmentReducer
})


export default allReducers

