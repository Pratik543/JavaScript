# Arrays of Objects in JS

     - Object is a collection of related properties and methods that represent a single entity. It is a core data structure that can be used to model real-world entities and interactions between them.<br> Objects can be created using literal notation or object constructors.

     - Array is a type of data structure that is used to store a collection of values. These values can be of any data type, including strings, numbers, booleans, or even other arrays.

Here's an example of an array in JavaScript:

```js
const myArray = ["apple", "banana", "orange"];
```

In this example, myArray is an array that contains three strings: "apple", "banana", and "orange". Note that the square brackets [] are used to define the array, and the values are separated by commas.

### Example of an array with objects in JavaScript with different data types:

```javascript
const people = [
  {
    name: "Alice",
    age: 25,
    married: true,
    hobbies: ["reading", "hiking"],
    job: { title: "Software Engineer", salary: 100000 },
  },
  {
    name: "Bob",
    age: 30,
    married: false,
    hobbies: ["painting", "music"],
    job: { title: "Teacher", salary: 50000 },
  },
  {
    name: "Charlie",
    age: 35,
    married: true,
    hobbies: ["cooking", "traveling"],
    job: { title: "Writer", salary: 75000 },
  },
];
```

In this example, `people` is an array that contains three objects, each with different data types including string, number, boolean, array, and object data types. Each object contains a `name`, `age`, `married` (boolean), `hobbies` (array), and `job` (object) property.

- We can access and modify individual properties of the objects in the array by using their indexes and property names. For example, we can access the `salary` of the second person's job in `people` like this:

  ```js
  console.log(people[1].job.salary); // Output: 50000
  ```

- We can also modify a property of an object in the array by assigning a new value to it, like this:

  ```js
  people[2].age = 40;
  console.log(people); // Output: [{ name: "Alice", age: 25, married: true, hobbies: ["reading", "hiking"], job: { title: "Software Engineer", salary: 100000 } }, { name: "Bob", age: 30, married: false, hobbies: ["painting", "music"], job: { title: "Teacher", salary: 50000 } }, { name: "Charlie", age: 40, married: true, hobbies: ["cooking", "traveling"], job: { title: "Writer", salary: 75000 } }]
  ```

---

## Methods on Arrays

> To make JavaScript array manipulation easier, we should use array methods to make our work easier and the code cleaner.

### There are several built-in methods in JavaScript that can be used with arrays. Here are some examples:

