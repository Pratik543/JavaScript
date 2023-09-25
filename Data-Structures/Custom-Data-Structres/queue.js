// ====================================================QUEUE===============================================
/*
Queue

- The queue data structure is a sequential collection of elements that follows the principle of First In First Out (FIFO)
- The first element inserted into the queue is first element to be removed
- A queue of people. People enter the queue at one end (rear/tail) and leave the queue from the other end (front/ head).
- Queue is an abstract data type. It is defined by its behavior rather than being a mathematical model

The Queue data structure supports two main operations
• Enqueue, which adds an element to the rear/tail of the collection
• Dequeue, which removes an element from the front/head of the collection

Queue Usage
Typically a queue is great when you hae to process in an orderly fashion 

• Printers : when you try print multiple documents
• CPU task scheduling
• Callback queue in JavaScript runtime : to determine the order in which your code will execute
[Visual Representation of Queue Operations](https://excalidraw.com/#json=XSzhOmLuosbQI1qY_kxOV,7DfWBPipEkB-5euI5Mqh_g)

Queue Implementation

• enqueue(element) - add an element to the queue
• dequeue() - remove the oldest element from the queue
• peek() - get the value of the element at the front of the queue without removing it
• isEmpty() - check if the queue is empty
• size() - get the number of elements in the queue
• print() - visualize the elements in the queue

*/

// class Queue {
//   constructor() {
//     this.items = [];
//   }

//   enqueue(element) {
//     this.items.push(element);
//   }
//   dequeue(element) {
//     return this.items.shift(element);
//   }
//   isEmpty() {
//     return this.items.length === 0;
//   }
//   peek() {
//     if (this.isEmpty()) {
//       return null;
//     }
//     return this.items[0];
//   }
//   size() {
//     return this.items.length;
//   }
//   print() {
//     console.log(this.items.toString());
//   }
// }

// const queue = new Queue();

// console.log(queue.isEmpty());
// queue.enqueue(10);
// queue.enqueue(40);
// queue.enqueue(50);
// queue.enqueue(80);

// console.log(queue.size());
// queue.print();
// console.log(queue.peek());

// queue.dequeue(10);
// console.log(queue.peek());

// ===========================================OPTIMIZATIONS===========================================
/*
We implemented the queue using an array. 
However the dequeue operation due to the use of built in shift method has a linear time complexity which is not favourable 
Now implementing the same queue data structure using an object ensuring both enqueue and dequeue operations have constant time complexity

*/

class Queue {
  constructor() {
    this.items = {};
    this.front = 0; // we start at position 0 to try mimic an array index
    this.rear = 0;
  }

  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }
  dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }
  isEmpty() {
    return this.rear - this.front === 0;
  }
  peek() {
    return this.items[this.front];
  }
  size() {
    return this.rear - this.front;
  }
  print() {
    console.log(this.items);
  }
}

const queue2 = new Queue();

queue2.enqueue(140);
queue2.enqueue(30);
queue2.enqueue(60);
queue2.enqueue(90);
console.log(queue2.size());
queue2.print();

console.log(queue2.dequeue());
console.log(queue2.peek());
