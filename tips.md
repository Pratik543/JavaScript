# Tips to write better JavaScript

## Avoid using "var"

If a variable is defined in a loop or in an if statement, it can be accessed outside the block and accidentally redefined leading to an error in the program. So, we should avoid using `var` to declare variables. Use `let` and `const` instead!

## Reduce Activity in Loops

Each statement in a loop, including the `for` statement, is executed for each iteration of the loop. Statements or assignments that can be placed outside the loop will make the loop run faster.

```javascript
for (let i = 0; i < arr.length; i++) {
  // statement
}

let len = arr.length;
for (let i = 0; i < len; i++) {
  // statement
}
```

## Reduce DOM Access

Accessing the HTML DOM is very slow compared to other JavaScript statements. If you expect to access a DOM element several times, access it once, and use it as a local variable.

```javascript
const obj = document.getElementById("demo");
obj.innerHTML = "Hello";
```

## Use `defer` attribute in script tags

We are often told to put our script tags at the end of the body tag. Putting your scripts at the bottom of the page body lets the browser load the page first. However, this sometimes can create some issues. An alternative to this is using a `defer` attribute in the script tag. The `defer` attribute specifies that the script should be executed after the page has finished parsing. This attribute only works for external script files.

```html
<script defer src="script.js"></script>
```

## Avoid unnecessary declarations

Some declarations can be avoided altogether, so only declare when it is strictly necessary. Too many declarations may hint at a lack of proper code design or declaration consideration.

## Declare with a meaning

Make your names descriptive. Sure, using names that are just a few characters long makes them easier to type, but I guarantee you that you won't remember what the variables represent when you look at the script after a long time. So, give a meaningful name.

Example: If you want a variable to represent a user's name, use "User Name" or `userName` instead of `un` or `usrnm`.
