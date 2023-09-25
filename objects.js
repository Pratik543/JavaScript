// Objects in Javascript

// creating object using object literal
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 29,
  //nested object
  address: {
    street: "123 Main St",
    zipCode: 12345,
    country: "USA",
  },
  //   method of object
  getDone: () => {
    console.log("Done");
  },
};

console.log(person);

// accessing properties can be done using dot notation and bracket notation
console.log(person["lastName"]);
console.log(person["firstName"]);
console.log(person.address);

// adding new property in object
person.company = "Google";

console.log(person);

// deleting property from object
delete person.age;
console.log(person);

// to check if the properties exist in the object
console.log("age" in person);
console.log("firstName" in person);

// access all properties key in object using for in loop
for (let key in person) {
  console.log(key);
}

// access all properties values in object using for in loop
for (let key in person) {
  console.log(person[key]);
}

// access both properties key and values in object using for in loop
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

for (let prop in person) {
  console.log(prop + ":" + person[prop]);
}

// creating object using object constructor using new keyword
// using object constructor there is two way to create object

//----> first example
const animals = new Object();
animals.name = "Elephant";
animals.color = "grey";
animals.size = "big";
console.log(animals);

console.log(animals["name"]);

//----> second example
const plants = new Object({
  name: "lotus",
  color: "green",
  type: "water plant",
});

console.log(plants);
console.log(plants["type"]);
