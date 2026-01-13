import store from "./redux/store.js";
import { increment,decrement,reset } from "./redux/actions/counterActionCreator.js";

// console.log(store);

console.log("init", store.getState());

store.dispatch(increment());

console.log("2nd", store.getState());