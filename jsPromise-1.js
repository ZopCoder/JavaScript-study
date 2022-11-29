// A simple javascript promise 
// The promise would find a user from an array of users.
const getUser = function(){
    const users = [
        {name:'Joe', email:'joe@email.com'},
        {name:'Jane', email:'jane@email.com'}
    ]
    return users;
}

// Creation of a Promise:
let promise = new Promise((resolve, reject) => {
    let resolvedValue = 'water';
    resolve(`I have got the desired ${resolvedValue}`);
    reject(new Error(`I have encountered ${Error.toString()}`));
})

// Creating a similar function like "setTimeout" using "Promise"

function delay(ms){
    let success = false;
    return new Promise((resolve,reject) => {
        if(success){
            setTimeout(resolve,ms)
        }
        else {reject(msg)}
    })
}

delay(3000).then(() => console.log('Return after 3 sec'),
                 () => console.log('Get the success msg as true')
                )

promise.then((msg)=> {console.log(msg)})
    .catch((err) => {console.log(err)})
    .finally(() => console.log('I have finished my promise'));

let myid = setInterval(() => {
    console.log('This is going to stop')
    },200)

setTimeout(() => {
    clearInterval(myid)
}, 2000)



   