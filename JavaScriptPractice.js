// JavaScript Variables
var variable;
let value;
const price = 5;

/*
let x = 0;
let x = 1;
This will not work
*/

// This does work
var x = 0;
var x = 1;

// Varible scope
{
    let x = 0;
}

// x cannot be used here

{
    var x = 0;
}
// x can be used here

// redeclaring variables
var x = 10;
// Here x is 10

{
var x = 2;
// Here x is 2
}

// Here x is 2
//

let x = 10;
// Here x is 10

{
let x = 2;
// Here x is 2
}

// Here x is 10

// Constants examples
const PI = 3.141592653589793;
PI = 3.14;      // This will give an error
PI = PI + 10;   // This will also give an error

// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");

// You can create a const object:
const car = {type:"Fiat", model:"500", color:"white"};

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson";

// JS operators
// Adding
let x = 5;
let y = 2;
let z = x + y;

// Multiplying
let x = 5;
let y = 2;
let z = x * y;

// Javascript data types
let length = 16;                               // Number
let lastName = "Johnson";                      // String
let x = {firstName:"John", lastName:"Doe"};    // Object

// Functions
function myFunction(p1, p2) 
{
    return p1 * p2;   // The function returns the product of p1 and p2
}
