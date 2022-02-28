// This explains the three ways to define and use variables in javascript.
// 1. Use of var 
// 2. Use of let and 
// 3. Use of const

// ##### var ######
/*
    var declarations are globally scoped or function/locally scoped.
    1.  The scope is global when a var variable is declared outside a function. 
        This means that any variable that is declared with var outside a function 
        block is available for use in the whole window.

    2.  var is function scoped when it is declared within a function. 
        This means that it is available and can be accessed only within that function.
        
    3.  If a variable is declared without the keyword var, then that variable will have global scope.    

    4.  var variables can be re-declared and updated.

    5.  Hoisting of var - Variables declared with the var keyword are subject to hoisting. 
        If we declare a variable (but do not initialize it) at the end of the function, 
        the JavaScript runtime will move it to the top of its scope and initialize it with "undefined", therefore, 
        there will be no complaint by the runtime if we use that variable before being declared.

    6.  Problem with var - Since var can be re-declared and updated, developers can unknowingly declare
        a duplicate variable using var which could lead to error in code execution.
*/

//      Explanation :
// 1 & 2
var greet   // greet is 'undefined' -- Global scope
var greetings = 'Hello there';  // Initialized with a string -- Global scope

function greetUser() {
    var hi = 'I am var as function scope'
    console.log(greet);   // Result would be 'undefined' since the variable has not yet been initialized
    console.log(greetings);
    console.log(hi);
}
greetUser();
console.log(greetings);
// console.log(hi); // Throw error as hi variable cannot be accessed outside the function

// 3
function checkX(){
    for(x=0;x<4;x++){
        console.log(x);
    }
}
checkX();
console.log('x is globally assigned and the value of x is ' + x); // Declaring a variable without the var keyword makes it global

// 4
var newVar = 'Hello Javascript';
console.log(newVar);

// Re-declaring newVar and updating the variable again.

var newVar = 'Hello new Javascript';
console.log('Updated value of newVar variable is ' + newVar);

// 5
// So var variables are hoisted to the top of their scope and initialized with a value of undefined.
console.log (greeter);
var greeter = "only hello"
// The above two lines will be interpreted by javascript as
var greeter;
console.log(greeter) // Hence the output of this line will be undefined.
greeter = 'say hello'

// 6
var sayhi = "hey hi";
var times = 4;

if (times > 3) {
    var sayhi = "say Hello instead"; 
}
console.log(sayhi) // "say Hello instead"
// This becomes a problem when you do not realize that a variable greeter has already been defined before.

// ##### let ######
/*
    let declarations are block scoped . 
    A block is a chunk of code bounded by {}. 
    A block lives in curly braces. Anything within curly braces is a block.

    1.  A variable declared in a block with let  is only available for use within that block.

    2.  let can be updated but not re-declared.

    3.  Hoisting of let. Variables with "let" also get hoisted. 
        The difference is that let gets hoisted to the block scope and remains uninitialized , 
        that's why we get an error if we try to access it before its assignment. 
        This is known as the "temporal dead zone".

*/  

// Explanation:

// 1

let count = 4;

if (count > 3) {
    let sayhello = "say Hello instead";
    console.log(sayhello);// "say Hello instead"
}
//console.log(sayhello) // hello is not defined. The  valriable is declared using let and therefore it is block scoped.

// 2

// let allows us to declare once but update again
let greetAgain = "Saying hello again";
console.log(greetAgain);
greetAgain = "I am so happy for the greeting"
console.log(greetAgain);

// Re-declaration of one variable results to error.

// let greetAgain = "This is error"; // This will lead to SyntaxError: Identifier 'greetAgain' has already been declared

// However, same variable can be declared in different scope.
let newestgreeting = "say Hi";
if (true) {
    let newestgreeting = "say Hello instead";
    console.log(newestgreeting); // "say Hello instead"
}
console.log(newestgreeting); // "say Hi"

// 3
//  Variables declared with the let keyword are not subject to hoisting. 
//  This means you cannot use a variable unless it is declared and initialized.
//  If you do so, it will result in a ReferenceError.


// console.log('printing y = ' + y);  // This will lead to ReferenceError
// let y = 10;


// ##### const ######
/*
    const declarations are block scoped. 
    A block is a chunk of code bounded by {}. 
    A block lives in curly braces. Anything within curly braces is a block.

    1.  A variable declared as const is only available for use within that block.

    2.  const can neither be updated but nor re-declared.

    3.  Hoisting of const. Variables with "const" also get hoisted. 
        The difference is that const gets hoisted to the block scope and remains uninitialized , 
        that's why we get an error if we try to access it before its assignment. 
        This is known as the "temporal dead zone".

    4. objects declared with const behave differently

*/  

// Explanation:

// 1

const hi_const = "This is global constant";  // global constant value
function checkConst() {
    const my_const = "This is a constant value";
    if (true) {
        console.log(my_const);  // block level constant
        console.log(hi_const);  // global constant
    }
}

checkConst();
// console.log(my_const);  // This will throw an error ReferenceError: my_const is not defined
console.log(hi_const);
// Like let declarations, const declarations can only be accessed within the block they were declared.

// 2

// You can neither do "Update constant" 
const assignConstant = "say Hi";
// assignConstant = "say Hello instead"; // error: Assignment to constant variable. TypeError: Assignment to constant variable.

// nor "re-declare a constant"

const assignGreeting = "say Hi";
 // const assignGreeting = "say Hello instead"; // error: Assignment to constant variable. SyntaxError: Identifier 'assignGreeting' has already been declared
 
 // Every const declaration, therefore, must be initialized at the time of declaration.

 // 4

 // While a const object cannot be updated, the properties of this objects can be updated. 

 const developer = {
     name: "Biswadeep",
     age: 46,
     language: ["C#","Python","PHP","NodeJS"]
 }

 // We cannot do the following:
 /*
    developer = {
        name: "Sanjay",
        age: 46,
        ........
    }
 */
// However we can do this instead.....
developer.age = 45;
developer.language = ["C#","Python","PHP","NodeJS","Javascript"];

console.log(developer)

// Another example:
const c = [1,2]
c.push(3)
console.log(c); // This would give us [1,2,3]
// So we can modifiy the value but we cannot reassign the const variable and thus
// c = [1,2,3] // This would give an error
