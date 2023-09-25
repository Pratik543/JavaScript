# 1. Variables and DataTypes in JS

    In JavaScript, a variable is a named storage location that can hold a value, whether it is a number, String, or any other data type.

In JavaScript, `var`, `let`, and `const` are used for variable declaration.

## The main difference between var, let, and const

- The `var` keyword is used to declare variables that are function-scoped. When declared inside a function, var variables are accessible only inside that function, and not outside it.

- The `let` keyword is used to declare variables that are block-scoped. When declared inside a block, the variable is accessible only within that block and its child blocks.

- The `const` keyword is used to declare variables that are block-scoped and cannot be reassigned after their initialization.

#### VariableName aka Variable Identifiers <-----

> Note : It is common for developers to use uppercase variable identifiers for immutable values and lowercase or camelCase for mutable values

---

### Escape Sequences in JavaScript

Escape sequences in JavaScript are special characters that are used to represent characters that are hard or impossible to type in JavaScript strings. They start with a backslash `\` followed by a specific character. Here are some commonly used escape sequences in JavaScript:

| **Escape Sequence** | **Character Represented** |
| ------------------- | ------------------------- |
| `\'`                | single quote              |
| `\"`                | double quote              |
| `\\`                | backslash                 |
| `\n`                | newline                   |
| `\t`                | tab                       |
| `\r`                | carriage return           |
| `\b`                | backspace                 |
| `\f`                | form feed                 |

In JavaScript, escape sequences are typically used inside string literals to represent characters that cannot be typed directly. For example, to use a single quote inside a string that is enclosed in single quotes, you can use the escape sequence `\'`:

```js
let myString = "I'm a string with a single quote inside!";
```

- Similarly, to use a double quote inside a string that is enclosed in double quotes, you can use the escape sequence `\"`:

```js
let myString = 'I am a string with a "double quote" inside!';
```

- The escape sequence `\n` is used to insert a new line into a string:

```js
let myString = "Hello\nworld!";

//Here, the string `myString` would output as:

Hello
world!
```

The other escape sequences are used similarly, to represent their corresponding characters.

---

### When to use each of them

- `var` can be considered as a legacy syntax, and should generally be avoided in modern JavaScript code.

- `let` should be used when the value of a variable is expected to change during the execution of the block in which it is defined.

- `const` should be used when the value of a variable is expected to remain the same after its initialization.

It is important to note that `const` does not mean that the value of the variable is immutable. It means that the variable identifier cannot be reassigned after its initialization, but the internal value can be changed, such as in the case of an object being modified.

## Data Types

    Data types refer to the different types or kinds of data that can be stored and manipulated in variables.

### There are several data types in JavaScript, including:

1. **_Primitive data types_** : These are the most basic types of data, and include `number`, `string`, `boolean`, `undefined`, `null`, `BigInt` and `symbol`.
2. **_Object data type_**: This data type refers to more complex data structures that can be used to store collections of related data and behavior. Objects in JavaScript can be created using object literals, constructor functions, or classes.
3. **_Special data types_** : These include `NaN` (Not a Number) and `Infinity`.

> Additionally, understanding data types is important for writing efficient and bug-free JavaScript code, as incorrect data types can lead to unexpected results or errors in your code.

| Data Type | Example                                | Meaning                                                              |
| --------- | -------------------------------------- | -------------------------------------------------------------------- |
| Number    | `42`                                   | A numeric value.                                                     |
| String    | `'Hello World!'`                       | A sequence of characters.                                            |
| Boolean   | `true` or `false`                      | A value that is either true or false.                                |
| Undefined | `let a; (a is undefined)`              | A variable that has been declared but has not been assigned a value. |
| Null      | `let b = null;`                        | A variable that has intentionally been assigned a value of null.     |
| Symbol    | `let id = Symbol('foo')`               | A unique identifier.                                                 |
| BigInt    | `9007199254740991n`                    | An integer larger than 2^53-1.                                       |
| Object    | `{ name: 'John', age: 30 }`            | A collection of key-value pairs.                                     |
| Array     | `let nums = [1, 2, 3]`                 | An ordered list of values.                                           |
| Function  | `function add(x, y) { return x + y; }` | A reusable block of code that can also be treated as a value.        |

