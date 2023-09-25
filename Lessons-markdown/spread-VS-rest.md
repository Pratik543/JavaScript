1. Spread Operator (...):
   The spread operator (...) is used to expand elements of an iterable (such as an array, string, or object) into individual elements. It allows you to easily copy and combine arrays, objects, or other iterable objects.

Here are a few use cases of the spread operator:

- Copying arrays: You can create a new array by spreading the elements of an existing array.

  ```js
  const originalArray = [1, 2, 3];
  const newArray = [...originalArray];
  ```

- Merging arrays: You can merge multiple arrays into a single array using the spread operator.

  ```js
  const array1 = [1, 2, 3];
  const array2 = [4, 5, 6];
  const mergedArray = [...array1, ...array2];
  ```

- Spreading objects: You can create a new object by spreading the properties of an existing object.

  ```js
  const originalObject = { name: "John", age: 30 };
  const newObject = { ...originalObject };
  ```

2. Rest Parameters (...):
   The rest parameter (...) allows you to represent an indefinite number of arguments as an array. It allows you to pass multiple arguments to a function without explicitly defining each argument.

Here's an example of using the rest parameter in a function:

```js
function sum(...numbers) {
  let total = 0;
  for (const number of numbers) {
    total += number;
  }
  return total;
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(4, 5, 6, 7)); // Output: 22

// code explaination

//In the sum() function, the rest parameter ...numbers allows you to pass any number of arguments to the function. Inside the function, the numbers parameter becomes an array containing all the passed arguments, and you can perform operations on it.
```
