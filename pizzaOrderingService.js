// Let the Pizza ordering service is divided into following steps:
/*
    1. Find the pizza shop near the location of the user:
    2. Check the preferred pizza is availabe or not
    3. Finds a complementary beverage along with pizza
    4. Create the order
    5. Deliver the pizza to the customer

    So, we need to create promises for these events to either resolve or reject them. 
    The resolve of a promise is required to notify the successful completion of an event. 
    The reject takes place when there is an error.
*/
// Promise for finding the pizza shop near the user:
// Mock API call "/api/pizzahub/shop" 
// Fetch the nearby pizza shop
const fetchPizzaShopNearby = function({longi, lat}) {
    console.log(`Locating pizza shop near your location with latitude = ${lat} and longitude = ${longi}`);
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const response = {
                shopId: 'P-123',
                shopName: 'Pizza Gram'
            }
            resolve(response.shopId);
        },2000);
    });
}

// Promise for fetching the available pizzas from the store:
// Mock API call "/api/pizzahub/pizza" 
// Fetch available pizzas in the shop

const fetchAvailablePizzas = ({shopid}) => {
    console.log(`Getting Pizza List from the shop ${shopid}...`);
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            const response = {
                pizzas: [
                    {
                        type: "veg",
                        name: "margarita",
                        id: "pv-123"
                    },
                    {
                        type: "nonveg",
                        name: "pepperoni slice",
                        id: "pnv-124"
                    }
                ]
            };
            resolve(response); 
        }, 1000);
    });
}

// Check if the selected pizza is available in the shop


const getMyPizza = (result, type, name)=>{
    let pizzas = result.pizzas;
    console.log(`Got the pizzas list`, pizzas);
    let myPizza = pizzas.find((pizza)=>{
        return (pizza.type === type && pizza.name === name);
    });
    return new Promise((resolve,reject) => {
        if(myPizza){
            console.log(`Found my pizza ${myPizza.name}`);
            resolve(myPizza);
        }
        else {
            console.log(`The pizza is not available`);
            reject(new Error(`Sorry, we do not have the ${type} ${pizza} for now`));
        }
    });
}

// Now Fetch the Complimentary Beverage
// Mock API call "/api/pizzahub/beverages" 
// Fetch the complimentary beverage with the selected pizza

const fetchBeverage = function({pizzaId}){
    console.log(`Getting Beverages for the pizza ${pizzaId}...`);
    return new Promise((resolve, reject) => {
        // Get the free beverage for the given pizza id
        setTimeout(() => {
            const response = {
                id: "b-10",
                name: "cola",
              };
              resolve(response);
        }, 1000);
    })
}

// Creation of the order :
// Mock API call "/api/pizzahub/order"
// Create the order

const createOrder = (endpoint, payload) => {
    if (endpoint.includes("/api/pizzahub/order")) {
        const { type, name, beverage } = payload;
        console.log("Placing the pizza order with...", payload);
        return new Promise((resolve, reject) => {
          setTimeout(function(){
            let response = {
                success : true,
                message : `The ${type} ${name} pizza order with ${beverage} has been placed successfully.`,
            };
            resolve(response);
          }, 1000);
        });
    }
}


// Combine All the Fetches in a Single Place
function fetch(endpoint, payload){
    if(endpoint.includes("/api/pizzahub/shop")) {
        return fetchPizzaShopNearby(payload);
    } else if (endpoint.includes("/api/pizzahub/pizza")) {
        return fetchAvailablePizzas(payload);
    } else if (endpoint.includes("/api/pizzahub/beverages")) {
        return fetchBeverage(payload);
    }
}

function orderPizza(type,name) {
    // Get the Nearby Pizza Shop
    fetch("/api/pizzahub/shop", {longi : 38.8951 , lat: -77.0364})
    // Get all pizzas from the shop
    .then((shopId) => fetch("/api/pizzahub/pizza", {shopid : shopId}))
    // Check if my pizza is available
    .then((allpizzas) => getMyPizza(allpizzas, type, name))
    // get the beverage with the selected pizza
    .then((pizza) => fetch("/api/pizzahub/beverages", {pizzaId : pizza.id}))
    // Now create the order
    .then((beverage) => createOrder("/api/pizzahub/order",
            {   
                type : type,
                name : name,
                beverage : beverage.name
            })
    ).then((result) => {
        console.log(result.message);
    })
    .catch((error) => {
        console.error(`${error.message}`);
    })
}

//orderPizza("nonveg", "pepperoni slice");
let arm = 'humanbody'

let obj = {
    A : 'apple',
    human : 'boy',
    C : 'cat',
    [arm] : 'asd'
}

let obj1 = {}

let newobj = new Object('hello');

console.log(newobj);
newobj.name = 'Biswa'
newobj.getName = function () {
    return this.name;
}
//console.log(newobj.getName())

const { A, human , animal } = obj;

//console.log(obj);
let a = 'foo', b = 42, c = {};
let o = {a, b, c}

//console.log(o['a'], o.b , o.c);

