// Lessons of Looping

// Age Logic
const age = 8;

if (age > 18) {
  console.log("You are old enough");
} else if (age === 18) {
  console.log("You are 18 years old");
} else {
  console.log("You are not old enough");
}

// Looping
//for loop
for (let j = 0; j < 10; j++) {
  console.log(j);
}

// while loop
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

//do while loop
let k = 0;
do {
  console.log(k);
  k++;
} while (k < 10);

// forEach loop
const array1 = [1, 2, 3, 4, 5];
array1.forEach((element) => {
  console.log(element);
});
