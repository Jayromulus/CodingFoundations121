// A variable is a named container for storing data values

let a = 2;

let       b         =         1;
(1)       (2)       (3)       (4)
/*
  1. JavaScript keyword to tell our code we are making a variable
  2. the name of the variable, this is how we will refer to the value stored within the container
  3. assignment operator: gives the variable a value
  4. the initial value of the variable
*/

// Variable Declarations
// The declaration of a variable is the left side of the assignment operator, this is where we create the variable "container"

// let - the newer way to make variables
let x;
// var - the older way to make variables - DO NOT USE
var y;
// const - a variable that cannot change - it is constant
const z;

// Variable Initialization
// initialization is to the right side of the assignment operator (=), and is where we set the value for the variable
let initial = 10;
//            ^ Initialization
const initial_const = 22; // initial_const will ALWAYS refer to the number 22, since that was the initialized value

// EXAMPLES
let x;
console.log('Declaration:', x);

x = 10;
console.log('Initialization:', x);

x = 33;
console.log('Re-Initialization:', x);

let greeting = 'Hello';
const myName = 'Jerome';
console.log(greeting, myName);

greeting = 'New greeting';
console.log(greeting, myName);

// myName = 'New name'; // TypeError: Assignment to constant variable
// we cannot change the value of a const after we initialize it
console.log(greeting, myName);