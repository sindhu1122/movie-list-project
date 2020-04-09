import { combineReducers } from 'redux'
import signUp from './signUp'
import login from './login';
import search from './search';
import movie from './movie';
import list from './list'
//import admin from './admin.js';
export default combineReducers({
signUp,login,search,movie,list
})