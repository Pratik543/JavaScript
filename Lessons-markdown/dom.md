->😎Dom->Document Object Model

- Represent structure of web page (Using Tree like structure)
  - Each element - node in tree
- These nodes can be accessed, modified, and manipulated using programming languages like JavaScript

-->Pillers Of DOM (4)

1.  Selection of the elements

    - querySelector

      - `document.querySelector("#id_name/.class_name/element");` //select only first
      - `document.querySelectorAll("#id_name/.class_name/element");` //select many elements and return a nodeList
      - To access each element of the nodeList (set of many elements), use the forEach method:
        ```
        elem.forEach(function(e){
            //logic
        });
        ```

    - idSelector

      - `document.getElementById("id_name");` // don't use (#)

    - classSelector
      - `document.getElementsByClassName("class_name");` // don't use (.)

2.  Changing HTML

    - `elem.innerHTML = "any content";` // will change the original content

             The innerHTML property is used to get or set the HTML content of an element . It returns the HTML markup as a string, including any HTML tags and formatting. When setting the innerHTML, any existing content within the element will be replaced.

    - `elem.textContent = "content you want put";` // this will also change the content

             The textContent property is used to get or set the text content of an element and its descendants . It returns the text content as a string, without any HTML tags or formatting. When setting the textContent, any existing content within the element will be replaced.

3.  Changing CSS

    - `elem.style.property = "value";` // use camelCase for the property (e.g., backgroundColor, color)

4.  Event Listener

    - ```js
      elem.addEventListener("event", function () {
        // changing css/HTML
      });
      ```

    - Events:
      - Mouse Events: click, dblclick, mousedown, mouseup, contextmenu, mouseout, mousewheel, mouseover
      - Touch Events: touchstart, touchend, touchmove, touchcancel
      - Keyboard Events: keydown, keyup, keypress
      - Form Events: focus, blur, change, submit
      - Window Events: resize, scroll, load, unload, hashchange
