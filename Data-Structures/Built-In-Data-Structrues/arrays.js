/*
Arrays
  --> Array methods
      - length() method - It returns the length of an array 
      - concat() method - It merges two or more arrays and returns a new array.
      - unshift() method - It adds an element to the beginning of an array.
      - push() method - It adds an element to the end of an array.
      - shift() method - It removes an element from the beginning of an array.
      - pop() method - It removes an element from the end of an array.
      - indexOf()  method - It returns the index of the first occurrence of a specified element in an array.
      - lastIndexOf() - It returns the index of the last occurrence of a specified element in an array.
      - includes() method - It determines whether an array includes a specified value.
      - find() method - It finds a specified value in an array.
      - findIndex() method - It finds a specified value in an array.
      - sort() method - It sorts an array in ascending order.
      - reverse() method - It reverses an array in descending order.
      - splice() method - It adds or removes elements from an array and returns the removed elements.
      - slice() method - It extracts a section of an array and returns a new array.
      - join() method - It joins all elements of an array into a string.
      - toString() method - It converts an array into a string.
      - isArray() method - It determines whether a given value is an array and returns a boolean value.
*/

const languages = ["JavaScript", "Python", "Java"];

// Length
console.log(languages.length);

// Calling Array with Index
console.log(languages[2]);

// Array Methods
// [*] Adding Element at the start of an array
// you can add new element without distutbing other elements
// with unshift method it will add at the start
languages.unshift("GoLang");
console.log(languages);

// [*] Adding Element at the end of an array
// you can add new element after assigning it already
// with push method it will add at the end
languages.push("C++");
console.log(languages);

// [*] Removing Element at the start of an array
// you can remove element from the start of the array
// with shift method it will remove the first element
console.log(languages.shift());
console.log(languages);

// [*] Removing Element at the end of an array
// with pop method it will remove the last element
console.log(languages.pop());
console.log(languages);

/*
Loops
    --> Looping functions and methods on arrays
            - for loop
            - forEach loop
            - for of loop
            - filter()
            - map()
            - reduce()

*/

const actors = [
  {
    name: "John",
    age: 29,
    score: 58,
  },
  {
    name: "Michael",
    age: 23,
    score: 52,
  },
  {
    name: "Alexandar",
    age: 25,
    score: 65,
  },
];

console.log(actors);

// Cutting 4 scores from actors score(property) using for loop
for (let i = 0; i < actors.length; i++) {
  actors[i].score -= 4;
}
console.log(actors);

// Cutting 5 scores from actors score(property) using forEach loop
actors.forEach((actor) => {
  console.log(actor.score);
  actor.score -= 5;
});
console.log(actors);

// Cutting 15 scores from actors score(property) using for (of) loop

for (const actor of actors) {
  console.log(actor.score);
  actor.score -= 15;
  console.log(actor.score);
}
console.log(actors);

// filter() method = This method creates a new array with only elements that passes the condition inside the provided function.
// Checking if the marks is greater than 40

const students = [
  {
    name: "Student 1",
    marks: 35,
  },
  {
    name: "Student 2",
    marks: 45,
  },
  {
    name: "Student 3",
    marks: 38,
  },
  {
    name: "Student 4",
    marks: 65,
  },
  {
    name: "Student 5",
    marks: 40,
  },
];

const failedStudents = students.filter((student) => {
  // 2 ways of writing efficient code
  return student.marks <= 40;

  // if (student.marks < 40) {
  //   return true;
  // } else if (student.marks === 40) {
  //   console.log("Just pass");
  //   return true;
  // }
  // return false;
});

// if function is one liner you don't need to write return or open {}
const failed = students.filter((student) => student.marks <= 40);

console.log(failedStudents);
console.log(failed);

// map() method = This method creates a new array with the results of calling a provided function on every element in this array.

const users = [
  {
    name: "John",
    surname: "Doe",
  },
  {
    name: "Alexander",
    surname: "Bice",
  },
  {
    name: "Meade",
    surname: "Coolson",
  },
  {
    name: "Tanny",
    surname: "Balchin",
  },
];

const userNames = users.map((user) => {
  return {
    fullname: `${user.name} ${user.surname}`,
  };

  // return user.name + user.surname;
  // return user.name + ' ' + user.surname;
});

console.log(userNames);

// reduce() method = This method creates a single value by calling a provided function on every element in this array.

const movies = [
  {
    name: "Avengers",
    year: 2012,
    budget: 2_00_000,
  },
  {
    name: "Interstellar",
    year: 2014,
    budget: 1_50_000,
  },
  {
    name: "Titanic",
    year: 1997,
    budget: 1_00_000,
  },
];

// using forEach method but it is not efficient as we are declaraling the total variable outside the function and changing it inside the function
// let total = 0;

// movies.forEach((movie) => {
//   total += movie.budget;
// })

// console.log(total);

// using reduce method
const total = movies.reduce((acc, movie) => {
  return (acc += movie.budget);
}, 0);

console.log(total);

// indexOf() method = This method returns the index of the first occurrence of a specified value in an array.

const admins = [2, 3, 8, 9, 10];

console.log(admins.indexOf(10));

const all_users = [
  {
    name: "John",
    id: 1,
  },
  {
    name: "Alexander",
    id: 2,
  },
  {
    name: "Meade",
    id: 3,
  },
];

console.log(all_users[2].id); //id of third element
console.log(admins.indexOf(all_users[2].id)); //id of  third element of all_users in admins arrays index

//condition to check if element is in array if
const isAdmin = admins.indexOf(8) > -1;
console.log(admins.indexOf(2)); //index of 2 in admins array

console.log(isAdmin);

// lastIndexOf() method = This method returns the index of the last occurrence of a specified value in an array.

console.log(admins.lastIndexOf(all_users[2].id));

// includes() method = This method determines whether an array includes a specified value.
// better way than indexOf

console.log(admins.includes(all_users[2].id));
console.log(admins.includes(all_users[0].id));

//find () method = This method finds a specified value in an array.

// const findUser = all_users.find((user) => {
//   return user.id === 2;
// });

const findUser = all_users.find((user) => {
  return user.name === "Meade";
});

//findIndex() method = This method finds a specified value in an array.
const findUserName = all_users.findIndex((user) => {
  return user.name === "Meade";
});

console.log(findUserName);

// sort() method = This method sorts an array in ascending order.

const names = [
  "Rudd,",
  "Lavinie",
  "Halsy",
  "Avram",
  "Pepe",
  "Jerri",
  "Sampson",
  "Corrianne",
  "Cristal",
];

// const sortedNames = names.sort();
// console.log(sortedNames);

// reverse() method = This method reverses an array in descending order.

// const reversedNames = names.reverse();
// console.log(reversedNames);

// splice() method = This method adds or removes elements from an array and returns the removed elements.

const deletedNames = names.splice(2, 3); //from index 2 remove 3 elements
console.log(deletedNames);
console.log(names);

// slice() method = This method extracts a section of an array and returns a new array.

const namearr = ["Pratik", "Raja", "Mrunal", "Rahul"];
const sentence = "HELLO";

const half = namearr.slice(1);
const cut = sentence.slice(1);
// const cut = sentence.slice(2);
console.log(half);
console.log(cut);