> _Note that JavaScript is a dynamically typed language, which means that the same variable can hold different data types at different times._

## Objects

    Object is a data type that represents a collection of related data and behaviors. An object can contain properties that represent the state of the object, as well as methods that represent behaviors that the object can perform.

    - One of the main benefits of using objects in JavaScript is that they allow for encapsulation of data and functionality.
    - This means that data and behavior can be grouped together into a single entity, making it easier to manage and modify.
    - Additionally, objects can be used to model real-world entities, making it easier to understand and interact with complex systems.

### Properties

    - Properties are used to describe the object's attributes, such as its size, color, or value. They can be simple values, such as strings or numbers, or they can be more complex, such as arrays or other objects.

```js
let person = {
  name: "John",
  age: 30,
  city: "New York",
  hobbies: ["reading", "traveling", "swimming"],
};

console.log(person.name); // Output: "John"
console.log(person.hobbies[0]); // Output: "reading"

person.age = 31;
console.log(person.age); // Output: 31
```

### Methods

    - Methods, on the other hand, are functions that are associated with an object and can be used to perform specific actions or operations. Methods can accept arguments, modify the properties of an object, or return a value.

```js
let person = {
  name: "John",
  age: 30,
  city: "New York",
  hobbies: ["reading", "traveling", "swimming"],
  sayHello: function () {
    console.log("Hello, my name is " + this.name);
  },
};

person.sayHello(); // Output: "Hello, my name is John"
```

- In general, methods and properties both refer to different aspects of an object in JavaScript. Properties are descriptive attributes that an object has, while methods are functions that are associated with an object and can be used to perform specific actions or operations.

> In summary, the main difference between methods and properties is that properties describe the attributes of an object, while methods are functions that perform specific actions or operations on an object.

---

### There are several ways to create objects in JavaScript, including:

1. Object literals: This is the easiest and most common way to create objects in JavaScript. An object literal is a comma-separated list of name-value pairs wrapped in curly braces.

Example:

```js
let person = {
  name: "John",
  age: 30,
  occupation: "Developer",
};
```

2. Constructor functions: A constructor function is a special type of function that is used to create an object. The `this` keyword is used to define properties and methods for the object.

Example:

```js
function Person(name, age, occupation) {
  this.name = name;
  this.age = age;
  this.occupation = occupation;
}

let person = new Person("John", 30, "Developer");
```

3. Using the Object() constructor: Objects can be created using the Object() constructor. Here's an example:

```js
const person = new Object();
person.name = "John";
person.age = 32;
person.city = "New York";
```

4. ES6 Classes: ES6 introduced a new way to create objects using the `class` keyword. This syntax is similar to class-based languages like Java or C++.

Example:

```js
class Person {
  constructor(name, age, occupation) {
    this.name = name;
    this.age = age;
    this.occupation = occupation;
  }
}

let person = new Person("John", 30, "Developer");
```

These are the most common ways to create objects in JavaScript, and each has its benefits and use cases depending on the situation.

---

# 2. Operators

    Operators are used to perform operations on values or variables.

## Types of operators in JavaScript :

1.  Arithmetic Operators

        Arithmetic operators include addition, subtraction, multiplication, division, and modulus.

2.  Assignment Operators

        Assignment operators are used to assign values to variables.

3.  Comparison Operators

        Comparison operators are used to compare two values.

4.  String Operators

        String operators include concatenation and string length.

5.  Logical Operators

        Logical operators are used to combine multiple conditions.

6.  Bitwise Operators

        Bitwise operators manipulate binary numbers.

7.  Ternary Operators

        Ternary operators are used as a shorthand for conditional statements.

