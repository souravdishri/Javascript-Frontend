# JavaScript Events Guide

## Event Properties Explained with Examples

### 1. `type`

- **Definition**: Returns the type of event (e.g., "click", "keydown").
- **Example**:
  ```js
  document.getElementById('owl').addEventListener('click', function (e) {
      console.log(e.type);  // Output: "click"
  });
  ```

### 2. `timestamp`

- **Definition**: Returns the time (in milliseconds) when the event occurred.
- **Example**:
  ```js
  document.getElementById('owl').addEventListener('click', function (e) {
      console.log(e.timeStamp);  // Output: Time elapsed since the page loaded
  });
  ```

### 3. `defaultPrevented`

- **Definition**: Checks if `preventDefault()` was called to stop the default action.
- **Example** (Prevent Google link from opening):
  ```js
  document.getElementById('google').addEventListener('click', function (e) {
      e.preventDefault();  // Prevents navigation
      console.log(e.defaultPrevented);  // Output: true
  });
  ```

### 4. `target`

- **Definition**: Returns the element that triggered the event.
- **Example**:
  ```js
  document.getElementById('images').addEventListener('click', function (e) {
      console.log(e.target);  // Output: The clicked element inside #images (like an <img>)
  });
  ```

### 5. `toElement` (Deprecated, use `target` instead)

- **Definition**: Returns the element the pointer moved to.
- **Example**:
  ```js
  document.getElementById('images').addEventListener('mouseover', function (e) {
      console.log(e.toElement);  // Output: Deprecated, use e.target instead
  });
  ```

### 6. `srcElement` (Same as `target`, but older version)

- **Definition**: Returns the element that triggered the event (same as `target`).
- **Example**:
  ```js
  document.getElementById('images').addEventListener('click', function (e) {
      console.log(e.srcElement);  // Output: Same as e.target (for older browsers)
  });
  ```

### 7. `currentTarget`

- **Definition**: Refers to the element where the event handler is attached.
- **Example**:
  ```js
  document.getElementById('images').addEventListener('click', function (e) {
      console.log(e.currentTarget);  // Output: <ul id="images">
  });
  ```

### 8. `clientX`, `clientY`

- **Definition**: Returns the X and Y coordinates of the mouse pointer relative to the viewport.
- **Example**:
  ```js
  document.getElementById('owl').addEventListener('click', function (e) {
      console.log(e.clientX, e.clientY);  // Output: Mouse position in the viewport
  });
  ```

### 9. `screenX`, `screenY`

- **Definition**: Returns the X and Y coordinates of the mouse pointer relative to the screen.
- **Example**:
  ```js
  document.getElementById('owl').addEventListener('click', function (e) {
      console.log(e.screenX, e.screenY);  // Output: Mouse position in the screen
  });
  ```

### 10. `altKey`, `ctrlKey`, `shiftKey`

- **Definition**: Returns `true` if the corresponding key was pressed during the event.
- **Example**:
  ```js
  document.getElementById('owl').addEventListener('click', function (e) {
      console.log(e.altKey, e.ctrlKey, e.shiftKey);  // Output: true/false for each key
  });
  ```

### 11. `key` (Recommended) & `keyCode` (Deprecated)

- **Definition**:
  - `event.key`: Returns the actual key pressed as a string (e.g., "a", "Enter", "ArrowUp").
  - `event.keyCode`: Returns the numeric key code (deprecated).

- **Example (Recommended `event.key`)**:
  ```js
  document.addEventListener('keydown', function (e) {
      console.log(`Key pressed: ${e.key}`);  // Output: "a", "Enter", "ArrowUp", etc.
  });
  ```

- **Example (Deprecated `event.keyCode`)**:
  ```js
  document.addEventListener('keydown', function (e) {
      console.log(`Key code: ${e.keyCode}`);  // Output: Numeric key code (e.g., 65 for "a")
  });
  ```

## Advanced Event Concepts & Best Practices

### Practice Event Handling
- Try handling different event types like `click`, `mouseover`, `keydown`, `keyup`, `scroll`, and `resize`.
- **Example:**
  ```js
  document.addEventListener('scroll', function () {
      console.log("Page is being scrolled");
  });
  ```

### Understanding Event Propagation
- Learn how events propagate through bubbling and capturing.
- **Example:**
  ```js
  document.body.addEventListener('click', function () {
      console.log("Body clicked");
  }, true); // Capturing phase
  ```

### Optimizing with Event Delegation
- Instead of attaching multiple event listeners, use delegation.
- **Example:**
  ```js
  document.getElementById('list').addEventListener('click', function (e) {
      if (e.target.tagName === 'LI') {
          console.log("List item clicked:", e.target.innerText);
      }
  });
  ```

### Preventing Unwanted Behaviors
- Use `preventDefault()` to stop default actions and `stopPropagation()` to prevent bubbling.
- **Example:**
  ```js
  document.getElementById('form').addEventListener('submit', function (e) {
      e.preventDefault();
      console.log("Form submission prevented");
  });
  ```

### Optimizing Performance with Throttling & Debouncing
- **Example (Throttle):**
  ```js
  function throttle(func, limit) {
      let lastFunc;
      return function (...args) {
          if (!lastFunc) {
              func.apply(this, args);
              lastFunc = setTimeout(() => lastFunc = null, limit);
          }
      };
  }
  window.addEventListener('scroll', throttle(() => console.log("Throttled scroll"), 200));
  ```

### Exploring Mobile Interactions
- Handle touch events like `touchstart`, `touchmove`, `touchend`.
- **Example:**
  ```js
  document.getElementById('box').addEventListener('touchstart', function () {
      console.log("Touch event detected");
  });
  ```

By mastering these concepts, you’ll have full control over JavaScript event handling! 🚀

