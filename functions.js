// Functions = A block of code that performs a specific task

// Steps
// 01 Declaration
// 02 Parameters
// 03 Body which contains the code
// 04 Function Call aka Invokation

// Parameter: A parameter is a variable that is declared in a function or method definition. It represents a value that the function expects to receive when it is called. Parameters are placeholders for the actual values that will be passed as arguments.

// Argument: An argument is the actual value that is passed to a function when it is called. It is the concrete value that is assigned to a parameter. Arguments are provided when invoking or calling a function, and they can be literals, variables, or expressions.

// In simpler terms, a parameter is like a "slot" or a "placeholder" for a value that a function expects to receive, while an argument is the actual value that is passed to fill that slot or placeholder when calling the function.

// Good Practices

// 1.Naming conventions for functions should start as a verb makes the code more readable
// show , get , calc
// 2.One function...One action.
// 3. Function name should be descriptiive.

// A normal Function  syntax
function name(params) {
  //statement
  //have access to "this" keyword
}
//  a parameter is a variable defined in a function or method's declaration. It acts as a placeholder to receive and store values that are passed in as arguments when the function is called. An argument, on the other hand, is the actual data passed to a function or method when it is called. So, in simple terms, a parameter is a predefined variable in a function, while an argument is the actual value passed to that function when it is called.

// A function expression syntax
const newname = function (params) {
  //statement
};
// an expression is a piece of code that represents a value or a computation. It can be a simple value like a number or a string, or a complex computation that involves variables, operators, and functions. Expressions are used to manipulate data, perform calculations, and make decisions

// An arrow function syntax
const Newname = (params) => {
  //statement
};

//Examples
//Normal Function example
function sayHi(name) {
  console.log(`Hello ${name}`);
  //   return
}
//example2
function square(num) {
  // Declaration followed by function name(parameters)
  return num * num; //statements
}

const result = square(50); //function expression
console.log(result);

//Function Expression
const add = (a, b) => {
  return a + b;
};
// In JavaScript, the return statement is used within a function to stop the execution of the function and return a value to the calling code. When a return statement is encountered, the function will immediately exit and return the value specified in the statement. If no value is specified, undefined is returned by default.When a function does not have a return statement, it implicitly returns undefined. This means the function returns a value of undefined without explicitly saying return undefined. The return statement can only be used within the body of a function and should be the last executable statement inside the function body because any code after it will not be executed.
const sum = add(38, 42);
console.log(sum);

//Arrow Function
const square1 = (number) => {
  return number * number;
};

const result1 = square1(34);
console.log(result1);

// Shorthand of Arrow function if only one line of code is to be executed
// sometimes if you only have one parameter you can remove the paratheses  like const height = meter => console.log(meter) then you can call it
const square2 = (numb) => numb * numb;
const result2 = square2(4);
console.log(result2);

// In JavaScript, a method is simply a function that is a property of an object. When a function is attached to an object as a property, it is known as a method of that object. When the method is called, it is executed in the context of the object it belongs to, which means the function can access and modify the object's properties. Methods can be defined on object literals or dynamically added to objects at runtime. They are an essential feature of object-oriented programming in JavaScript and are used extensively in building applications and manipulating data.

// Hoisting on Functions

// works fine, because regular functions are hoisted
sumValues(10, 20);

function sumValues(a, b) {
  return a + b;
}

// throws error: divideValues is not defined, because arrow functions are not hoisted
divideValues(10, 20);

const divideValues = () => a / b;

// Examples on Functions

// Default Parameter
const calcArea = function (width, height = 1) {
  //if height is not passed then which is assign default value in parameter like height = 1 in new es6 feature
  // height = height === undefined ? 1 : height;      //if height is undefined then assign 1 using ternary operator before new es6 feature
  const area = width * height;
  return area;
};

const area = calcArea(34, 23);
console.log(area);

// variable scope

const fileName = "xyx.pdf"; //global variable
function download() {
  console.log(fileName);
}
download();
console.log(fileName);

// you can use global variable inside a function but a function variable is not accessible outside the function

// ==================================Callback function====================================
function formatText(text) {
  return text.toUpperCase();
}

const txtresult = formatText("hello");
console.log(txtresult);

// another way callback of fuction adding more abilities to the function
function formatText(text, formatMore) {
  // console.log(typeof formatMore);
  return typeof formatMore === "function"
    ? formatMore(text)
    : text.toUpperCase();
}

// if the function has one parameter it will return th text in Uppercase
// const Result = formatText("hero")

const Result = formatText(
  "hero",
  (text) => text.charAt(0).toUpperCase() + text.slice(1)
);

console.log(Result);

// IIFE (Immediately Invoked Function Expression )

(function greeting() {
  console.log("Hello from IIFE");
})();

//This will call the function imediately
// you can also remove the function name that will work as well