8.  Type Operators

        Type operators include `typeof` and `instanceof` and are used to determine the data type of a value.

Table that explains the different types of operators in JavaScript :

| Operator Type | Description                                                                                                  | Example                             | Operands          |
| ------------- | ------------------------------------------------------------------------------------------------------------ | ----------------------------------- | ----------------- |
| Arithmetic    | Performs basic mathematical operations such as addition, subtraction, multiplication, division, and modulus. | `5 + 3`                             | 5, 3              |
| Assignment    | Assigns values to variables.Addition assignment                                                              | `let x = 5; x += 2; (x is now 7)`   | x, 5              |
| Comparison    | Compares two values and returns a boolean value.                                                             | `5 == '5'`                          | 5, '5'            |
| String        | Concatenates strings or finds the length of a string.                                                        | `"Hello " + "world"`                | "Hello ", "world" |
| Logical       | Combines multiple conditions and returns a boolean value.                                                    | `(a > b) && (a > c)`                | a, b, c           |
| Bitwise       | Manipulates binary values.                                                                                   | `10 & 6`                            | 10, 6             |
| Ternary       | Evaluates a condition and returns one of two values based on the result.                                     | `num > 0 ? "Positive" : "Negative"` | num               |
| Type          | Determines the type of a value.                                                                              | `typeof "Hello"`                    | "Hello"           |

These are the main types of operators in JavaScript that you can use to perform various operations on values, including the specific operands involved in each example.

---

## Relational or Comparison Operator

    Relational operators in JavaScript are used to compare values and return a Boolean value based on the comparison. They are also known as comparison operators. Common relational operators include `<`, `>`, `<=`, `>=`, `==`, `!=`, `===` and `!==`.

- The `==` and `!=` operators test for equality or inequality, respectively, but perform type coercion.
- The `===` and `!==` operators test for equality or inequality, respectively, without performing type coercion.

Table that shows all the relational operators in JavaScript along with examples and results:

| Operator | Meaning                                | Example     | Result  |
| -------- | -------------------------------------- | ----------- | ------- |
| ==       | Equal to                               | `5 == 5`    | `true`  |
| ==       | Equal to (with type conversion)        | `5 == '5'`  | `true`  |
| ===      | Equal to (without type conversion)     | `5 === 5`   | `true`  |
| ===      | Equal to (without type conversion)     | `5 === '5'` | `false` |
| !=       | Not equal to                           | `5 != 4`    | `true`  |
| !=       | Not equal to (with type conversion)    | `5 != '5'`  | `false` |
| !==      | Not equal to (without type conversion) | `5 !== 5`   | `false` |
| !==      | Not equal to (without type conversion) | `5 !== '5'` | `true`  |
| >        | Greater than                           | `5 > 4`     | `true`  |
| <        | Less than                              | `5 < 4`     | `false` |
| >=       | Greater than or equal to               | `5 >= 4`    | `true`  |
| >=       | Greater than or equal to               | `5 >= 5`    | `true`  |
| <=       | Less than or equal to                  | `5 <= 4`    | `false` |
| <=       | Less than or equal to                  | `5 <= 5`    | `true`  |

1. Strict Vs Loose Equality
   - The Good Ones: === !==
   - The Evil Twins: == !=

- in loose equality, javascript interpreter compares the values and doesn't compares datatypes
  ```js
  console.log(40 == 40); //true
  console.log(40 == "40"); //true
  ```
- in strict equality, javascript interpreter compares the values as well as their datatypes returns true if both are same
  ```js
  console.log(40 === 40); //true
  console.log(40 === "40"); //false
  ```

---

## Bitwise Operator

    Bitwise operators perform operations on the binary representation of numbers. They are used to manipulate individual bits within a number. These operators include:

> Bitwise operators and logical operators are both types of operators in JavaScript, but they operate on different types of data.

