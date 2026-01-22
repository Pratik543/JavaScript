# Deep Copy and Shallow Copy in JavaScript

## Shallow Copy
  A shallow copy of an object in JavaScript is a copy where the top-level properties are copied, but any nested objects or arrays are just given a reference to the original. This means that if you modify a nested property in the copy, it will also affect the original object.

Here's an example of a shallow copy using the spread operator (...):

```javascript
const originalObject = {
  a: 1,
  b: { c: 2 }
};

const shallowCopy = { ...originalObject };

console.log(originalObject); // { a: 1, b: { c: 2 } }
console.log(shallowCopy); // { a: 1, b: { c: 2 } }

shallowCopy.b.c = 3;

console.log(originalObject); // { a: 1, b: { c: 3 } }
console.log(shallowCopy); // { a: 1, b: { c: 3 } }
```

As you can see, when we modify the nested c property in the shallowCopy, it also affects the originalObject.

Avoiding Shallow Copy Issues
To avoid the issues with shallow copies, you can use a deep copy instead.

For shallow copies, only the top-level properties are copied, not the values of nested objects. Therefore:

Re-assigning top-level properties of the copy does not affect the source object.
Re-assigning nested object properties of the copy does affect the source object.
In JavaScript, all standard built-in object-copy operations (spread syntax, Array.prototype.concat(), Array.prototype.slice(), Array.from(), and Object.assign()) create shallow copies rather than deep copies.

## Deep Copy
  A deep copy of an object in JavaScript is a copy where all the nested objects and arrays are also copied, not just referenced. This means that any changes made to the copy will not affect the original object.

One way to create a deep copy is to use the JSON.parse(JSON.stringify(obj)) method:
```javascript
const originalObject = {
  a: 1,
  b: { c: 2 }
};

const deepCopy = JSON.parse(JSON.stringify(originalObject));

console.log(originalObject); // { a: 1, b: { c: 2 } }
console.log(deepCopy); // { a: 1, b: { c: 2 } }

deepCopy.b.c = 3;

console.log(originalObject); // { a: 1, b: { c: 2 } }
console.log(deepCopy); // { a: 1, b: { c: 3 } }

```
In JavaScript, standard built-in object-copy operations (spread syntax, Array.prototype.concat(), Array.prototype.slice(), Array.from(), and Object.assign()) do not create deep copies (instead, they create shallow copies).

One way to make a deep copy of a JavaScript object, if it can be serialized, is to use JSON.stringify() to convert the object to a JSON string, and then JSON.parse() to convert the string back into a (completely new) JavaScript object:

In this example, when we modify the nested c property in the deepCopy, it does not affect the originalObject.
How it's done under the hood
Under the hood, the JSON.parse(JSON.stringify(obj)) method works by first converting the object to a JSON string using JSON.stringify(), and then parsing that string back into a new object using JSON.parse(). This process effectively creates a deep copy of the original object.
However, there are some limitations to this approach:
Circular references: If the object has circular references, the JSON.stringify() method will throw an error.
Functions: Functions are not preserved in the copied object, as they are not valid JSON.
Prototypes: Prototypes are not preserved in the copied object.
To handle these cases, you can use a more robust deep copying solution, such as a custom recursive deep copying function:
```javascript
function deepCopy(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(item => deepCopy(item));
  }

  const newObj = {};
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      newObj[key] = deepCopy(obj[key]);
    }
  }

  return newObj;
}

const originalObject = {
  a: 1,
  b: { c: 2 },
  d: [{ e: 3 }],
  f: () => console.log('Hello')
};

const deepCopiedObject = deepCopy(originalObject);

console.log(originalObject); // { a: 1, b: { c: 2 }, d: [{ e: 3 }], f: () => console.log('Hello') }
console.log(deepCopiedObject); // { a: 1, b: { c: 2 }, d: [{ e: 3 }], f: () => console.log('Hello') }

deepCopiedObject.b.c = 4;
deepCopiedObject.d[0].e = 5;

console.log(originalObject); // { a: 1, b: { c: 2 }, d: [{ e: 3 }], f: () => console.log('Hello') }
console.log(deepCopiedObject); // { a: 1, b: { c: 4 }, d: [{ e: 5 }], f: () => console.log('Hello') }

```

This custom deepCopy() function recursively copies the object, preserving its structure, including nested objects, arrays, and even functions.
In summary, shallow copies in JavaScript only copy the top-level properties, while deep copies create a completely independent copy of the object, including all nested properties. Shallow copies can lead to unexpected behavior, so it's important to understand the difference and use deep copies when necessary to avoid issues.
