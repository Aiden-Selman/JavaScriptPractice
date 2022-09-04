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

// Objects
// Defination
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

const person = 
{
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

// Methods
name = person.fullName();

// Strings
// Declartion
let carName1 = "Volvo XC60";  // Double quotes
let carName2 = 'Volvo XC60';  // Single quotes

// You can have quotes in a string so long as they don't match the outside of the string declaration.
let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"';

// Escape characters
// The sequence \"  inserts a double quote in a string
let text = "We are the so-called \"Vikings\" from the north.";

// The sequence \'  inserts a single quote in a string
let text= 'It\'s alright.';

// The sequence \\  inserts a backslash in a string
let text = "The character \\ is called backslash.";

// Methods
// Length
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;

// Slice
// Extracts a part of a string and returns the extracted part in a new string
let str = "Apple, Banana, Kiwi";
let part = str.slice(7, 13);

// Substring
let str = "Apple, Banana, Kiwi";
let part = str.substring(7, 13);

// Replace
let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");

// to uppercase
let text1 = "Hello World!";
let text2 = text1.toUpperCase();

// to lowercase
let text1 = "Hello World!";
let text2 = text1.toLowerCase();

// concat
let text = "Hello" + " " + "World!";
let text = "Hello".concat(" ", "World!");

// trim
let text1 = "      Hello World!      ";
let text2 = text1.trim();

// start pad
let text = "5";
let padded = text.padStart(4,"x");

// end pad
let text = "5";
let padded = text.padEnd(4,"x");

// char at
let text = "HELLO WORLD";
let char = text.charAt(0);

// char code at
let text = "HELLO WORLD";
let char = text.charCodeAt(0);

// index of
let str = "Please locate where 'locate' occurs!";
str.indexOf("locate");

// last index of
let str = "Please locate where 'locate' occurs!";
str.lastIndexOf("locate");

// search
let str = "Please locate where 'locate' occurs!";
str.search("locate");

// match
// The match() method searches a string for a match against a regular expression, and returns the matches, as an Array object
let text = "The rain in SPAIN stays mainly in the plain";
text.match(/ain/g);

// includes
// returns true if a string contains a specified value
let text = "Hello world, welcome to the universe.";
text.includes("world");

// startswith
// method returns true if a string begins with a specified value, otherwise false
let text = "Hello world, welcome to the universe.";
text.startsWith("Hello");

// endswith
// method returns true if a string ends with a specified value, otherwise false
let text = "John Doe";
text.endsWith("Doe");

// Numbers
// methods
// is not a number
// find out if a value is a not a number
let x = 100 / "Apple";
isNaN(x);

// Watch out for NaN. If you use NaN in a mathematical operation, the result will also be NaN
let x = NaN;
let y = 5;
let z = x + y;

// Or the result might be a concatenation like NaN5
let x = NaN;
let y = "5";
let z = x + y;

// NaN is a number: typeof NaN returns number
typeof NaN;

// Infinity
let myNumber = 2;
// Execute until Infinity
while (myNumber != Infinity) 
{
  myNumber = myNumber * myNumber;
}

// Dividing by 0 will generate infinity as well
let x =  2 / 0;
let y = -2 / 0;

// Infinity is a number: typeof Infinity returns number
typeof Infinity;

// Hexadecimal
// Declaration
let x = 0xFF;

// toString
// By default, JavaScript displays numbers as base 10 decimals. But you can use the toString() method to output numbers from base 2 to base 36. Hexadecimal is base 16. Decimal is base 10. Octal is base 8. Binary is base 2.
let myNumber = 32;
myNumber.toString(32);
myNumber.toString(16);
myNumber.toString(12);
myNumber.toString(10);
myNumber.toString(8);
myNumber.toString(2);

// Numbers as objects
let y = new Number(123);

// Number methods
// toExponential() returns a string, with a number rounded and written using exponential notation.
// A parameter defines the number of characters behind the decimal point
let x = 9.656;
x.toExponential(2);
x.toExponential(4);
x.toExponential(6);

// toFixed
// toFixed() returns a string, with the number written with a specified number of decimals
let x = 9.656;
x.toFixed(0);
x.toFixed(2);
x.toFixed(4);
x.toFixed(6);

// toPrecision
// toPrecision() returns a string, with a number written with a specified length
let x = 9.656;
x.toPrecision();
x.toPrecision(2);
x.toPrecision(4);
x.toPrecision(6);

// valueOf
// valueOf() returns a number as a number
let x = 123;
x.valueOf();
(123).valueOf();
(100 + 23).valueOf();

// Number
// Used to convert variables to numbers
Number(true);
Number(false);
Number("10");
Number("  10");
Number("10  ");
Number(" 10  ");
Number("10.33");
Number("10,33");
Number("10 33");
Number("John");

// Number() can also convert a date to a number
Number(new Date("1970-01-01"))

// parseInt
// parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:
parseInt("-10");
parseInt("-10.33");
parseInt("10");
parseInt("10.33");
parseInt("10 20 30");
parseInt("10 years");
parseInt("years 10");

// parseFloat
// parseFloat() parses a string and returns a number. Spaces are allowed. Only the first number is returned
parseFloat("10");
parseFloat("10.33");
parseFloat("10 20 30");
parseFloat("10 years");
parseFloat("years 10");

// Number MAX_VALUE
// MAX_VALUE returns the largest possible number in JavaScript.
// Number MIN_VALUE
// MIN_VALUE returns the lowest possible number in JavaScript.
let x = Number.MAX_VALUE;
let x = Number.MIN_VALUE;

// Number Positive_Infinity
// Number negative infinity
let x = Number.POSITIVE_INFINITY;
let x = Number.NEGATIVE_INFINITY;

// Number as NaN
// NaN is a JavaScript reserved word indicating that a number is not a legal number
let x = Number.NaN;

// Arrays
// Declaration
const cars = ["Saab", "Volvo", "BMW"];

// Second way of declaration
const cars = new Array("Saab", "Volvo", "BMW");

// Pulling elements out of the array
const cars = ["Saab", "Volvo", "BMW"];
let car = cars[0];