- Bitwise AND (&): returns a new number with a 1 in each bit position where both operands have a 1.
- Bitwise OR (|): returns a new number with a 1 in each bit position where either operand has a 1.
- Bitwise XOR (^): returns a new number with a 1 in each bit position where only one of the operands has a 1.
- Bitwise NOT (~): inverts the bits of a number, turning 1s into 0s and vice versa.
- Left shift (<<): shifts the bits of a number to the left by the specified number of positions, filling in new 0 bits on the right.
- Signed right shift (>>): shifts the bits of a number to the right by the specified number of positions, filling in new 0 bits on the left and preserving the sign of the original number.
- Unsigned right shift (>>>): similar to the signed right shift, but fills in new 0 bits on the left instead of the sign bit.

---

Here are some examples of bitwise operators in JavaScript:

1. Bitwise AND (`&`): The bitwise AND operator returns a 1 in each bit position for which the corresponding bits of both operands are

   - For example, `(10 & 6)` returns `2`, since the binary representation of 10 is `1010` and the binary representation of 6 is `0110`, and the bitwise AND of those numbers is `0010`.

2. Bitwise OR (`|`): The bitwise OR operator returns a 1 in each bit position for which either of the corresponding bits of either operand is

   - For example, `(10 | 6)` returns `14`, since the binary representation of 10 is `1010` and the binary representation of 6 is `0110`, and the bitwise OR of those numbers is `1110`.

3. Bitwise XOR (`^`): The bitwise XOR operator returns a 1 in each bit position for which the corresponding bits of exactly one of the two operands are

   - For example, `(10 ^ 6)` returns `12`, since the binary representation of 10 is `1010` and the binary representation of 6 is `0110`, and the bitwise XOR of those numbers is `1100`.

4. Bitwise NOT (`~`): The bitwise NOT operator inverts the bits of its operand.

   - For example, `(~10)` returns `-11`, since the binary representation of 10 is `1010`, and the bitwise NOT of that number is `0101` (inverted), which represents -11 in two's complement representation.

5. Left shift (`<<`): The left shift operator shifts the bits of its first operand to the left by the number of positions specified by its second operand.

   - For example, `(10 << 1)` returns `20`, since the binary representation of 10 is `1010`, and shifting that number one position to the left results in `10100` (which is equivalent to decimal 20).

6. Signed right shift (`>>`): The signed right shift operator shifts the bits of its first operand to the right by the number of positions specified by its second operand, filling in the vacant leftmost bits with the sign bit (the leftmost bit) of the original number.
   - For example, `(-10 >> 1)` returns `-5`, since the binary representation of -10 in two's complement notation is `11111111111111111111111111110110`, and shifting that number one

---

Table of bitwise operators in JavaScript:

| Operator | Description          | Example    | Result |
| -------- | -------------------- | ---------- | -----: |
| `&`      | Bitwise AND          | `10 & 6`   |    `2` |
| `\|`     | Bitwise OR           | `10 \| 6`  |   `14` |
| `^`      | Bitwise XOR          | `10 ^ 6`   |   `12` |
| `~`      | Bitwise NOT          | `~10`      |  `-11` |
| `<<`     | Left shift           | `10 << 1`  |   `20` |
| `>>`     | Signed right shift   | `-10 >> 1` |   `-5` |
| `>>>`    | Unsigned right shift | `22 >>> 1` |   `11` |

This table includes columns for the operator symbol, a description of the operation, an example usage, and the resulting value of the operation in decimal format.

---

## Logical Operator

    Logical operators, on the other hand, operate on boolean values (true or false). They are used to combine or invert boolean values to create more complex expressions. These operators include:

- Logical AND (&&): returns true if both operands are true, and false otherwise.
- Logical OR (||): returns true if either operand is true, and false otherwise.
- Logical NOT (!): inverts the value of a boolean expression -- true becomes false, and false becomes true.

Here's a markdown table for logical operators with numerical examples and result column:

