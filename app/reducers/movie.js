/**
 * Created by xiaoqi on 16/9/2.
 */
import {MOVIE} from './../constants/ActionTypes';

const  initialState={
    name:'movie'
};

export default (state = initialState, action = {}) =>{
    switch (action.type){
        case MOVIE:
            return Object.assign({},state,{

            });
        default:
            return state;
    }
}