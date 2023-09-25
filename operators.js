/*
Operators in JavaScript, with each serving a specific purpose. Here are some examples for each type:

1. Arithmetic Operators:
   - Addition (+) : `3 + 4 // 7`
   - Subtraction (-) : `8 - 3 // 5`
   - Multiplication (*) : `5 * 6 // 30`
   - Division (/) : `12 / 3 // 4`
   - Modulus (%) : `10 % 3 // 1`

2. Comparison Operators:
   - Equal to (==) : `3 == 3 // true`
   - Not equal to (!=) : `3 != 4 // true`
   - Greater than (>) : `5 > 2 // true`
   - Less than (<) : `5 < 2 // false`
   - Greater than or equal to (>=) : `5 >= 5 // true`
   - Less than or equal to (<=) : `5 <= 5 // true`

3. Logical Operators:
   - And (&&) : `true && false // false`
   - Or (||) : `true || false // true`
   - Not (!) : `!(3 == 4) // true`

4. Assignment Operators:
    - Assignment (=) : `var x = 5;`
   - Addition Assignment (+=) : `x += 3; // x is now 8`
   - Subtraction Assignment (-=) : `x -= 2; // x is now 6`
   - Multiplication Assignment (*=) : `x *= 2; // x is now 10`
   - Division Assignment (/=) : `x /= 5; // x is now 2`

5. String Operators:
   - Concatenation (+) : `'Hello ' + 'world!' // 'Hello world!'`

6. Bitwise Operators:
   - Bitwise AND (&) : `3 & 5 // 1`
   - Bitwise OR (|) : `3 | 5 // 7`
   - Bitwise NOT (~) : `~5 // -6`
   - Bitwise XOR (^) : `3 ^ 5 // 6`
   - Left shift (<<) : `5 << 1 // 10`
   - Right shift (>>) : `5 >> 1 // 2`

7. Ternary Operators:
    - Syntax : `(condition) ?

*/

// Comparison Operators => shows true/false
const a = 50;
const b = 100;

// Greater than
console.log(a < b);
// Greater than or equal to
console.log(a <= b);
// Less than
console.log(a > b);
// Less than or equal to
console.log(a >= b);

// Is equal to
console.log(a == b);
// Not equal to
console.log(a != b);

// Strict Equality
console.log(a === b);
// Strict Inequality
console.log(a !== b);

// Equality Operators
// Strict Vs Loose Equality

//in loose equality, javascript interpreter compares the values and doesn't compares datatypes
console.log(40 == "40");
// in strict equality, javascript interpreter compares the values as well as their datatypes returns true if both are same
console.log(40 === "40");
console.log(40 === 40);

// The Good Ones: === !==
// The Evil Twins: == !=

console.log("" == "0");
console.log(0 == "");
console.log(0 == "0");

console.log(false == "false");
console.log(false == "0");
// Thus The Evil Twins brings a lot of bugs in our code and produces a lot of errors

// Here's why it's better to use ===(The Good Ones)

console.log(true === 1);
console.log("5" === 5);
// in this 5 is string and should be treated like that

// whereas in loose equality it checks the value 5 which both are different datatypes this will break the application thus not recommended
console.log(true == 1);
console.log("5" == 5);

// Logical Operators
// AND && => ALL OPERANDS ARE TRUE =>  TRUE
console.log(true && true && true);
// OR || => AT LEAST ONE OPERAND IS TRUE =>TRUE
console.log(true || true);
console.log(false || false);
// NOT !
console.log(!true);
console.log(!false);

// Ternary Operators
// The ternary operator checks whether the condition specified is true, if it's true then return the first expression else return the second expression.
let user = { age: 22 };
user["status"] = user.age >= 18 ? "adult" : "minor";
console.log(user.status);
// user.status is 'adult'
