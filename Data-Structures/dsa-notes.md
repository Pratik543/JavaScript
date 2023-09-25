GitHub repository for DSA:
[TheAlgorithms/Javascript](https://github.com/TheAlgorithms/Javascript/)

Built in DS : Array, Object, Set, Map
Custom DS : Stack,

### Array

- An array is a data structure that can hold a collection of values
- Arrays can contain a mix of different data types. You can store strings, booleans, numbers or even objects all in the same array
- Arrays are resizable. You don't have to declare the size of an array before creating it
- JavaScript arrays are zero-indexed and the insertion order is maintained
- Arrays are iterables. They can be used with a for of loop

```jsx
Array: Big-O Time Complexity

Insert/remove from end - 0(1)
Insert/remove from beginning - O(n)
Access - O(1)
Search - O(n)
Push/pop - 0(1)
Shift/unshift/concat/slice/splice - O(n)
forEach/map/filter/reduce - O(n)

Note: While solving a problem you might use .forEach or .filter and the callback function
would also contain a for loop in such a scenario your time complexity is quadratic and
the interviewer might not be happy with that
```

---

### Object

- An object is an unordered collection of key-value pairs. The key must either be a string or symbol data type where as the value can be of any data type
- To retrieve a value, you can use the the corresponding key. This can be achieved
  using the dot notation or bracket notation
- An object is not an iterable. You cannot use it with a for of loop

```jsx
Obejct: Big-O Time Complexity

Insert - O(1)
Remove - O(1)
Access - O(1)
Search - O(n)
Object.keys() - O(n)
Object.values() - O(n)
Object.entries() - O(n)
```

---

### Set

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

---

### Map

- A map is an unordered collection of key-value pairs. Both keys and values can be
  of any data type.
- To retrieve a value, you can use the the corresponding key.
- Maps are iterables. They can be used with a for of loop.

Object vs Map

- Objects are unordered whereas maps are ordered.
- Keys in objects can only be string or symbol type whereas in maps, they can be of any type.
- An object has a prototype and may contain a few default keys which may collide with your own
  keys if you're not careful. A map on the other hand does not contain any keys by default.
- Objects are not iterables where as maps are iterables.
- The number of items in an object must be determined manually where as it is readily available
  with the size property in a map.
- Apart from storing data, you can attach functionality to an object whereas maps are restricted to just storing data.

---

### Stack

- The stack data structure is a sequential collection of elements that follows the
  principle of Last In First Out (LIFO).
- The last element inserted into the stack is first element to be removed.
  A stack of plates. The last plate placed on top of the stack is also the first plate
  removed from the stack.
- Stack is an abstract data type. It is defined by its behavior rather than being a
  mathematical model.
- The Stack data structure supports two main operations
  • Push, which adds an element to the collection.
  • Pop, which removes the most recently added element from the collection.

Stack Usage

- Browser history tracking
- Undo operation when typing
- Expression conversions
- Call stack in JavaScript runtime

[Visual Representation of Stack Operations](https://excalidraw.com/#json=GIrQDT8MH6ketuTyRE1tw,gGE_qXgSaaehtQzDc5pldA)

Stack Implementation

- push(element) - add an element to the top of the stack
- pop() - remove the top most element from the stack
- peek() - get the value of the top element without removing it
- isEmpty() - check if the stack is empty
- size() - get the number of elements in the stack
- print() - visualize the elements in the stack

---

### _Queue_

- _The queue data structure is a sequential collection of elements that follows the principle of First In First Out (FIFO)_
- _The first element inserted into the queue is first element to be removed_
- _A queue of people. People enter the queue at one end (rear/tail) and leave the queue from the other end (front/ head)._
- _Queue is an abstract data type. It is defined by its behavior rather than being a mathematical model_

_The Queue data structure supports two main operations_

- _Enqueue, which adds an element to the rear/tail of the collection_
- _Dequeue, which removes an element from the front/head of the collection_

_Queue Usage_

_Typically a queue is great when you hae to process in an orderly fashion_

- _Printers : when you try print multiple documents_
- _CPU task scheduling_
- _Callback queue in JavaScript runtime : to determine the order in which your code will execute_

[Visual Representation of Queue Operations](https://excalidraw.com/#json=XSzhOmLuosbQI1qY_kxOV,7DfWBPipEkB-5euI5Mqh_g)

_Queue Implementation_

- _enqueue(element) - add an element to the queue_
- _dequeue() - remove the oldest element from the queue_
- _peek() - get the value of the element at the front of the queue without removing it_
- _isEmpty() - check if the queue is empty_
- _size() - get the number of elements in the queue_
- _print() - visualize the elements in the queue_

---

_Circular Queue_

- _The Circular Queue is an extended version of regular queue_
- _The size of the queue is fixed and a single block of memory is used as if the first element is connected to the last element_
- _Also referred to as circular buffer or ring buffer and follows the FIFO principle_
- _A circular queue will reuse the empty block created during the dequeue operatio_
- _When working with queues of fixed maximum size, a circular queue is a great implementation choice_

_The Circular Queue data structure supports two main operations_

- _Enqueue, which adds an element to the rear/tail of the collection_
- _Dequeue, which removes an element from the front/head of the collection_

_Circular Queue Usage_

- _Clock_
- _Streaming data : in which it acts as a buffer_
- _Traffic lights_

> _Note: Whenever you have fixed sized queue you need to manage circular queue as your go to data structure_

[Visual Representation of Circular Queue Operations](https://excalidraw.com/#json=2CYJfAAixZm4A9HrRt2E9,QjrY8HFRAbLKPqNV8BA7FQ)

_Circular Queue Implementation_

- _enqueue(element) - add an element to the queue_
- _dequeue() - remove the oldest element from the queue_
- _isFull() - check if the queue is full_
- _isEmpty() - check if the queue is empty_
- _peek() - get the value of the element at the front of the queue without removing it_
- _size() - get the number of elements in the queue_
- _print() - visualize the elements in the queue_

---
