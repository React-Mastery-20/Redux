import store from "./redux/store.js";
import { increment,decrement,reset } from "./redux/actions/counterActionCreator.js";

// console.log(store);

console.log("init", store.getState());

store.dispatch(increment(100));

console.log("2nd", store.getState());
store.dispatch(increment(500));
console.log("3nd", store.getState());