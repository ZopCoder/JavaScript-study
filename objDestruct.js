// Destructure to the Function Parameter
function logDetails({name, age}) {
    console.log(`The user, ${name} is ${age} years old.`);
}

const user = {
    name: 'Biswadeep',
    age: 46,
}
logDetails(user);

// Destructure Function Return Value

const getUser = function() {
    return {
        name: 'Sanjay',
        age: 46,
        skills: 'Jvascript',
    }
}

const {name, skills} = getUser();
console.log(`${name} has the ${skills} skill.`);

const employee = {
    'empName':'Alex',
    'age':43,
    'department':{
        'deptName':'Sales',
        'shift':'Morning',
        'address':{
            road:'15, Park street',
            city:'Kolkata',
            zip:700016
        }
    }    
}

//const {department} = employee;
const {department:{address:{city}}} = employee;
console.log(city);

const getValue = (key) => {
    const {[key] : returnValue} = employee;
    return returnValue;
}

console.log(getValue('empName'));

// Destructuring in loop.
const users = [
    {name:'Alex', age:43},
    {name:'Biswa', age:46},
    {name:'Sanjay', age:46},
]

for(let{name, age} of users){
    console.log(`${name} is ${age} years old.`);
}

// let cons = console; 
//console.log({cons});
const {log,warn,error} = console;
log('I am  here to log things');
warn('I am  here to log warnings');
error('I am  here to show error');

let emp = {
    empname: "John",
    years: 30
};

let {empname, years:age, isAdmin=true} = emp;
console.log(`${empname} is ${age} years old and he is ${isAdmin?"admin":"not an admin"}`);


let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250,
    "skills": ['javascript', 'php', 'python'],
    "address":{
        "flat":'2B',
        "street":"Part street",
        "pin":[712258,712232]
    }
};

//console.log(Object.entries(salaries));

for (let [key,value] of Object.entries(salaries)){
    console.log(`${key} has the value ${value}`);
}

// Q1: 
/*
    There is a salaries object with arbitrary number of salaries.
    Write the function sumSalaries(salaries) that returns the sum of 
    all salaries using Object.values and the for..of loop.
    If salaries is empty, then the result must be 0.
*/
let salaryObj = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
    };

function sumSalaries(obj) {
    let totSal = 0;
    for (let sal of Object.values(obj)){
        totSal += sal;
    };
    return totSal;
}

// using reduce
function sumSalariesUsingReduce(obj) {
    return Object.values(obj).reduce((prevVal, currVal)=> prevVal + currVal
    );
}

console.log(sumSalariesUsingReduce(salaryObj));

// Q2
// Write a function count(obj) that returns the number of properties in the object:

let newUser = {
    name: 'John',
    age: 30,
    isCoder: true,
  };

function count(obj) {
    return Object.keys(obj).length;
}

console.log(count(newUser));

// Q3
// Write a program to calculate the length of an associative array.
let assoArr = {one: "DataFlair", two:"JavaScript", three: 435, four: true};
console.log(Object.entries(assoArr).length); 

