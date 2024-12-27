# **DOM (Document Object Model)** and **BOM (Browser Object Model)**

## **1. DOM (Document Object Model)**
The DOM represents the structure of an HTML document as a tree, allowing you to interact with and manipulate its elements.

---

### **1.1 Accessing DOM Elements**

| Method                               | Description                                                             |
|--------------------------------------|-------------------------------------------------------------------------|
| `document.getElementById(id)`        | Selects an element by its ID.                                           |
| `document.getElementsByClassName(class)` | Returns a collection of elements with the specified class name.        |
| `document.getElementsByTagName(tag)` | Returns a collection of elements with the specified tag name.           |
| `document.querySelector(selector)`   | Returns the first element that matches the CSS selector.                |
| `document.querySelectorAll(selector)`| Returns a NodeList of all elements matching the CSS selector.           |

---

### **1.2 Traversing DOM Nodes**

| Property/Method                     | Description                                                             |
|-------------------------------------|-------------------------------------------------------------------------|
| `parentNode`                        | Returns the parent node of the element.                                 |
| `childNodes`                        | Returns all child nodes (including text and comment nodes).             |
| `children`                          | Returns only child elements (ignores text and comment nodes).           |
| `firstChild`                        | Returns the first child node (may include text nodes).                  |
| `lastChild`                         | Returns the last child node.                                            |
| `firstElementChild`                 | Returns the first child element.                                        |
| `lastElementChild`                  | Returns the last child element.                                         |
| `nextSibling`                       | Returns the next sibling node (text nodes included).                    |
| `nextElementSibling`                | Returns the next sibling element.                                       |
| `previousSibling`                   | Returns the previous sibling node.                                      |
| `previousElementSibling`            | Returns the previous sibling element.                                   |

---

### **1.3 Creating and Modifying Elements**

| Method/Property                     | Description                                                             |
|-------------------------------------|-------------------------------------------------------------------------|
| `document.createElement(tag)`       | Creates a new HTML element.                                             |
| `document.createTextNode(text)`     | Creates a new text node.                                                |
| `element.appendChild(node)`         | Adds a node to the end of the element's children.                       |
| `element.insertBefore(newNode, referenceNode)` | Inserts a new node before a reference node.                  |
| `element.removeChild(node)`         | Removes a child node.                                                   |
| `element.replaceChild(newNode, oldNode)` | Replaces a child node with a new node.                              |
| `element.innerHTML`                 | Gets/sets the HTML content inside an element.                           |
| `element.textContent`               | Gets/sets the text content of an element.                               |
| `element.setAttribute(name, value)` | Sets an attribute to the specified value.                               |
| `element.getAttribute(name)`        | Gets the value of an attribute.                                         |
| `element.removeAttribute(name)`     | Removes an attribute from the element.                                  |
| `element.classList.add(name)`       | Adds a class to the element.                                            |
| `element.classList.remove(name)`    | Removes a class from the element.                                       |
| `element.classList.toggle(name)`    | Toggles a class on or off.                                              |
| `element.style.property`            | Sets an inline style property (e.g., `element.style.color = 'red';`).    |

---

### **1.4 Events**

| Method/Property                     | Description                                                             |
|-------------------------------------|-------------------------------------------------------------------------|
| `addEventListener(event, handler)`  | Attaches an event listener to an element.                               |
| `removeEventListener(event, handler)` | Removes an event listener.                                           |
| Common Events:                      | **`click`**, **`mouseover`**, **`mouseout`**, **`keydown`**, **`keyup`**, **`submit`** |
| `event.target`                      | Refers to the element where the event occurred.                         |
| `event.preventDefault()`            | Prevents the default action of the event (e.g., form submission).       |
| `event.stopPropagation()`           | Stops the event from bubbling up or down the DOM.                       |

---

## **2. BOM (Browser Object Model)**

The BOM allows you to interact with the browser and its features, such as the browser window, history, location, and navigator.

---

### **2.1 `window` Object**

The `window` object represents the browser's window and is the global object in JavaScript.

