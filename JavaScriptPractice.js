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
