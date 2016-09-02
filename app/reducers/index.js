/**
 * Created by xiaoqi on 16/9/2.
 */
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import movie  from './movie';
//console.log(movie)
const rootReducer =combineReducers({
    movie,
    routing:routerReducer
});

export  default  rootReducer;