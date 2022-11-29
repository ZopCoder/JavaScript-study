// CASE - 1
let a = true

setTimeout(() => {
    a = false;
},2000);
 
setInterval(() => {
    if(a){
        console.log('hello')
    }
}, 200); 

// Output of the above code:
/*
    'hello' will be printed 9 times but the program will not end.
    We have to hit Ctrl + C to exit the program. 
    Because, though the value of "a" become false after 2 sec but the "setInterval" will 
    be pushed by the "event loop" from "callback queue" to "call stack" after every 0.2 sec.
    but since the value of "a" became false, it has nothing to print.
    So the setInterval function hasn't become free. 
*/


// CASE - 2
// Now let us take the same code in a different way:
let b = true;

setTimeout(() => {
    b = false;
}, 2000);

while(b){
    console.log('hello')
}

// Output of the above code:
/*
    'hello' will be printed in infinite loop.
    Reason: The call stack will start executing the while loop with the 
    existing value of b, true. The setTimeout function will be pushed on 
    to the "callback queue". But since the call stack will never get empty,
    the value of b will never be changed.
    Hence the infinite loop. 
*/

// CASE - 3
// Here let us continue with CASE 1, let us assume I want to free the call stack
// and get to return the cursor after running the code.
// So what we want is to end the setInterval call.
// we do not need the "a" variable here

let c = 0;
let id =  setInterval(() => {
    console.log(c++);
}, 200)

setTimeout(() => {
    clearInterval(id);
}, 2000);