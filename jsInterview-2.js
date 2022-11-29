// Related to scope and closures.
// Predict the output of the program.
// The correct expected output would be 
/*
    After 2 sec - 
        Index: 0, Element: 5 
    After 2 more sec - 
        Index: 1, Element: 10
    After 2 more sec - 
        Index: 2, Element: 15  
    After 2 more sec - 
        Index: 3, Element: 20
    After 2 more sec - 
        Index: 4, Element: 25             
*/

// my_arr = [5,10,15,20,25];
// for(var i = 0; i < my_arr.length; i++){
//     setTimeout(function(){
//         console.log(`Item: ${i}, Element:${my_arr[i]}`)
//     },2000)
// }

// The output comes as 
/* 
    Item: 5, Element:undefined
    Item: 5, Element:undefined
    Item: 5, Element:undefined
    Item: 5, Element:undefined
    Item: 5, Element:undefined 
*/

// How to fix the issue:
// Solve -1
/*
    Here let is being used instead of var to declare the variable.
    "let" gives the i variable a block scope and thus i is being 
    counted as separate variable for each closure.
*/
const my_arr = [5,10,15,20,25];
for(let i = 0; i < my_arr.length; i++){
    setTimeout(function(){
        console.log(`Item: ${i}, Element:${my_arr[i]}`)
    },2000)
}

// Solve - 2
/*
    Here we are doing an IIFE (Immediately Invoked function expression)
    This creates and invokes a new function every time the loop runs
    resulting in a separate scope for the variable j and the closure.
*/
for(var i = 0; i < my_arr.length; i++){
    (()=>{
        var j = i
        setTimeout(function(){
            console.log(`Item: ${j}, Element:${my_arr[j]}`)
        },2000)
    })()
}

// I AM GETTING A PROBLEM THOUGH, THE PRINTING IS DONE NOT AFTER 2 SECONDS FOR EACH
// IT IS TAKING 2 SECONDS AT THE BEGINNING AND PRINTS ALL THE CONSOLE LOGS AT ONCE.
// Check...