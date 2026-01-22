# Dom Document Object Model

- Represent structure of web page (Using Tree like structure)
- Each element - node in tree
- These nodes can be accessed, modified, and manipulated using programming languages like JavaScript

## Pillers Of DOM (4)

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
      elem.addEventListener('event', function () {
        // changing css/HTML
      });
      ```

    - Events:
      - Mouse Events: click, dblclick, mousedown, mouseup, contextmenu, mouseout, mousewheel, mouseover
      - Touch Events: touchstart, touchend, touchmove, touchcancel
      - Keyboard Events: keydown, keyup, keypress
      - Form Events: focus, blur, change, submit
      - Window Events: resize, scroll, load, unload, hashchange



**JavaScript DOM Methods**

* **Accessing Elements**
    * Find element by ID:
        ```javascript
        document.getElementById("id");
        ```
    * Find elements by class:
        ```javascript
        document.getElementsByClassName("class");
        ```
    * Find elements by name attribute:
        ```javascript
        document.getElementsByName("name");
        ```
    * Find element by tag:
        ```javascript
        document.getElementsByTagName("tag");
        ```
    * Find first element matching selector:
        ```javascript
        document.querySelector("selector");
        ```
    * Find all elements matching selector:
        ```javascript
        document.querySelectorAll("selector");
        ```

* **Creating/Appending Elements**
    * Create element node:
        ```javascript
        document.createElement('name');
        ```
    * Create text node:
        ```javascript
        document.createTextNode('text');
        ```
    * Append child to element:
        ```javascript
        elem.appendChild(child);
        ```
    * Remove child from element:
        ```javascript
        elem.removeChild(child);
        ```
    * Replace child with new child:
        ```javascript
        elem.replaceChild(newChild, oldChild);
        ```

* **Modifying Elements**
    * Modify element outer HTML:
        ```javascript
        elem.outerHTML = "<h2>OuterHTML</h2>";
        ```
    * Modify element inner HTML:
        ```javascript
        elem.innerHTML = "New <strong>inner</strong> text";
        ```
    * Modify element text content:
        ```javascript
        elem.textContent = "New textContent";
        ```
    * Modify element style:
        ```javascript
        elem.style.color = "blue";
        ```
    Example:
    ```html
                       OuterHtml
     |------------------------------------------------------|
     |                                  TextContent         |
     |                                  |-------|           |
    <p>This is a paragraph with <strong>text data</strong></p>
                                    |-----------------|
                                          InnerHtml

    ```

* **Accessing Parent, Children, Siblings**
    * Access element children:
        ```javascript
        elem.children;
        elem.childNodes;
        ```
    * Get first child element:
        ```javascript
        elem.firstChildElement;
        elem.firstChild;
        ```
    * Get last child element:
        ```javascript
        elem.lastChildElement;
        elem.lastChild;
        ```
    * Get parent of element:
        ```javascript
        child.parentNode;
        ```
    * Get previous sibling of element:
        ```javascript
        child.previousSibling;
        ```
    * Get next sibling of element:
        ```javascript
        child.nextSibling;
        ```
    * Get element node name:
        ```javascript
        child.nodeName;
        ```
    * Get element node type:
        ```javascript
        child.nodeType;
        ```
    * Get element node value:
        ```javascript
        child.nodeValue;
        ```

* **Modifying Attributes**
    * Get current attribute value:
        ```javascript
        elem.getAttribute("title");
        ```
    * Set attribute with new value:
        ```javascript
        elem.setAttribute('title', 'new title');
        ```
    * Check if attribute exists in element:
        ```javascript
        elem.hasAttribute("title");
        ```
    * Remove attribute exists in element:
        ```javascript
        elem.removeAttribute("title");
        ```

* **Modifying Element Classes**
    * Access element classes as a list:
        ```javascript
        elem.classList
        ```
    * Add class to element:
        ```javascript
        elem.classList.add('my-class');
        ```
    * Remove class from element:
        ```javascript
        elem.classList.remove('my-class');
        ```
    * Toggle class on element:
        ```javascript
        elem.classList.toggle('my-class');
        ```
    * Check if class is applied to element:
        ```javascript
        elem.classList.contains('my-class');
        ```
 