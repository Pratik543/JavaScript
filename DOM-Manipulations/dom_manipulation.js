// Adding Elements
// const body = document.body;
// body.append("Hello");
// body.appendChild("world");

// DOM manipulation (Document object model)

// 1. getElementById
// const heading = document.getElementById('heading');
// console.log(heading);
//2. getElementsByTagName
// const heading = document.getElementsByTagName('h1');
// 3. getElementsByClassName
// const heading = document.getElementsByClassName('heading');
// 4. querySelector
// const heading = document.querySelector('.heading');
// 5. querySelectorAll
// const heading = document.querySelectorAll('.heading');
// console.log(heading);

// Traverse DOM
// 1. parentNode

// const heading = document.querySelector('.heading');
// const parent = heading.parentNode;
// console.log(parent);

// 2. childNodes
// const parent = document.querySelector('.parent');
// console.log(parent.childNodes);

// 3. nextElementSibling
// const heading = document.querySelector(".heading");
// console.log(heading.nextElementSibling);
// console.log(heading.nextElementSibling);

// 3. previousElementSibling
// const subHeading = document.querySelector('h3');
// console.log(subHeading.previousElementSibling);

// Manipulation
// const heading = document.querySelector(".heading");
// heading.innerHTML = 'Web dev is awesome!';
// heading.style.color = 'red';
// heading.style.fontSize = '100px';
// heading.classList.add('title');
// heading.classList.remove('heading');

// Create elements
// const heading = document.createElement('h1');
// heading.innerHTML = 'Javascript is awesome!';
// heading.classList.add('title');
// const parent = document.querySelector('.parent');
// parent.appendChild(heading);

// const subHeading = document.createElement('h3');
// subHeading.innerHTML = 'Web dev is awesome!';
// heading.insertAdjacentElement('afterend', subHeading);

// console.log(heading);

// ======================================================
// 4 Pillars of DOM manipulation
// - Selection of the element - getElementById, getElementsByTagName, getElementsByClassName, querySelector, querySelectorAll
// - Changing the element - innerHTML, innerText, style, classList
// - Changing element Css
// - Event Listeners

// Selecting the element
const heading = document.querySelector(".heading");

// Changing the html content of the element
// heading.innerHTML = "Web dev is awesome!";
heading.textContent = "Web dev is amazing!";

// console.log(heading.innerHTML);
// console.log(heading.textContent);

// Changing the style
heading.style.color = "red";

heading.addEventListener("mouseup", () => {
  heading.style.color = "blue";
  alert("You clicked on the heading");
});
