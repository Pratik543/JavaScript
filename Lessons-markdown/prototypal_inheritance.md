# Prototype and Prototypal Inheritance

    Prototype in JavaScript is an object that is associated with every function and object by default. It is used to provide additional properties to all objects created from a constructor function and allows objects to inherit features from one another via prototype chains.

    Prototypal inheritance is a way of creating new objects based on existing objects, where the new objects inherit the properties and methods of the existing objects. It allows for efficient code reuse and is a core feature of JavaScript. The prototypal inheritance model is based on the prototype chain, where objects can inherit properties and methods from their parent objects via their prototypes.

> Prototype is used to add new properties and methods to an object that will shared to all objects of the same class/constructor

> The prototype is used in JavaScript to provide inheritance and shared behavior between objects. It allows objects to inherit properties and methods from a common prototype object.

### Example by creating another object through prototypal inheritance:

```js
// First object
const Animal = function (name) {
  this.name = name;
};

Animal.prototype.eat = function () {
  console.log(`${this.name} is eating.`);
};

// Second object
const Cat = function (name) {
  Animal.call(this, name);
};

Cat.prototype = Object.create(Animal.prototype);

Cat.prototype.meow = function () {
  console.log(`${this.name} meows.`);
};

// Create a new instance of the Cat object
const myCat = new Cat("Fluffy");

myCat.eat(); // Logs "Fluffy is eating."
myCat.meow(); // Logs "Fluffy meows."
//----------------------------------------------------------

//  Code Explanation
In this example, we have two constructor functions: `Animal` and `Cat`.

The `Animal` function takes a `name` parameter and assigns it to the `name` property of the object using the `this` keyword. We then add an `eat` method to the `Animal` prototype.

The `Cat` function is defined as a constructor function that takes a `name` parameter, and inherits the `name` property from the parent `Animal` class using the `call` method. We then create a new object `Cat` prototype using `Object.create` method and inheriting from the `Animal` prototype. We then add a new method `meow` to the `Cat` prototype.

By doing this, we have created a new object `Cat` prototype that inherits properties from `Animal` prototype. This is an example of prototypal inheritance in JavaScript, where an object inherits properties and methods from its parent object.

Finally, we create a new instance of `Cat` called `myCat` and call both `eat` and `meow` methods on it. Since `Cat` prototype inherits from `Animal` prototype, we are able to call the `eat` method on the `myCat` object. We are also able to call the `meow` method which was specifically added to the `Cat` prototype.
```

### Here is an example of prototype and prototypal inheritance using `__proto__` to make chains of objects:

```js
// create a parent object with a method
const parent = {
  greet: function () {
    console.log("Hello, I'm the parent!");
  },
};

// create a child object that inherits from the parent
const child = {
  name: "Alice",
  age: 10,
  __proto__: parent,
};

// create another child object that inherits from the parent
const anotherChild = {
  name: "Bob",
  age: 12,
  __proto__: parent,
};

// call the greet method on the child objects, which will be inherited from the parent
child.greet(); // logs "Hello, I'm the parent!"
anotherChild.greet(); // logs "Hello, I'm the parent!"

// ----------------------------------------------------------

// Code Explanation
In this example, we first create a `parent` object with a `greet` method. We then create two child objects, `child` and `anotherChild`, that have properties of their own (`name` and `age`), and inherit from the parent using the `__proto__` property.

Since both `child` and `anotherChild` inherit from `parent` via their prototype chain, they have access to the `greet` method of their parent object. When we call the `greet` method on the child objects, it will execute the method of the parent object and log `"Hello, I'm the parent!"` to the console.

In summary, prototypal inheritance using `__proto__` allows objects to inherit properties and methods from their parent objects, creating a prototype chain of objects. This makes it easy to create new objects based on existing ones and promotes code reusability.
```

### Here's an example of prototype by constructor function

```js
function BankAccout(customerName, balance = 0) {
  this.customerName = customerName;
  this.accountNumber = Date.now();
  this.balance = balance;
}
//So this deposit method is part of the BankAccout and it will be shared to all BankAccout objects it is used to save memory and allows for efficient code reuse.
BankAccout.prototype.deposit = function (amount) {
  this.balance += amount;
};
BankAccout.prototype.withdraw = function (amount) {
  this.balance -= amount;
};
//  the deposit and withdraw method is defined on the prototype of the BankAccout constructor function. So now Both pratikAccount and shreyaAccount instances share the same deposit and withdraw  method through the prototype chain

const pratikAccount = new BankAccout("Pratik");
const shreyaAccount = new BankAccout("Shreya", 10_000);

pratikAccount.deposit(1_000);
shreyaAccount.deposit(10_000);
console.log(pratikAccount, shreyaAccount);
```
