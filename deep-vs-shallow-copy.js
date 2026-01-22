const person = {
  name: "John",
  hobbies: ["Cycling", "Movies", "Swimming"],
  favourite: {
    1: "Ford",
    2: "Mustang",
    3: "Ferrari",
  },
};

console.log(person.hobbies);

const copiedObj = structuredClone(person);

// const copiedObj = JSON.parse(JSON.stringify(person));
// const copiedObj = { ...person };

copiedObj.hobbies.push("Dancing");
copiedObj.name = "Hello";

console.log(person);

console.log(copiedObj);
