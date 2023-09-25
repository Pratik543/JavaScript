## Currying in JavaScript

    Currying is a functional programming concept that involves transforming a function that takes multiple arguments into a series of functions, each taking a single argument. This allows for more flexible and modular code, as well as the creation of partially applied functions. Currying plays well with functional programming concepts like function composition. It's particularly useful when you need to generate variations of a function with different sets of arguments or when working with libraries that expect functions with fewer arguments.

In JavaScript, currying is achieved by using nested functions. Let's dive into the concept with some detailed code examples:

### 1. Basic Currying

In this example, we'll start with a simple function that takes two arguments and then convert it into a curried version.

```javascript
// Non-curried function
function add(a, b) {
  return a + b;
}

// Curried version
function curriedAdd(a) {
  return function (b) {
    return a + b;
  };
}

const addFive = curriedAdd(5);
console.log(addFive(3)); // Outputs 8
```

### 2. Currying with Arrow Functions

You can also use arrow functions to achieve currying in a more concise manner.

```javascript
const curriedAdd = (a) => (b) => a + b;
const addFive = curriedAdd(5);
console.log(addFive(3)); // Outputs: 8
```

### 3. Currying for Reusability

Currying can be especially useful for creating reusable functions with fixed parameters.

```javascript
function discountPercentage(discountRate) {
  return function (price) {
    return price * (1 - discountRate);
  };
}

const apply10PercentDiscount = discountPercentage(0.1);
const apply20PercentDiscount = discountPercentage(0.2);
console.log(apply10PercentDiscount(150)); // Outputs: 135
console.log(apply20PercentDiscount(150)); // Outputs: 120
```

### 4. Partial Application

Partial application is a natural consequence of currying. It's when you fix some of the function's arguments and create a new function with the remaining arguments.

```javascript
function multiply(a, b, c) {
  return a * b * c;
}

// Partial application using currying
function curriedMultiply(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
}

const multiplyByTwo = curriedMultiply(2);
const multiplyByTwoAndThree = multiplyByTwo(3);
console.log(multiplyByTwoAndThree(5)); // Outputs: 30
```

> Currying can help you write more modular and reusable code, and it plays well with functional programming concepts like function composition. It's particularly useful when you need to generate variations of a function with different sets of arguments or when working with libraries that expect functions with fewer arguments.
