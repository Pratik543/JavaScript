// Lessons of Variables, Data Types

// Variables are declared using var , let , and const keywords ,var is not used often in modern JS

// Through let keyword you can reassign the variable value and through const keyword variable the value would be immutable
//-------------------------------- Var Keyword -----------------------------------------------------
// - The `var` keyword is used to declare variables that are function-scoped. When declared inside a function, var variables are accessible only inside that function, and not outside it.

var n = "Pratik";
console.log(n);

var y = "name";
if (y === "name") {
  var ne = "Pratik";
  console.log(ne);
}
console.log(ne);

//-------------------------------- let Keyword -----------------------------------------------------
// - The `let` keyword is used to declare variables that are block-scoped. When declared inside a block, the variable is accessible only within that block and its child blocks.
let array = [2, 3, 4, 42, 24, 43, 34, 5, 5, 3, 54, 62];
array = [4, 4, 2, 56, 34, 63];
console.log(array);

//-------------------------------- const Keyword -----------------------------------------------------
// - The `const` keyword is used to declare variables that are block-scoped and cannot be reassigned after their initialization.
const value = 34;
// value = 34;   //cannot reassign the const variable in js
console.log(value);

// ----------------------------------------------------------------------------------------

// Data Types are Numbers, Boolean, Strings, Objects, Null, Undefined, Symbols
// Numbers
const firstNumber = 45;
const secondNumber = 23;

const result = firstNumber / secondNumber;
console.log(typeof result);

// Infinity

const inf = 1 / 0;
console.log(inf);
console.log(typeof inf);

// Booleans
// true -yes, correct ,1
// false -no, incorrect, 0

const isCool = true;

console.log(isCool);
console.log(typeof isCool);

// #2. Example
const age = 29;

console.log(age > 18);

// Strings
const string = "hello";
console.log(string);
console.log(typeof string);

// Null
let num = null; //Type of null is shown as object its a bug and developers are keeping it as it as cause if it got fixed it can create bugs in lot of code bases

console.log(typeof num);
num = 34;
console.log(num);
console.log(typeof num);

// undefined
let x;
console.log(x);
console.log(typeof x);

// Objects
// Objects are used to store collection of datas in more complex entities

const person = {
  name: "John",
  age: 29,
  address: "USA",
};

console.log(person.address);
console.log(typeof person.address);
console.log(person);
console.log(typeof person);

// Arrays

const arr = [1, 2, 3];
console.log(arr);
console.log(typeof arr);

const date = new Date();
console.log(date);

//Javascript is Dynamically typed it means you can change the type of variable anytime as the requirements change
let message = "hello javascript";
console.log(typeof message);

message = 5;
console.log(typeof message);

message = true;
console.log(typeof message);
