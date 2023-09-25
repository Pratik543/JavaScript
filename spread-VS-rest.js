// Spread : The spread operator is used to copy all of the enumerable own properties from one or more source objects to a target object.
// Rest : The rest operator is used to unpack a sequence of arguments into an array.

// Basically Spread unpacks elements from an [] array , {} object
// Rest packs elements

// clone / copy
const numberss = [1, 2, 3, 4, 5];
const newNumbers = [...numberss];
console.log(newNumbers);

// merge
const oldNumberss = [1, 2, 3, 4, 5];
const newNumberss = [6, 7, 8];

console.log([...oldNumberss, ...newNumberss]);

// compose
const firstNumbers = [1, 2, 3, 4, 5];
const secondNumbers = [6, 7, 8, 9];
console.log([0, ...firstNumbers, ...secondNumbers, 10]);

// String
const person = "ArnoldSchwarzenegger";
console.log([...person]);

// Objects
// clone
const order = {
  id: 1,
  date: "23/04/2021",
  customerName: "Mahesh",
  items: ["shoes", "shirt", "pant", "sweater"],
};

const newOrder = { ...order };

order.items.push("socks");

console.log(newOrder);

// merge 2 objects
const user = {
  name: "Mahesh",
  age: 38,
};

const address = {
  street: "123 sixth avenue",
  city: "Toronto",
  state: "USA",
};

const newUser = { ...user, ...address };
console.log(newUser);

// Rest
// It is mostly used in functions

// function sum(...numbers) {
//   let result = 0;
//   for (let num of numbers) {
//     result += num;
//   }
//   return result;
// }

// console.log(sum(1, 2, 3, 4, 5));

// one more situation where parameters is array that are spreaded to the function

const numArr = [1, 2, 3, 4, 5];
console.log(sum(...numArr)); //here we are using spreading the array in the function
//               ^--- This is spread operator not rest operator because we are using array in the function

// in this situation we are using two different parameters and rest parameter
function sum(num1, num2, ...numbers) {
  console.log(numbers);
  let result = 0;
  for (let num of numbers) {
    result += num;
  }
  return result;
}

// so in this the first two parameters are handled separately and the rest are combined packed in an array
console.log(sum(1, 2, 3, 4, 5));

// Use case

const numsFromBackend = [
  1, 2, 3, 4, 5, 6, 45, 13, 64, 74, 13, 85, 85, 43, 53, 23,
];

console.log(Math.max(...numsFromBackend));

console.log(Math.max(2, 35, 6, 4, 74, 2, 5, 73));

// Destructuring

const usser = {
  name: "Pratik",
  city: "Ahmedabad",
  state: "Gujarat",
  steet: "karol bagh",
};

const { name, ...adress } = usser; //destructuring
console.log(name, adress);
