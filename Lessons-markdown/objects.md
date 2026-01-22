# JavaScript Objects: Complete Guide

## Table of Contents

- [JavaScript Objects: Complete Guide](#javascript-objects-complete-guide)
  - [Table of Contents](#table-of-contents)
  - [Introduction to JavaScript Objects](#introduction-to-javascript-objects)
    - [What are Objects?](#what-are-objects)
    - [Object Creation Methods](#object-creation-methods)
    - [Object Properties and Methods](#object-properties-and-methods)
  - [Object Creation and Manipulation](#object-creation-and-manipulation)
    - [Object.assign()](#objectassign)
    - [Object.create()](#objectcreate)
    - [object.constructor](#objectconstructor)
  - [Property Definition and Modification](#property-definition-and-modification)
    - [Object.defineProperty()](#objectdefineproperty)
    - [Object.defineProperties()](#objectdefineproperties)
  - [Object Introspection](#object-introspection)
    - [Object.entries()](#objectentries)
    - [Object.keys()](#objectkeys)
    - [Object.values()](#objectvalues)
    - [Object.fromEntries()](#objectfromentries)
  - [Property Descriptors and Metadata](#property-descriptors-and-metadata)
    - [Object.getOwnPropertyDescriptor()](#objectgetownpropertydescriptor)
    - [Object.getOwnPropertyDescriptors()](#objectgetownpropertydescriptors)
    - [Object.getOwnPropertyNames()](#objectgetownpropertynames)
    - [Object.getOwnPropertySymbols()](#objectgetownpropertysymbols)
  - [Object State Control](#object-state-control)
    - [Object.freeze()](#objectfreeze)
    - [Object.seal()](#objectseal)
    - [Object.preventExtensions()](#objectpreventextensions)
    - [Object.isFrozen()](#objectisfrozen)
    - [Object.isSealed()](#objectissealed)
    - [Object.isExtensible()](#objectisextensible)
  - [Prototype Chain Management](#prototype-chain-management)
    - [Object.getPrototypeOf()](#objectgetprototypeof)
    - [Object.setPrototypeOf()](#objectsetprototypeof)
    - [Object.isPrototypeOf()](#objectisprototypeof)
    - [Object.proto](#objectproto)
  - [Property Testing and Comparison](#property-testing-and-comparison)
    - [Object.hasOwn()](#objecthasown)
    - [Object.hasOwnProperty()](#objecthasownproperty)
    - [Object.propertyIsEnumerable()](#objectpropertyisenumerable)
    - [Object.is()](#objectis)
  - [Object Grouping and Utility Methods](#object-grouping-and-utility-methods)
    - [Object.groupBy()](#objectgroupby)
    - [Object.object](#objectobject)
  - [Object Conversion Methods](#object-conversion-methods)
    - [Object.toString()](#objecttostring)
    - [Object.valueOf()](#objectvalueof)
    - [Object.toLocaleString()](#objecttolocalestring)
  - [Best Practices](#best-practices)
    - [1. Object Creation](#1-object-creation)
    - [2. Property Management](#2-property-management)
    - [3. Object Immutability](#3-object-immutability)
    - [4. Performance Considerations](#4-performance-considerations)
    - [5. Type Safety](#5-type-safety)
  - [Common Use Cases](#common-use-cases)
    - [1. Configuration Objects](#1-configuration-objects)
    - [2. Data Transformation](#2-data-transformation)
    - [3. Object Validation](#3-object-validation)
    - [4. Deep Cloning](#4-deep-cloning)
    - [5. Proxy-like Behavior](#5-proxy-like-behavior)

***

## Introduction to JavaScript Objects

### What are Objects?

Objects in JavaScript are collections of key-value pairs where keys are strings (or Symbols) and values can be any data type. They represent real-world entities and are fundamental building blocks of JavaScript applications.[1]

```javascript
// Basic object creation
const person = {
  name: "John Doe",
  age: 30,
  greet: function() {
    console.log(`Hello, I'm ${this.name}`);
  }
};
```

### Object Creation Methods

JavaScript provides several ways to create objects:

1. **Object Literals**: `{}`
  Object literals: This is the easiest and most common way to create objects in JavaScript. An object literal is a comma-separated list of name-value pairs wrapped in curly braces.

Example:

```js
let person = {
  name: "John",
  age: 30,
  occupation: "Developer",
};
```

2. **Constructor Functions**: `new Person()`
  Constructor functions: A constructor function is a special type of function that is used to create an object. The `this` keyword is used to define properties and methods for the object.

Example:

```js
function Person(name, age, occupation) {
  this.name = name;
  this.age = age;
  this.occupation = occupation;
}

let person = new Person("John", 30, "Developer");
```

3. **Object.create()**: Creates objects with specific prototypes
  Object.create(): This method creates a new object and sets its prototype to an existing object.

Example:

```js
let person = {
  name: "John",
  age: 30,
  occupation: "Developer",
};

let person1 = Object.create(person);
person1.name = "Lisa";
```

4. **Class Syntax**: ES6 classes
  ES6 Classes: ES6 introduced a new way to create objects using the `class` keyword. This syntax is similar to class-based languages like Java or C++.

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


### Object Properties and Methods

Objects have properties (data) and methods (functions). Properties can be accessed using dot notation or bracket notation.

***

## Object Creation and Manipulation

### Object.assign()

**Purpose**: Copies all enumerable own properties from one or more source objects to a target object.[2][3]

**Syntax**:
```javascript
Object.assign(target, ...sources)
```

**Examples**:

```javascript
// Basic usage
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const returnedTarget = Object.assign(target, source);
console.log(returnedTarget); // { a: 1, b: 4, c: 5 }

// Cloning objects
const original = { name: "Alice", age: 25 };
const clone = Object.assign({}, original);
console.log(clone); // { name: "Alice", age: 25 }

// Merging multiple objects
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const obj3 = { c: 3 };
const merged = Object.assign({}, obj1, obj2, obj3);
console.log(merged); // { a: 1, b: 2, c: 3 }
```

**Use Cases**:[4]
- Object cloning
- Merging configuration objects
- Adding properties to existing objects
- Creating default options

**Best Practices**:
- Use empty object `{}` as target to avoid modifying source objects
- Later source properties override earlier ones
- Only copies enumerable properties

### Object.create()

**Purpose**: Creates a new object with the specified prototype object and properties.[5][6]

**Syntax**:
```javascript
Object.create(proto, propertiesObject)
```

**Examples**:

```javascript
// Basic prototype inheritance
const Animal = {
  isAlive: true,
  makeSound() {
    console.log("Some generic sound");
  }
};

const dog = Object.create(Animal);
dog.breed = "Labrador";
dog.makeSound = function() {
  console.log("Woof!");
};

console.log(dog.isAlive); // true (inherited)
dog.makeSound(); // "Woof!"

// Creating object with property descriptors
const person = Object.create(Animal, {
  name: {
    value: "John",
    writable: true,
    enumerable: true,
    configurable: true
  },
  age: {
    value: 30,
    writable: false
  }
});
```

**Use Cases**:
- Implementing inheritance without constructor functions
- Creating objects with specific prototype chains
- Object composition patterns

### object.constructor

**Purpose**: References the constructor function that created the instance.[7][1]

**Examples**:

```javascript
// Constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const john = new Person("John", 30);
console.log(john.constructor === Person); // true
console.log(john.constructor.name); // "Person"

// Built-in constructors
const arr = [1, 2, 3];
console.log(arr.constructor === Array); // true

const obj = {};
console.log(obj.constructor === Object); // true
```

**Use Cases**:
- Type checking
- Creating new instances of the same type
- Debugging and introspection

***

## Property Definition and Modification

### Object.defineProperty()

**Purpose**: Adds or modifies a single property on an object with precise control over property attributes.[8][9]

**Syntax**:
```javascript
Object.defineProperty(obj, prop, descriptor)
```

**Property Descriptors**:
- **value**: The property value
- **writable**: Whether the property can be changed
- **enumerable**: Whether the property shows up in loops
- **configurable**: Whether the property can be deleted or modified
- **get**: Getter function
- **set**: Setter function

**Examples**:

```javascript
// Basic property definition
const obj = {};
Object.defineProperty(obj, 'name', {
  value: 'John',
  writable: true,
  enumerable: true,
  configurable: true
});

// Read-only property
Object.defineProperty(obj, 'id', {
  value: 123,
  writable: false
});

// Getter and setter
Object.defineProperty(obj, 'fullName', {
  get() {
    return `${this.firstName} ${this.lastName}`;
  },
  set(value) {
    [this.firstName, this.lastName] = value.split(' ');
  },
  enumerable: true,
  configurable: true
});

obj.firstName = 'Jane';
obj.lastName = 'Doe';
console.log(obj.fullName); // "Jane Doe"
obj.fullName = 'Bob Smith';
console.log(obj.firstName); // "Bob"
```

**Use Cases**:
- Creating immutable properties
- Implementing getters and setters
- Creating non-enumerable properties
- Data validation through setters

### Object.defineProperties()

**Purpose**: Adds or modifies multiple properties on an object.[10][11]

**Syntax**:
```javascript
Object.defineProperties(obj, props)
```

**Examples**:

```javascript
const obj = {};
Object.defineProperties(obj, {
  property1: {
    value: true,
    writable: true
  },
  property2: {
    value: 'Hello',
    writable: false
  },
  property3: {
    get() {
      return this.property1 && this.property2;
    },
    set(value) {
      this.property1 = !!value;
    },
    enumerable: true,
    configurable: true
  }
});
```

**Use Cases**:
- Bulk property definition
- Setting up object schemas
- Creating complex object structures

***

## Object Introspection

### Object.entries()

**Purpose**: Returns an array of key-value pairs from an object's enumerable properties.[12][13]

**Syntax**:
```javascript
Object.entries(obj)
```

**Examples**:

```javascript
const person = {
  name: 'Alice',
  age: 30,
  city: 'New York'
};

const entries = Object.entries(person);
console.log(entries);
// [['name', 'Alice'], ['age', 30], ['city', 'New York']]

// Using with for...of loop
for (const [key, value] of Object.entries(person)) {
  console.log(`${key}: ${value}`);
}

// Converting to Map
const map = new Map(Object.entries(person));
console.log(map.get('name')); // 'Alice'
```

**Use Cases**:
- Object iteration
- Converting objects to arrays
- Data transformation
- Creating Maps from objects

### Object.keys()

**Purpose**: Returns an array of object's own enumerable property names.

**Examples**:

```javascript
const obj = { a: 1, b: 2, c: 3 };
console.log(Object.keys(obj)); // ['a', 'b', 'c']

// Checking if object has properties
if (Object.keys(obj).length > 0) {
  console.log('Object has properties');
}
```

### Object.values()

**Purpose**: Returns an array of object's own enumerable property values.

**Examples**:

```javascript
const obj = { a: 1, b: 2, c: 3 };
console.log(Object.values(obj)); // [1, 2, 3]

// Finding maximum value
const maxValue = Math.max(...Object.values(obj));
console.log(maxValue); // 3
```

### Object.fromEntries()

**Purpose**: Creates an object from an iterable of key-value pairs.[14]

**Syntax**:
```javascript
Object.fromEntries(iterable)
```

**Examples**:

```javascript
// From array of pairs
const entries = [['name', 'John'], ['age', 30]];
const obj = Object.fromEntries(entries);
console.log(obj); // { name: 'John', age: 30 }

// From Map
const map = new Map([['a', 1], ['b', 2]]);
const objFromMap = Object.fromEntries(map);
console.log(objFromMap); // { a: 1, b: 2 }

// Transforming objects
const original = { a: 1, b: 2, c: 3 };
const doubled = Object.fromEntries(
  Object.entries(original).map(([key, value]) => [key, value * 2])
);
console.log(doubled); // { a: 2, b: 4, c: 6 }
```

**Use Cases**:
- Converting Maps to objects
- Data transformation
- Filtering object properties
- Reversing Object.entries() operations

***

## Property Descriptors and Metadata

### Object.getOwnPropertyDescriptor()

**Purpose**: Returns a property descriptor for an own property of an object.

**Examples**:

```javascript
const obj = { name: 'John' };
Object.defineProperty(obj, 'age', {
  value: 30,
  writable: false,
  enumerable: true,
  configurable: false
});

const nameDescriptor = Object.getOwnPropertyDescriptor(obj, 'name');
console.log(nameDescriptor);
// { value: 'John', writable: true, enumerable: true, configurable: true }

const ageDescriptor = Object.getOwnPropertyDescriptor(obj, 'age');
console.log(ageDescriptor);
// { value: 30, writable: false, enumerable: true, configurable: false }
```

### Object.getOwnPropertyDescriptors()

**Purpose**: Returns all property descriptors for an object's own properties.

**Examples**:

```javascript
const obj = {
  name: 'John',
  age: 30
};

const descriptors = Object.getOwnPropertyDescriptors(obj);
console.log(descriptors);
// {
//   name: { value: 'John', writable: true, enumerable: true, configurable: true },
//   age: { value: 30, writable: true, enumerable: true, configurable: true }
// }

// Cloning with descriptors
const clone = Object.create(
  Object.getPrototypeOf(obj),
  Object.getOwnPropertyDescriptors(obj)
);
```

### Object.getOwnPropertyNames()

**Purpose**: Returns an array of all own property names (including non-enumerable).

**Examples**:

```javascript
const obj = { a: 1, b: 2 };
Object.defineProperty(obj, 'hidden', {
  value: 'secret',
  enumerable: false
});

console.log(Object.keys(obj)); // ['a', 'b']
console.log(Object.getOwnPropertyNames(obj)); // ['a', 'b', 'hidden']
```

### Object.getOwnPropertySymbols()

**Purpose**: Returns an array of all symbol properties found on an object.

**Examples**:

```javascript
const sym1 = Symbol('symbol1');
const sym2 = Symbol('symbol2');

const obj = {
  regular: 'property',
  [sym1]: 'value1',
  [sym2]: 'value2'
};

console.log(Object.getOwnPropertySymbols(obj)); // [Symbol(symbol1), Symbol(symbol2)]
console.log(Object.keys(obj)); // ['regular']
```

***

## Object State Control

### Object.freeze()

**Purpose**: Freezes an object, making it immutable.[15]

**Examples**:

```javascript
const obj = { name: 'John', age: 30 };
Object.freeze(obj);

// These operations will fail silently (or throw in strict mode)
obj.name = 'Jane'; // No effect
obj.city = 'Boston'; // No effect
delete obj.age; // No effect

console.log(obj); // { name: 'John', age: 30 }

// Checking if frozen
console.log(Object.isFrozen(obj)); // true
```

**Deep Freeze Example**:

```javascript
function deepFreeze(obj) {
  Object.getOwnPropertyNames(obj).forEach(prop => {
    if (obj[prop] !== null && typeof obj[prop] === 'object') {
      deepFreeze(obj[prop]);
    }
  });
  return Object.freeze(obj);
}

const nested = { user: { name: 'John', details: { age: 30 } } };
deepFreeze(nested);
```

### Object.seal()

**Purpose**: Seals an object, preventing addition/removal of properties but allowing modification of existing ones.

**Examples**:

```javascript
const obj = { name: 'John', age: 30 };
Object.seal(obj);

obj.name = 'Jane'; // Works
obj.age = 31; // Works
obj.city = 'Boston'; // Fails
delete obj.age; // Fails

console.log(obj); // { name: 'Jane', age: 31 }
console.log(Object.isSealed(obj)); // true
```

### Object.preventExtensions()

**Purpose**: Prevents addition of new properties to an object.

**Examples**:

```javascript
const obj = { name: 'John' };
Object.preventExtensions(obj);

obj.name = 'Jane'; // Works
obj.age = 30; // Fails
delete obj.name; // Works

console.log(Object.isExtensible(obj)); // false
```

### Object.isFrozen()

**Purpose**: Checks if an object is frozen.

### Object.isSealed()

**Purpose**: Checks if an object is sealed.

### Object.isExtensible()

**Purpose**: Checks if an object is extensible.

***

## Prototype Chain Management

### Object.getPrototypeOf()

**Purpose**: Returns the prototype of an object.

**Examples**:

```javascript
const arr = [];
console.log(Object.getPrototypeOf(arr) === Array.prototype); // true

function Person(name) {
  this.name = name;
}
const john = new Person('John');
console.log(Object.getPrototypeOf(john) === Person.prototype); // true
```

### Object.setPrototypeOf()

**Purpose**: Sets the prototype of an object.

**Examples**:

```javascript
const animal = { type: 'animal' };
const dog = { breed: 'labrador' };

Object.setPrototypeOf(dog, animal);
console.log(dog.type); // 'animal' (inherited)
```

**Warning**: Changing prototypes is slow and can affect performance.

### Object.isPrototypeOf()

**Purpose**: Checks if an object exists in the prototype chain of another object.

**Examples**:

```javascript
function Animal() {}
function Dog() {}
Dog.prototype = Object.create(Animal.prototype);

const myDog = new Dog();
console.log(Animal.prototype.isPrototypeOf(myDog)); // true
console.log(Dog.prototype.isPrototypeOf(myDog)); // true
```

### Object.proto

**Purpose**: Deprecated way to access/set an object's prototype. Use `Object.getPrototypeOf()` and `Object.setPrototypeOf()` instead.

***

## Property Testing and Comparison

### Object.hasOwn()

**Purpose**: Modern replacement for `hasOwnProperty()`, returns true if object has the specified property as its own.

**Examples**:

```javascript
const obj = { name: 'John' };
console.log(Object.hasOwn(obj, 'name')); // true
console.log(Object.hasOwn(obj, 'toString')); // false (inherited)

// Safer than hasOwnProperty
const objWithoutPrototype = Object.create(null);
objWithoutPrototype.name = 'John';
// objWithoutPrototype.hasOwnProperty would throw an error
console.log(Object.hasOwn(objWithoutPrototype, 'name')); // true
```

### Object.hasOwnProperty()

**Purpose**: Legacy method to check if object has own property (not inherited).

**Examples**:

```javascript
const obj = { name: 'John' };
console.log(obj.hasOwnProperty('name')); // true
console.log(obj.hasOwnProperty('toString')); // false

// Problem with objects without prototype
const obj2 = Object.create(null);
obj2.name = 'Jane';
// obj2.hasOwnProperty('name'); // TypeError: obj2.hasOwnProperty is not a function
```

### Object.propertyIsEnumerable()

**Purpose**: Checks if a property is enumerable.

**Examples**:

```javascript
const obj = { name: 'John' };
Object.defineProperty(obj, 'age', {
  value: 30,
  enumerable: false
});

console.log(obj.propertyIsEnumerable('name')); // true
console.log(obj.propertyIsEnumerable('age')); // false
```

### Object.is()

**Purpose**: Compares two values for strict equality, handling special cases better than `===`.

**Examples**:

```javascript
// Similar to ===
console.log(Object.is(1, 1)); // true
console.log(Object.is('hello', 'hello')); // true
console.log(Object.is(1, '1')); // false

// Special cases where Object.is differs from ===
console.log(NaN === NaN); // false
console.log(Object.is(NaN, NaN)); // true

console.log(-0 === +0); // true
console.log(Object.is(-0, +0)); // false
console.log(Object.is(-0, -0)); // true
console.log(Object.is(+0, +0)); // true
```

***

## Object Grouping and Utility Methods

### Object.groupBy()

**Purpose**: Groups elements of an iterable according to string values returned by a callback function.

**Examples**:

```javascript
const people = [
  { name: 'John', age: 25, department: 'IT' },
  { name: 'Jane', age: 30, department: 'HR' },
  { name: 'Bob', age: 28, department: 'IT' },
  { name: 'Alice', age: 32, department: 'Finance' }
];

// Group by department
const byDepartment = Object.groupBy(people, person => person.department);
console.log(byDepartment);
// {
//   IT: [{ name: 'John', ... }, { name: 'Bob', ... }],
//   HR: [{ name: 'Jane', ... }],
//   Finance: [{ name: 'Alice', ... }]
// }

// Group by age range
const byAgeGroup = Object.groupBy(people, person => {
  return person.age < 30 ? 'young' : 'mature';
});
```

### Object.object

**Purpose**: This appears to be a reference to the Object constructor itself.

***

## Object Conversion Methods

### Object.toString()

**Purpose**: Returns a string representation of the object.

**Examples**:

```javascript
const obj = { name: 'John', age: 30 };
console.log(obj.toString()); // "[object Object]"

// Custom toString
obj.toString = function() {
  return `Person: ${this.name}, Age: ${this.age}`;
};
console.log(obj.toString()); // "Person: John, Age: 30"

// Array toString
const arr = [1, 2, 3];
console.log(arr.toString()); // "1,2,3"
```

### Object.valueOf()

**Purpose**: Returns the primitive value of an object.

**Examples**:

```javascript
const obj = { value: 42 };
console.log(obj.valueOf()); // { value: 42 } (returns itself for objects)

// Custom valueOf
obj.valueOf = function() {
  return this.value;
};
console.log(+obj); // 42 (numeric conversion uses valueOf)

// Date valueOf
const date = new Date();
console.log(date.valueOf()); // timestamp number
```

### Object.toLocaleString()

**Purpose**: Returns a localized string representation of the object.

**Examples**:

```javascript
const date = new Date();
console.log(date.toLocaleString()); // "12/1/2025, 11:06:00 PM"
console.log(date.toLocaleString('de-DE')); // German format

const number = 1234.5;
console.log(number.toLocaleString()); // "1,234.5"
console.log(number.toLocaleString('de-DE')); // "1.234,5"

// Custom toLocaleString
const obj = {
  name: 'Product',
  price: 99.99,
  toLocaleString(locale) {
    return `${this.name}: ${this.price.toLocaleString(locale)} USD`;
  }
};
```

***

## Best Practices

### 1. Object Creation
- Use object literals `{}` for simple objects
- Use `Object.create()` for inheritance patterns
- Use constructors or classes for creating multiple similar objects

### 2. Property Management
- Use `Object.hasOwn()` instead of `hasOwnProperty()`
- Prefer `Object.defineProperty()` for properties with specific attributes
- Use getters and setters for computed properties or validation

### 3. Object Immutability
- Use `Object.freeze()` for immutable objects
- Use `Object.seal()` when you need to modify existing properties but prevent structure changes
- Implement deep freezing for nested objects

### 4. Performance Considerations
- Avoid `Object.setPrototypeOf()` in performance-critical code
- Cache results of `Object.keys()`, `Object.values()`, `Object.entries()` for large objects
- Use `Map` for frequently changing collections instead of plain objects

### 5. Type Safety
- Use `Object.is()` for precise equality comparisons
- Validate object structure before operations
- Use TypeScript for better object type safety

***

## Common Use Cases

### 1. Configuration Objects
```javascript
const defaultConfig = {
  theme: 'light',
  language: 'en',
  notifications: true
};

const userConfig = {
  theme: 'dark',
  language: 'es'
};

const finalConfig = Object.assign({}, defaultConfig, userConfig);
```

### 2. Data Transformation
```javascript
// Transform array to object
const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' }
];

const userMap = Object.fromEntries(
  users.map(user => [user.id, user])
);

// Transform object properties
const transformed = Object.fromEntries(
  Object.entries(originalObject).map(([key, value]) => [
    key.toUpperCase(),
    typeof value === 'string' ? value.toLowerCase() : value
  ])
);
```

### 3. Object Validation
```javascript
function validateObject(obj, requiredKeys) {
  const objectKeys = Object.keys(obj);
  return requiredKeys.every(key => Object.hasOwn(obj, key));
}

const user = { name: 'John', email: 'john@example.com' };
const isValid = validateObject(user, ['name', 'email']); // true
```

### 4. Deep Cloning
```javascript
function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') return obj;
  
  const clone = Object.create(Object.getPrototypeOf(obj));
  const descriptors = Object.getOwnPropertyDescriptors(obj);
  
  for (let key in descriptors) {
    if (descriptors[key].value && typeof descriptors[key].value === 'object') {
      descriptors[key].value = deepClone(descriptors[key].value);
    }
  }
  
  return Object.defineProperties(clone, descriptors);
}
```

### 5. Proxy-like Behavior
```javascript
function createObservableObject(target, onChange) {
  return Object.defineProperties({}, 
    Object.fromEntries(
      Object.keys(target).map(key => [
        key,
        {
          get() { return target[key]; },
          set(value) {
            const oldValue = target[key];
            target[key] = value;
            onChange(key, value, oldValue);
          },
          enumerable: true,
          configurable: true
        }
      ])
    )
  );
}
```