| Property/Method                     | Description                                                             |
|-------------------------------------|-------------------------------------------------------------------------|
| `window.alert(message)`             | Displays an alert dialog with a message.                                |
| `window.confirm(message)`           | Displays a confirmation dialog. Returns `true` or `false`.              |
| `window.prompt(message, default)`   | Displays a prompt dialog. Returns user input or `null`.                 |
| `window.open(url, name, specs)`     | Opens a new browser window/tab.                                         |
| `window.close()`                    | Closes the current window.                                              |
| `window.setTimeout(function, ms)`   | Executes a function after a specified delay.                            |
| `window.setInterval(function, ms)`  | Repeatedly executes a function at the specified interval.               |
| `window.clearTimeout(id)`           | Cancels a timeout.                                                      |
| `window.clearInterval(id)`          | Cancels an interval.                                                    |

---

### **2.2 `location` Object**

The `location` object contains information about the current URL and allows navigation.

| Property/Method                     | Description                                                             |
|-------------------------------------|-------------------------------------------------------------------------|
| `window.location.href`              | Gets/sets the URL of the current page.                                  |
| `window.location.hostname`          | Gets the domain name of the web host.                                   |
| `window.location.pathname`          | Gets the path of the current page.                                      |
| `window.location.search`            | Gets the query string (e.g., `?id=1`).                                  |
| `window.location.hash`              | Gets/sets the hash portion of the URL.                                  |
| `window.location.reload()`          | Reloads the current page.                                               |
| `window.location.assign(url)`       | Navigates to a new URL.                                                 |
| `window.location.replace(url)`      | Replaces the current URL (no history entry).                            |

---

### **2.3 `navigator` Object**

The `navigator` object provides information about the user's browser.

| Property/Method                     | Description                                                             |
|-------------------------------------|-------------------------------------------------------------------------|
| `navigator.userAgent`               | Returns the browser's user agent string.                                |
| `navigator.language`                | Returns the browser's language (e.g., `en-US`).                         |
| `navigator.platform`                | Returns the user's platform (e.g., `Win32`, `MacIntel`).                |
| `navigator.geolocation`             | Provides access to geolocation features (latitude/longitude).           |
| `navigator.onLine`                  | Returns `true` if the browser is online.                                |

---

### **2.4 `history` Object**

The `history` object allows navigation through the browser history.

| Method                              | Description                                                             |
|-------------------------------------|-------------------------------------------------------------------------|
| `history.back()`                    | Navigates to the previous page.                                         |
| `history.forward()`                 | Navigates to the next page.                                             |
| `history.go(n)`                     | Navigates `n` steps forward or backward in the history.                 |
| `history.pushState(state, title, url)` | Adds a new entry to the history stack.                                |
| `history.replaceState(state, title, url)` | Replaces the current history entry.                                 |

---

### **2.5 `screen` Object**

The `screen` object provides information about the user's screen.

| Property                            | Description                                                             |
|-------------------------------------|-------------------------------------------------------------------------|
| `screen.width`                      | Returns the width of the user's screen.                                 |
| `screen.height`                     | Returns the height of the user's screen.                                |
| `screen.availWidth`                 | Returns the width of the screen available for use.                      |
| `screen.availHeight`                | Returns the height of the screen available for use.                     |
| `screen.colorDepth`                 | Returns the bit depth of the color palette.                             |

---

### **Cheat Sheet Summary**

| Concept           | Key Objects/Methods |
|--------------------|---------------------|
| DOM Manipulation   | `document`, `element`, `querySelector` |
| Event Handling     | `addEventListener`, `event.preventDefault()` |
| BOM Interaction    | `window`, `location`, `navigator`, `history`, `screen` |
| Asynchronous Tasks | `setTimeout`, `setInterval` |







## Example for DOM & BOM:

---

## **1. DOM (Document Object Model)**

### **1.1 Accessing DOM Elements**

1. **`document.getElementById(id)`**
   ```html
   <div id="example">Hello</div>
   <script>
       const element = document.getElementById('example');
       console.log(element.innerText); // Output: Hello
   </script>
   ```

2. **`document.getElementsByClassName(class)`**
   ```html
   <div class="example">One</div>
   <div class="example">Two</div>
   <script>
       const elements = document.getElementsByClassName('example');
       console.log(elements[1].innerText); // Output: Two
   </script>
   ```

3. **`document.getElementsByTagName(tag)`**
   ```html
   <p>Paragraph 1</p>
   <p>Paragraph 2</p>
   <script>
       const paragraphs = document.getElementsByTagName('p');
       console.log(paragraphs[0].innerText); // Output: Paragraph 1
   </script>
   ```

