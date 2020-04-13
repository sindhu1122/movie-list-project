import { combineReducers } from 'redux'
import signUp from './signUp'
import login from './login';
import search from './search';
import movie from './movie';
import list from './list';
import addmovie from './addmovie'
import adddirector from './adddirector'
import addactor from './addactor'
import addproducer from './addproducer'
import addactress from './addactress'
//import admin from './admin.js';
export default combineReducers({
signUp,login,search,movie,list,addmovie,adddirector,addactor,addproducer,addactress
})