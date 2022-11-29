/*
    In Javascript, functions can be assigned to variables in the same way that strings or arrays can. 
    They can be passed into other functions as parameters or returned from them as well. 
    A “higher-order function” is a function that accepts functions as parameters and/or returns a function.
*/
const hof = fn => (param1, param2) => {
    return param2 * param1;
}

function hof1() {
    return function fn(param1, param2){
        return param1 * param2;
    }
}

let a = hof();
let b = hof1();

console.log(a(1,0));
console.log(b(1,3));
