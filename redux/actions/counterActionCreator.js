import { INCREMENT, DECREMENT, RESET } from "./actionTypes.js";

const increment = (value)=>{
    return {type: INCREMENT, payload:value }
}

const decrement = ()=>{
    return {type: DECREMENT}
}
const reset = ()=>{
    return {type: RESET}
}

export {increment, decrement, reset};