// ==================================================ARRAYS=================================================================
/*
Array

- An array is a data structure that can hold a collection of values
- Arrays can contain a mix of different data types. You can store strings, booleans, numbers or even objects all in the same array
- Arrays are resizable. You don't have to declare the size of an array before creating it
- JavaScript arrays are zero-indexed and the insertion order is maintained
- Arrays are iterables. They can be used with a for of loop
*/
const arr = [1, 2, 3, 4, 5, 6, 7];

arr.push(8);
arr.push(2);
arr.unshift(0);
console.log(arr);
arr.pop(2);
arr.shift(0);
console.log(arr);

for (const item of arr) {
  console.log(item);
}
// More Method mentioned in ./arrays.js

/*
Array: Big-O Time Complexity

Insert/remove from end - 0(1)
Insert/remove from beginning - O(n)
Access - O(1)
Search - O(n)
Push/pop - 0(1)
Shift/unshift/concat/slice/splice - O(n)
forEach/map/filter/reduce - O(n)

Note: While solving a problem you might use .forEach or .filter and the callback function would also contain a for loop in such a scenario your time complexity is quadratic and the interviewer might not be happy with that
*/

// ==================================================OBJECTS=================================================================
/*
Object

- An object is an unordered collection of key-value pairs. The key must either be a string or symbol data type where as the value can be of any data type
- To retrieve a value, you can use the the corresponding key. This can be achieved using the dot notation or bracket notation
- An object is not an iterable. You cannot use it with a for of loop
*/

const obj = {
  name: "Alexander",
  age: 30,
  profession: "Engineer",
  "his-hobbies": ["Coding", "Gaming", "Reading", "Travelling"],
  "his address": {
    city: "Wassington",
    state: "USA",
    pin: 110001,
  },
  introduce: function () {
    console.log(`Hi, I am ${this.name}
I am ${this.age} years old
I am a ${this.profession}`);
  },
};

obj.empID = 45;
console.log(obj);

delete obj.empID;
console.log(obj);

console.log(obj.name);
console.log(obj["his-hobbies"]);
console.log(obj["his address"]);
console.log(obj["his address"].city);
// the bracket notation is primarily used when the object key contains spaces or hypens and that key is surrounded by quotes/string

obj.introduce(); //calling the method of object
console.log(Object.keys(obj));

console.log(Object.values(obj));

console.log(Object.entries(obj));
/*
Obejct: Big-O Time Complexity

Insert - O(1)
Remove - O(1)
Access - O(1)
Search - O(n)
Object.keys() - O(n)
Object.values() - O(n)
Object.entries() - O(n)
*/

// ==================================================SET=================================================================
/*
Set

- A set is a data structure that can hold a collection of values. The values however
must be unique.
- Set can contain a mix of different data types. You can store strings, booleans,
numbers or even objects all in the same set.
- Sets are dynamically sized. You don't have to declare the size of a set before
creating it.
- Sets do not maintain an insertion order.
- Sets are iterables. They can be used with a for of loop.

Set vs Array

- Arrays can contain duplicate values whereas Sets cannot.
- Insertion order is maintained in arrays but it is not the case with sets.
- Searching and deleting an element in the set is faster compared to array.

*/

const setName = new Set([1, 2, 3, 4, 5]);

setName.add(6);
setName.add(6); //set will ignore duplicate value
console.log(setName.has(4));
console.log(setName.has(7));
setName.delete(3);
console.log(setName.size);

for (const item of setName) {
  console.log(item);
}
setName.clear(); //cleared all elements
console.log(setName.size);
for (const item of setName) {
  console.log(item);
}

// ==================================================MAP=================================================================
/*
Map

- A map is an unordered collection of key-value pairs. Both keys and values can beof any data type.
- To retrieve a value, you can use the the corresponding key.
- Maps are iterables. They can be used with a for of loop.

Object vs Map

- Objects are unordered whereas maps are ordered
- Keys in objects can only be string or symbol type whereas in maps, they can be of any type
- An object has a prototype and may contain a few default keys which may collide with your own keys if you're not careful. A map on the other hand does not contain any keys by default
- Objects are not iterables where as maps are iterables
- The number of items in an object must be determined manually where as it is readily available with the size property in a map
- Apart from storing data, you can attach functionality to an object whereas maps are restricted to just storing data

*/
const map = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
  ["d", 4],
]);

map.set("e", 5);
map.set("f", 6);
map.delete("f");
console.log(map.has("f"));
console.log(map.has("d"));
console.log(map.size);
console.log(map);

for (const [key, value] of map) {
  console.log(`Key ${key} : Value ${value}`);
}

map.clear();
console.log(map);
console.log(map.size);