1.  `map()`

         Returns a new array by performing a function on each element of the array.

    [MDN - Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

    Example:

    ```js
    const numbers = [1, 2, 3];
    const doubledNumbers = numbers.map((num) => num * 2);
    console.log(doubledNumbers); // Output: [2, 4, 6]
    ```

2.  `filter()`

         Returns a new array with only the elements that pass a given condition.

    [MDN - Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

    Example:

    ```js
    const numbers = [1, 2, 3, 4, 5];
    const evenNumbers = numbers.filter((num) => num % 2 === 0);
    console.log(evenNumbers); // Output: [2, 4]
    ```

3.  `sort()`

         Sorts the array in place, returning the sorted array.

    [MDN - Array.prototype.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

    Example:

    ```js
    const numbers = [3, 2, 1, 4];
    numbers.sort();
    console.log(numbers); // Output: [1, 2, 3, 4]
    ```

4.  `forEach()`

         Executes a provided function once for each array element.

    [MDN - Array.prototype.forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

    Example:

    ```js
    const numbers = [1, 2, 3];
    numbers.forEach((num) => console.log(num));
    // Output:
    // 1
    // 2
    // 3
    ```

5.  `concat()`

         Joins two or more arrays and returns a new array that contains all the elements.

    [MDN - Array.prototype.concat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)

    Example:

    ```js
    const array1 = [1, 2, 3];
    const array2 = [4, 5, 6];
    const newArray = array1.concat(array2);
    console.log(newArray); // Output: [1, 2, 3, 4,
    ```

6.  `every()`

         Returns a boolean value that indicates whether all the elements in the array pass a given condition.

    [MDN - Array.prototype.every()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

    Example:

    ```js
    const numbers = [2, 4, 6];
    const areEven = numbers.every((num) => num % 2 === 0);
    console.log(areEven); // Output: true
    ```

7.  `some()`

         Returns a boolean value that indicates whether at least one element in the array passes a given condition.

    [MDN - Array.prototype.some()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)

    Example:

    ```js
    const numbers = [1, 3, 5];
    const hasEven = numbers.some((num) => num % 2 === 0);
    console.log(hasEven); // Output: false
    ```

8.  `includes()`

         Determines whether an array includes a certain value among its entries.

    [MDN - Array.prototype.includes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)

    Example:

    ```js
    const numbers = [1, 2, 3];
    const includesTwo = numbers.includes(2);
    console.log(includesTwo); // Output: true
    ```

9.  `join()`

         Joins all elements of an array into a string.

    [MDN - Array.prototype.join()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

    Example:

    ```js
    const numbers = [1, 2, 3];
    const joinedString = numbers.join("-");
    console.log(joinedString); // Output: '1-2-3'
    ```

10. `reduce()`

         Reduces an array to a single value by performing an operation on each element.

    [MDN - Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

    Example:

    ```js
    const numbers = [1, 2, 3, 4, 5];
    const sum = numbers.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
    console.log(sum); // Output: 15
    ```

11. `find()`

         Returns the value of the first element in the array that satisfies a given condition.

    [MDN - Array.prototype.find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

    Example:

    ```js
    const numbers = [1, 2, 3, 4, 5];
    const evenNumber = numbers.find((num) => num % 2 === 0);
    console.log(evenNumber); // Output: 2
    ```

12. `findIndex()`

         Returns the index of the first element in the array that satisfies a given condition.

    [MDN - Array.prototype.findIndex()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)

    Example:

    ```js
    const numbers = [1, 2, 3, 4, 5];
    const evenNumberIndex = numbers.findIndex((num) => num % 2 === 0);
    console.log(evenNumberIndex); // Output: 1
    ```

13. `indexOf()`

         Returns the index of the first occurrence of a specified element in the array.

    [MDN - Array.prototype.indexOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)

    Example:

    ```js
    const numbers = [1, 2, 3, 4, 5];
    const index = numbers.indexOf(3);
    console.log(index); // Output: 2
    ```

14. `fill()`

         Changes all elements in an array to a specified value.

    [MDN - Array.prototype.fill()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill)

    Example:

    ```js
    const array = [1, 2, 3];
    array.fill(0);
    console.log(array); // Output: [0, 0, 0]
    ```

15. `slice()`
    Returns a shallow copy of a portion of an array into a new array object.

    [MDN - Array.prototype.slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

    Example:

    ```js
    const numbers = [1, 2, 3, 4, 5];
    const copy = numbers.slice(2, 4);
    console.log(copy); // Output: [3, 4]
    ```

16. `reverse()`

         Reverses the order of the elements in an array in place.

    [MDN - Array.prototype.reverse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)

    Example:

    ```js
    const numbers = [1, 2, 3, 4, 5];
    numbers.reverse();
    console.log(numbers); // Output: [5, 4, 3, 2, 1]
    ```

17. `push()`

         Adds one or more elements to the end of an array and returns the new length of the array.

    [MDN - Array.prototype.push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

    Example:

    ```js
    const numbers = [1, 2, 3];
    const newLength = numbers.push(4, 5);
    console.log(numbers); // Output: [1, 2, 3, 4, 5]
    console.log(newLength); // Output: 5
    ```

18. `pop()`

         Removes the last element from an array and returns that element.

    [MDN - Array.prototype.pop()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)

    Example:

    ```js
    const numbers = [1, 2, 3];
    const lastElement = numbers.pop();
    console.log(numbers); // Output: [1, 2]
    console.log(lastElement); // Output: 3
    ```

19. `shift()`

         Removes the first element from an array and returns that element.

    [MDN - Array.prototype.shift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)

    Example:

    ```js
    const numbers = [1, 2, 3];
    const firstElement = numbers.shift();
    console.log(numbers); // Output: [2, 3]
    console.log(firstElement); // Output: 1
    ```

20. `unshift()`

         Adds one or more elements to the beginning of an array and returns the new length of the array.

    [MDN - Array.prototype.unshift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)

    Example:

    ```js
    const numbers = [1, 2, 3];
    const newLength = numbers.unshift(-2, -
    ```

21. `splice()`

         Adds or removes elements from an array. This method changes the original array and returns an array of the deleted elements (if any).

    [MDN - Array.prototype.splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

    Example:

    ```js
    const cities = ["New York", "Chicago", "Los Angeles", "Boston"];

    // Removes 1 element starting from index 2
    const removed = cities.splice(2, 1);

    console.log(cities); // Output: ["New York", "Chicago", "Boston"]
    console.log(removed); // Output: ["Los Angeles"]
    ```

22. `sort()`

         Sorts the elements of an array in place and returns the array. The default sort order is built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

    [MDN - Array.prototype.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

    Example:

    ```js
    const fruits = ["banana", "apple", "orange", "mango"];
    fruits.sort(); // Sorts the array alphabetically
    console.log(fruits); // Output: ["apple", "banana", "mango", "orange"]
    ```

Note that `sort()` sorts the elements of the array in place, which means it modifies the original array. If you want to avoid modifying the original array, you can create a copy of the array and sort that instead, like this:

```js
const fruits = ["banana", "apple", "orange", "mango"];

// Create a copy of the array before sorting it
const sortedFruits = fruits.slice().sort();

console.log(sortedFruits); // Output: ["apple", "banana", "mango", "orange"]
console.log(fruits); // Output: ["banana", "apple", "orange", "mango"]
```
