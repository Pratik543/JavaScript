// Lessons of Looping

// Age Logic
// const age = 8;

// if (age > 18) {
//   console.log('You are old enough');
// } else if (age === 18) {
//   console.log('You are 18 years old');
// } else {
//   console.log('You are not old enough');
// }

// Looping
//for loop
// for (let j = 0; j < 10; j++) {
//   console.log(j);
// }

// while loop
// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

//do while loop
// let k = 0;
// do {
//   console.log(k);
//   k++;
// } while (k < 10);

// forEach loop
// const array1 = [1, 2, 3, 4, 5];
// array1.forEach((element) => {
//   console.log(element);
// });

// Simple Traffic Lights Logic

const stop = document.getElementsByClassName('stop')[0];
// console.log(stop);
const go = document.getElementsByClassName('go')[0];
const wait = document.getElementsByClassName('wait')[0];
const lightStatus = (status) => {
  status = status.toLowerCase();
  if (status == 'green') {
    console.log('You can Go!');
    go.classList.add('on');
    if (stop.classList.contains('on')) {
      stop.classList.remove('on');
    } else if (wait.classList.contains('on')) {
      wait.classList.remove('on');
    }
  } else if (status == 'red') {
    console.log('You need to stop!');
    stop.classList.add('on');
    if (go.classList.contains('on')) {
      go.classList.remove('on');
    } else if (wait.classList.contains('on')) {
      wait.classList.remove('on');
    }
  } else if (status == 'yellow') {
    console.log('You need to wait!');
    wait.classList.add('on');
    if (stop.classList.contains('on')) {
      stop.classList.remove('on');
    } else if (go.classList.contains('on')) {
      go.classList.remove('on');
    }
  } else {
    console.log('Invalid status');
  }
};

lightStatus('green'); //check in loops.html
// lightStatus('RED');
// lightStatus('yellow');
