// QUESTION
/*
    1. Implement ES6 features in to the object
    2. Return the value after 2 sec
*/
var john = {
    name: 'John Doe',
    balance: 1500,
    deduct: function(amount) {
        this.balance = this.balance - amount;
        return this.name + ' has a balance of ' + this.balance;
    }
}
// console.log(john.deduct(300));

// ANSWER Part 1 -- Approach
/* 
    1. First we need to change the "var" keyword and use either const or let
    2. Use the ES6 method creation shortcut
    3. Use template string
*/

const jane = {
    name: 'jane doe',
    balance: 1500,
    deduct(amount){
        this.balance = this.balance - amount;
        return `${this.name} has a balance of ${this.balance}`;
    }
}
// console.log(jane.deduct(300));

// ANSWER Part 2 -- Approach
/* 
    1. We can use the setTimeout in console log section to delay the output by 2 sec.
        setTimeout(() => {
            console.log(jane.deduct(200))
        }, 2000)

    2. OR better way - we can modify the deduct method to return a Promise
*/

const Biswa = {
    name: 'Biswadeep',
    balance: 3500,
    deduct(amount){
        return new Promise((resolve,reject)=>{
            this.balance = this.balance - amount;
            msg = `${this.name} has a balance of ${this.balance}`;
            // setTimeout(resolve(msg), 2000) // Check this line, the function is getting called instantly
            setTimeout(() => {
                resolve(msg)
            }, 2000)
        })
    }
}

Biswa.deduct(200).then((msg)=> {console.log(msg);});

// Question - 2
// How do you add a new item at the beginning and at the end of an array.
myArray = ['a','b','c','d']

// Old school way

/* 
    myArray.push('end'); // Adds an item at the end of an array
    myArray.unshift('start'); // Adds an item at the beginning of an array.
 */

// New ES6 way.
const newArray = ['start', ...myArray, 'end'] // Using "spread" operator
console.log(newArray);

// Question - 3
// What will be the output ?
var num = 4;
function outer() {
    var num = 2;
    function inner() {
        num--;
        var num = 3;
        console.log(num);
    }
    inner();
}
outer(); // We have to keep in mind in case of "var" , it can be re-declared and re-assigned.

// Question - 4
// What will be the output?
console.log(typeof typeof 1); // ans : string Bcoz' typeof 1 will be "number" and typeof "number" is string

// Question - 5
// What will be the output?

var hero = {
    _name : 'John Doe',
    getSecretIdentity : function() {
        return this._name;
    }
};

var stoleSecretIdentity  = hero.getSecretIdentity;
console.log(stoleSecretIdentity); // Function
console.log(hero.getSecretIdentity()); // John Doe