| Operator | Meaning     | Example              | Result  |
| -------- | ----------- | -------------------- | ------- |
| `&&`     | Logical AND | `10 > 5 && 5 < 20`   | `true`  |
| `\|\|`   | Logical OR  | `10 > 5 \|\| 5 > 20` | `true`  |
| `!`      | Logical NOT | `!(10 > 5)`          | `false` |

- In the first row, the `&&` operator is **_used to check if both comparisons are true_** (`10` is greater than `5` AND `5` is less than `20`). Since both comparisons are true, the result is `true`.
- In the second row, the `\|\|` operator is **_used to check if at least one of the comparisons is true_** (`10` is greater than `5` OR `5` is greater than `20`). Since the first comparison is true, the result is `true`.
- In the third row, the `!` operator is **_used to flip the boolean value of the comparison_** `10 > 5`. Since `10 > 5` is true, using the `!` operator gives us `false`.

---

Example table for logical operators with true and false examples and operands:

| Operand 1 | Operand 2 | Operator | Result  |
| --------- | --------- | -------- | ------- |
| `true`    | `false`   | `&&`     | `false` |
| `false`   | `true`    | `&&`     | `false` |
| `true`    | `true`    | `&&`     | `true`  |
| `false`   | `false`   | `&&`     | `false` |
| `true`    | `false`   | `\|\|`   | `true`  |
| `false`   | `true`    | `\|\|`   | `true`  |
| `true`    | `true`    | `\|\|`   | `true`  |
| `false`   | `false`   | `\|\|`   | `false` |

---

# 3. Functions

     A block of code that performs a specific task

    Steps
    01 Declaration
    02 Parameters
    03 Body which contains the code
    04 Function Call aka Invokation

#### Good Practices

1. Naming conventions for functions should start as a verb makes the code more readable show , get , calc.<br/>
2. One function...One action.<br/>
3. Function name should be descriptiive.<br/>

   1.Normal Function syntax

```js
function name(params) {
  //statement
  //have access to "this" keyword
}
```

> **Parameter**: A parameter is a variable that is declared in a function or method definition. It represents a value that the function expects to receive when it is called. Parameters are placeholders for the actual values that will be passed as arguments.

> **Argument**: An argument is the actual value that is passed to a function when it is called. It is the concrete value that is assigned to a parameter. Arguments are provided when invoking or calling a function, and they can be literals, variables, or expressions.

> **Summary: In simpler terms, a parameter is like a "slot" or a "placeholder" for a value that a function expects to receive, while an argument is the actual value that is passed to fill that slot or placeholder when calling the function.**

2.Function expression syntax

```js
const newname = function (params) {
  //statement
};
```

> An **expression** is a piece of code that represents a value or a computation. It can be a simple value like a number or a string, or a complex computation that involves variables, operators, and functions. Expressions are used to manipulate data, perform calculations, and make decisions

3.An arrow function syntax

```js
const Newname = (params) => {
  //statement
};
```

### Examples

```js
//Normal Function example

function sayHi(name) {
console.log(`Hello ${name}`);
// return
}
//example2
function square(num) {
// Declaration followed by function name(parameters)
return num \* num; //statements
}

const result = square(50); //function expression
console.log(result);
```

```js
//Function Expression
const add = (a, b) => {
  return a + b;
};

const sum = add(38, 42);
console.log(sum);
```

> In JavaScript, the **return** statement is used within a function to stop the execution of the function and return a value to the calling code. When a return statement is encountered, the function will immediately exit and return the value specified in the statement. If no value is specified, undefined is returned by default.When a function does not have a return statement, it implicitly returns undefined. This means the function returns a value of undefined without explicitly saying return undefined. The return statement can only be used within the body of a function and should be the last executable statement inside the function body because any code after it will not be executed.

