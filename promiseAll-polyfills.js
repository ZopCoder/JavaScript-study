/*  Create a function called promiseAll.
*   The fuction should take an array of promises and returns an array of results
*   of all the resolved promises.
*   # The results should be in the same order of the array of promises as input
*   # If one promise is rejected then the return should be the rejected value
*/

function promiseAll(promises){
    const outputs = [];
    let settledPromiseCount = 0;
    return new Promise((resolve, reject) => {
        promises.forEach((promise, i) => {
            promise.then((value) => {
                outputs[i]=value;
                settledPromiseCount++;
                if(settledPromiseCount === promises.length){
                    resolve(outputs);
                }
            })
            .catch(reject)
        });
    });
};

const slowPromise = new Promise(resolve => {
    setTimeout(()=>{
        resolve('done');
    }, 1000);
})

const promises = [
    Promise.reject('Failed'),
    slowPromise,
    Promise.resolve(2),
    Promise.resolve('Success'),
    Promise.reject('Failed again'),
];


promiseAll(promises).then(console.log).catch(console.error)