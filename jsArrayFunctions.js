// Array.some()
/*
    The some() method acts on each element of an array and passes the element to the 
    callbackFn. The callbackFn takes three arguments the element, the index of the element
    and the array itself.
    Apart from the first argument the other two are optional
    some() method also takes and "thisArg" as an optional second argument which has 
    a default value of "undefined" if not mentioned.
    the "thisArg" act as the this value of the underlying callbackFn of the some() method.
*/
let myArr = [2,4,8,10,12];
let myVal = 15;
const retVal = myArr.some(function(elem,i,arr) {
    return elem > 10 && this === myVal
}, myVal);
//console.log(retVal);

// Array.every()
/*
    every() method works exactly same as some().
    
    But here the callbackFn after processing each element of the array, must return truthy value
    to get a "true" boolean return.
    
    If the callbackFn after processing any element returns falsy value then the every() method 
    immediately breaks and returns a false boolean.
*/
const isBigEnough = (element,index,array) => {
        return element >= 20;
}

// console.log([2,22,23,130,5].every(isBigEnough));
// console.log([22,23,130,135].every(isBigEnough));

// IMPORTANT CONCEPT FOR some() and every()
// The range for the array elements to be processed by the callbackFn is fixed
// before the first invocation of the callbackFn.
// New elements appended, will not be processed by the callbackFn.
// Elements deleted will not be processed by the callbackFn. 


// Modifying array elements between the some() or every() calls
let arr1 = [2,3,4]

console.log(arr1.every((elem, index, arr) => {
    arr[index] -= 1;
    console.log(`[${arr}][${index}] -> ${arr[index]}`);
    return elem >= 1;
    })
);

// Appending array elements between some() and every() call
let arr2 = [10,10,10]

const ret2 = arr2.every((element, index, arr) => {
    arr2.push(3 * 10 + ((index+1)*10))
    console.log(`[${arr}][${index}] -> ${arr[index]}`);
    return element <= 10;
});
console.log(ret2);


// Array.reduce()