```js
//Arrow Function
const square1 = (number) => {
  return number * number;
};

const result1 = square1(34);
console.log(result1);

// Shorthand of Arrow function if only one line of code is to be executed
// sometimes if you only have one parameter you can remove the paratheses like const height = meter => console.log(meter) then you can call it
const square2 = (numb) => numb * numb;
const result2 = square2(4);
console.log(result2); //16
```

> In JavaScript, a **method** is simply a function that is a property of an object. When a function is attached to an object as a property, it is known as a method of that object. When the method is called, it is executed in the context of the object it belongs to, which means the function can access and modify the object's properties. Methods can be defined on object literals or dynamically added to objects at runtime. They are an essential feature of object-oriented programming in JavaScript and are used extensively in building applications and manipulating data.

---

# 4. Constructors in JavaScript

    In JavaScript, a constructor is a special type of function that is used to create and initialize objects. When a constructor is used to create an object, it sets up the object's initial state by assigning values to its properties and calling any necessary setup functions.

Here's an example of a basic constructor in JavaScript:

```javascript
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;

  this.start = function () {
    console.log("Starting the " + this.make + " " + this.model);
  };
}

var myCar = new Car("Toyota", "Corolla", 2023);
myCar.start(); // Output: Starting the Toyota Corolla
```

In this example, the `Car` function is used as a constructor to create an object `myCar` with three properties (`make`, `model`, and `year`) and a method `start`. The `new` keyword is used to instantiate an object from the constructor function. When the `myCar.start()` method is called, it outputs "Starting the Toyota Corolla" to the console.

Constructors can also be defined using the `class` keyword in modern versions of JavaScript. Here's an example:

```javascript
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start() {
    console.log(`Starting the ${this.make} ${this.model}`);
  }
}

let myCar = new Car("Toyota", "Corolla", 2023);
myCar.start(); // Output: Starting the Toyota Corolla
```

#### In this example, the `Car` class is defined with a constructor and a `start` method. The `new` keyword is used to instantiate an object from the `Car` class. When the `myCar.start()` method is called, it outputs "Starting the Toyota Corolla" to the console.

---

### Instantiate

    Instantiate refers to the process of creating a new instance of an object or class that is defined in a program. In other words, instantiation is the act of creating an instance of a particular class or template and allocating the memory for that instance in the program's memory.

For example, when you create an object of a class in Java or C++, you are instantiating that class. Similarly, in JavaScript, when you create a new instance of an object using the `new` keyword, you are instantiating that object.
<br>Instantiation involves allocating memory space for the object and initializing its state variables or attributes. Once an object or instance is instantiated, it can be manipulated and accessed throughout the program.
<br> **_Overall, instantiation is an important concept in programming, as it is the process of creating new objects from class definitions and is used extensively in object-oriented programming._**

> In summary, constructors are an important concept in JavaScript as they allow us to create and initialize objects using functions or classes. Constructors provide a convenient way to set up an object's initial state and perform any necessary setup tasks.

---

# 5.Hoisting

    Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their containing scope during the compilation phase, before the code is executed. This means that you can use variables and call functions before they are declared in your code.

Hoisting applies to both variable and function declarations but works in slightly different ways for each:

1. Variable Hoisting: When variables are hoisted, their declarations are moved to the top of their containing scope. However, only the declarations are hoisted, not the initializations. This means that the variable can be accessed and assigned a value before it is formally declared in the code. However, any value assigned to the variable will not be accessible until after the variable declaration.

Example:

```js
   console.log(name); // Output: undefined
   var name = "Alice";
   console.log(name); // Output: Alice

In this example, the name variable is hoisted to the top of its scope. The first console.log statement outputs undefined because the variable is declared but not yet assigned a value. The second console.log statement outputs "Alice" after the value is assigned.
```

2. Function Hoisting: Function declarations are fully hoisted, which means that both the declaration and the entire function body are moved to the top of their containing scope. This allows you to call a function before it is declared in your code.

Example:

