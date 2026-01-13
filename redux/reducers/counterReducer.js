import { INCREMENT, DECREMENT, RESET } from "../actions/actionTypes.js";

let initialState = 0;

function counterReducer(state = initialState, action){

    if(action.type == INCREMENT){
        return state+action.payload;
    }else if(action.type == DECREMENT){
        return state-1;
    }else if(action.type == RESET){
        return state=0;
    }else{
        return state;
    }
}

export default counterReducer; 