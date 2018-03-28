//Here we will import the const variables for switching
import {FETCH_WEATHER} from '../actions/index';

export default function(state=[],action){
    // console.log(action);

    switch(action.type){
        case FETCH_WEATHER:
            // we never ever mutate the existing state instead create new
            return [action.payload.data, ... state] ;
            break;
        default:
            return state;
    }

    return state;
}