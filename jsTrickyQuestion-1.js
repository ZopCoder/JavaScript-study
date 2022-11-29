// Question 1:
// -------------
// Write the output:
console.log([] + []);
// This would give an empty string
// Explanation:
/*
    + operator works on two integers to add them or two strings to concatenate them.
    When + operator is used on an empty array or empty object, it acts as a type casting
    operator and tries to cast the empty array or empty object to empty string.

    So here in the example above the result would be an empty string
    The above is same as
    console.log({} + {})
    console.log({} + [])
*/

// Question 2:
// -------------
// What will be the output of the following
function a(){
    return "hello";
}

const sentence = a `hi`;
console.log(sentence);

// This would print "hello"
// Explanation:
/*

    The "a" function is returning "hello" no matter what argument you pass.
    now when you declare a constant and assign it with "a" and then use the 
    template string or tagged template string, `hi`, it would treat the string 
    inside the template string as an argument to the function a, 
    so actually it will be like
    
    const sentence = a(`hi`)
    since "a" would return string "hello" irrespective of the argument, "hello" will be 
    printed in the console.
   
*/

// Question 3:
// -------------
// How to make the content editable for any webpage

// Answer:
// Just open the webpage -> Go to developer tools -> go to console 
// --> Write "document.body.contentEditable = true;"
// Now you can edit the content of the full webpage.

// Question 4:
// -------------
// What will be the output

function y(){
    console.log(this.length);
}

const x ={
    length: 5,
    method: function(y){
        arguments[0]()
    }
};

x.method(y,1)

// Question 5:
// -------------
// What will be the output

const array = [
    {x : "foo", y : 8},
    {x : "bar", y : 3},
    {x : "baz", y : 7},
]

const foo = array.reduce(
    (a,b) => ({
        ...a,
        [b.x]:b.y,
    }),
    {}
);

console.log(foo);

// Question 6:
// -------------
// What will be the output

const array1 = [{name:"foo"},{name:"bar"},{name:"baz"}];

const array2 = new Array(array1.length).fill({});


array2.forEach((obj, idx) => {
    obj.name = array1[idx].name,
    obj.position = idx
})

const array3 = array1.map((obj, idx) => ({
    ...obj,
    position: idx
}));

const array4 = array1.slice();
array4.forEach((obj, idx) => {
    obj.postion = idx;
});

console.log(array1);
console.log(array2);
console.log(array3);
console.log(array4);

// Question 7:
// -------------
// What will be the output
const fooObj = {name:"foo"};
const barObj = {name:"bar"};

const getFoo = () => Promise.resolve(fooObj);
const getBar = () => {
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(barObj);
        }, 3000);
    });
}
Promise.all([getFoo(), getBar()])
    .then((foo, bar) => {
        console.log(fooObj, barObj);
        console.log(foo, bar);

        foo.isAnAlgoExpert = foo.name.includes("AlgoExpert");
        bar.isAnAlgoExpert = bar.name.includes("AlgoExpert");
        return [foo, bar];
    })
    .then(([foo, bar]) =>{
        console.log(fooObj, barObj);
        console.log(foo, bar);
    })
    .catch(() => {
        console.log("There was an error");
    });

    fooObj.name += " is an AlgoExpert";
    barObj.name += " is an AlgoExpert";

    console.log(fooObj, barObj);
    
// Question 8:
// -------------
// What will be the output

const candidate = {
    isLookingForJob : true,
    location : "foo",
    name : "bar",
    otherInfo : {
        age : 26,
        interests: ["a", "b" , "c"],
        isEmployed : false,
    },
    remoteFriendly : true,
};

const getSignedOffer = (candidate) => {
    if(!candidate.isLookingForJob || !candidate.remoteFriendly){
        return {
            error : "candidate doesn't meet requirement",
            candidate, 
            offerSigned: false,
        };
    }
    else {
        return {
            error : null,
            candidate : {
                isLookingForJob : false,
                ...candidate,
                otherInfo: {
                    ...candidate.otherInfo,
                    isEmployed : true,
                },
            }, 
            offerSigned: true,
        };
    }
};

console.log(getSignedOffer(candidate));
/*
// Question 9:
// -------------
// What will be the output

const array11 = [7,15,10,2,8, 1, 7, 0];
const array12 = [0,0,0];

const foo11 = [...array11]
    .filter((a) => a%2 === 1)
    .sort()
    .slice(0,2)
    .map((a) => a + 5)
    .some((a) => a > 15);


const bar11 = 
    array11.concat(array12) === [...array11, ...array12] || 
    array11.reduce((a,b) => a * b, 1) === array12.reduce((a,b) => a + b, 1);
    
console.log(foo11);    
console.log(bar11);    
*/