4. **`document.querySelector(selector)`**
   ```html
   <div class="box">Box 1</div>
   <div class="box">Box 2</div>
   <script>
       const firstBox = document.querySelector('.box');
       console.log(firstBox.innerText); // Output: Box 1
   </script>
   ```

5. **`document.querySelectorAll(selector)`**
   ```html
   <div class="item">Item 1</div>
   <div class="item">Item 2</div>
   <script>
       const items = document.querySelectorAll('.item');
       items.forEach(item => console.log(item.innerText));
       // Output: Item 1
       // Output: Item 2
   </script>
   ```

---

### **1.2 Traversing DOM Nodes**

1. **`parentNode`**
   ```html
   <div id="parent">
       <span id="child">Child</span>
   </div>
   <script>
       const child = document.getElementById('child');
       console.log(child.parentNode.id); // Output: parent
   </script>
   ```

2. **`childNodes`**
   ```html
   <div id="example">Hello <b>World</b></div>
   <script>
       const node = document.getElementById('example');
       console.log(node.childNodes.length); // Output: 3 (includes text nodes)
   </script>
   ```

3. **`children`**
   ```html
   <ul id="list">
       <li>Item 1</li>
       <li>Item 2</li>
   </ul>
   <script>
       const list = document.getElementById('list');
       console.log(list.children.length); // Output: 2
   </script>
   ```

4. **`nextElementSibling`**
   ```html
   <div>First</div>
   <div>Second</div>
   <script>
       const first = document.querySelector('div');
       console.log(first.nextElementSibling.innerText); // Output: Second
   </script>
   ```

---

### **1.3 Creating and Modifying Elements**

1. **`document.createElement(tag)`**
   ```html
   <div id="container"></div>
   <script>
       const div = document.createElement('div');
       div.innerText = 'Hello World';
       document.getElementById('container').appendChild(div);
   </script>
   ```

2. **`element.innerHTML`**
   ```html
   <div id="example"></div>
   <script>
       const div = document.getElementById('example');
       div.innerHTML = '<strong>Bold Text</strong>';
   </script>
   ```

3. **`element.setAttribute(name, value)`**
   ```html
   <div id="box"></div>
   <script>
       const box = document.getElementById('box');
       box.setAttribute('data-value', '123');
       console.log(box.getAttribute('data-value')); // Output: 123
   </script>
   ```

---

### **1.4 Events**

1. **`addEventListener(event, handler)`**
   ```html
   <button id="clickMe">Click Me</button>
   <script>
       const button = document.getElementById('clickMe');
       button.addEventListener('click', () => alert('Button clicked!'));
   </script>
   ```

2. **`event.preventDefault()`**
   ```html
   <a href="https://example.com" id="link">Go to Example</a>
   <script>
       const link = document.getElementById('link');
       link.addEventListener('click', event => {
           event.preventDefault();
           alert('Link click prevented!');
       });
   </script>
   ```

---

## **2. BOM (Browser Object Model)**

### **2.1 `window` Object**

1. **`window.alert(message)`**
   ```html
   <script>
       alert('Hello, world!');
   </script>
   ```

2. **`window.setTimeout(function, ms)`**
   ```html
   <script>
       setTimeout(() => console.log('Hello after 2 seconds'), 2000);
   </script>
   ```

---

### **2.2 `location` Object**

1. **`window.location.href`**
   ```html
   <script>
       console.log(window.location.href); // Logs the current URL
   </script>
   ```

2. **`window.location.reload()`**
   ```html
   <script>
       // Reloads the page
       // window.location.reload();
   </script>
   ```

---

### **2.3 `navigator` Object**

1. **`navigator.userAgent`**
   ```html
   <script>
       console.log(navigator.userAgent); // Logs the browser's user agent
   </script>
   ```

---

### **2.4 `history` Object**

1. **`history.back()`**
   ```html
   <script>
       // Moves to the previous page
       // history.back();
   </script>
   ```

---

### **2.5 `screen` Object**

1. **`screen.width`**
   ```html
   <script>
       console.log(screen.width); // Logs the screen width
   </script>
   ```

---

These examples demonstrate how to use the DOM and BOM methods and properties in practical scenarios. Let me know if you need further clarification!