```js
   greet(); // Output: Hello!

   function greet() {
     console.log("Hello!");
   }

In this example, the greet function is hoisted to the top of its scope, so it can be called before its actual declaration in the code.

//It's important to note that hoisting only moves the declarations to the top of the scope, not the initializations or assignments. It is considered a best practice to declare variables at the top of their scope to avoid any confusion or unexpected behavior caused by hoisting. Similarly, it's recommended to define functions before using them to improve code readability and maintainability.
```

Hoisting works differently for classes compared to variable and function declarations. In JavaScript, class declarations are not hoisted like function declarations.

When it comes to classes:

1. Class Declarations: Class declarations are not hoisted. They must be declared before they are used in the code. If you try to use a class before its declaration, you will get a ReferenceError.

Example:

```js
   const person = new BankAccount(); // ReferenceError: BankAccount is not defined

   class BankAccount {
     // ...
   }

In this example, trying to instantiate the BankAccount class before its declaration will result in a ReferenceError because the class declaration is not hoisted.
```

2. Class Expressions: Class expressions, on the other hand, are not hoisted either. They follow the same rules as variable declarations.

Example:

```js
   const person = new BankAccount(); // TypeError: Person is not a constructor

   const BankAccount = class {
     // ...
   };

In this example, trying to instantiate the BankAccount class expression before its declaration will result in a TypeError because the variable BankAccount is declared but not yet assigned a value.
```

> It's important to note that while class declarations and class expressions are not hoisted, you can still use them after their declaration in the code, as long as they are declared before they are used.

### Like this It's a Class function

```js
class BankAccout {
  constructor(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }
  withdraw(amount) {
    this.balance -= amount;
  }
}

const pratik = new BankAccout("Pratik", 4_000);
const shreya = new BankAccout("Shreya", 0);

shreya.deposit(5000);

console.log(pratik);
console.log(shreya);
```

# 6. Class Function

    In JavaScript, a class is a blueprint or template for creating objects with similar properties and behaviors. It provides a way to define a reusable structure that can be instantiated into multiple objects.

[instantiate](#-instantiate)

Here are the key features and concepts related to classes in JavaScript:

1. Class Declaration: Classes can be declared using the class keyword, followed by the name of the class. The class declaration can include a constructor method and other methods and properties.

Example:

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}
```

2. Constructor Method: The constructor method is a special method within a class that is executed when a new object is created from the class. It is used to initialize the object's properties. The constructor method is defined using the constructor keyword. [Example](#4-constructors-in-javascript)

3. Instance Methods: Methods defined within the class are added to the prototype of the objects created from the class. These methods are accessible on each instance of the class. Instance methods are defined without the static keyword.

4. Static Methods: Static methods belong to the class itself, rather than its instances. They are defined using the static keyword. Static methods are called on the class itself, rather than on instances of the class.

Example:

```js
class MathUtils {
  static add(x, y) {
    return x + y;
  }
}

console.log(MathUtils.add(3, 5)); // Output: 8
```

5. Inheritance: Classes can inherit properties and methods from other classes using the extends keyword. This allows for creating a hierarchical structure of classes. The child class can access the properties and methods of the parent class using the super keyword.

Example:

```js
class Student extends Person {
constructor(name, age, grade) {
super(name, age);
this.grade = grade;
}
     sayHello() {
       super.sayHello();
       console.log(`I am in grade ${this.grade}.`);
     }
}

In this example, the Student class extends the Person class, inheriting its properties and methods. The super keyword is used to call the parent class constructor and method.
```

6. Instance Creation: Objects are created from a class using the new keyword followed by the class name and any arguments required by the constructor.

Example:

```js
const person = new Person("Alice", 25);
person.sayHello(); // Output: Hello, my name is Alice and I am 25 years old.

In this example, a new Person object person is created with the name "Alice" and age 25. The sayHello method can be called on the person object.
```

> Classes provide a way to define and organize related data and behavior within your JavaScript code. They promote code reusability and maintainability by encapsulating data and methods into reusable objects.
