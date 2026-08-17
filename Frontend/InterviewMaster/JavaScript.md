# JavaScript Master Interview Questions

## Complete Theory + Internals + Optimization + Interview Confidence

> **Goal:** Master JavaScript theory for frontend/full-stack interviews.
>
> For every topic, be able to answer:
> **What is it? → Why does it exist? → How does it work? → When do you use it? → When should you avoid it? → What are the trade-offs?**

---

# 1. JavaScript Fundamentals

* [ ] What is JavaScript?
* [ ] Why was JavaScript created?
* [ ] What problems does JavaScript solve?
* [ ] What are the main features of JavaScript?
* [ ] Is JavaScript interpreted or compiled?
* [ ] What is a scripting language?
* [ ] Is JavaScript single-threaded?
* [ ] What does single-threaded mean?
* [ ] Is JavaScript synchronous or asynchronous?
* [ ] What is ECMAScript?
* [ ] What is the relationship between JavaScript and ECMAScript?
* [ ] What is a JavaScript engine?
* [ ] What is V8?
* [ ] What happens when JavaScript code is executed?
* [ ] What is source code?
* [ ] What is bytecode?
* [ ] What is machine code?
* [ ] What is JIT compilation?
* [ ] Why does JavaScript use JIT compilation?
* [ ] What is runtime?
* [ ] What is the JavaScript runtime environment?
* [ ] What is the difference between JavaScript and Java?
* [ ] What are the different environments where JavaScript can run?
* [ ] What is the difference between browser JavaScript and Node.js?

---

# 2. Variables

* [ ] What is a variable?
* [ ] What is the difference between `var`, `let`, and `const`?
* [ ] Why was `let` introduced?
* [ ] Why was `const` introduced?
* [ ] Can a `const` object be modified?
* [ ] Can a `const` array be modified?
* [ ] Can a `let` variable be redeclared?
* [ ] Can a `var` variable be redeclared?
* [ ] Can a `const` variable be redeclared?
* [ ] What is variable reassignment?
* [ ] What is variable declaration?
* [ ] What is initialization?
* [ ] What is the difference between declaration and initialization?
* [ ] What is block scope?
* [ ] What is function scope?
* [ ] What is global scope?
* [ ] Why should `var` generally be avoided in modern JavaScript?
* [ ] When would you use `let`?
* [ ] When would you use `const`?
* [ ] What happens when a variable is declared without initialization?

---

# 3. Data Types

* [ ] What are JavaScript primitive data types?
* [ ] What are non-primitive/reference types?
* [ ] What is a primitive value?
* [ ] What is a reference value?
* [ ] What is the difference between primitive and reference types?
* [ ] What is `string`?
* [ ] What is `number`?
* [ ] What is `boolean`?
* [ ] What is `undefined`?
* [ ] What is `null`?
* [ ] What is `bigint`?
* [ ] What is `symbol`?
* [ ] What is `object`?
* [ ] Why is `typeof null` equal to `"object"`?
* [ ] What does `typeof` do?
* [ ] What does `typeof undefined` return?
* [ ] What does `typeof NaN` return?
* [ ] What does `typeof function` return?
* [ ] What is `NaN`?
* [ ] Why is `NaN` considered a number?
* [ ] How do you check whether a value is `NaN`?
* [ ] What is the difference between `null` and `undefined`?
* [ ] When should you use `null`?
* [ ] When does JavaScript produce `undefined`?

---

# 4. Type Conversion and Coercion

* [ ] What is type conversion?
* [ ] What is type coercion?
* [ ] What is implicit coercion?
* [ ] What is explicit coercion?
* [ ] What is the difference between `==` and `===`?
* [ ] Why is `===` generally preferred?
* [ ] What happens during `==` comparison?
* [ ] What is abstract equality?
* [ ] What is strict equality?
* [ ] What is `Object.is()`?
* [ ] What is the difference between `Object.is()` and `===`?
* [ ] What happens when a string is added to a number?
* [ ] What happens when a string is subtracted from a number?
* [ ] What is numeric coercion?
* [ ] What is string coercion?
* [ ] What is boolean coercion?
* [ ] What are truthy values?
* [ ] What are falsy values?
* [ ] What are all falsy values in JavaScript?
* [ ] Why is an empty array truthy?
* [ ] Why is an empty object truthy?
* [ ] What is `Number()`?
* [ ] What is `String()`?
* [ ] What is `Boolean()`?
* [ ] What is `parseInt()`?
* [ ] What is `parseFloat()`?
* [ ] What is the difference between `Number()` and `parseInt()`?
* [ ] What are common coercion interview traps?

---

# 5. Operators

* [ ] What are arithmetic operators?
* [ ] What are comparison operators?
* [ ] What are logical operators?
* [ ] What are assignment operators?
* [ ] What is the ternary operator?
* [ ] What is the nullish coalescing operator?
* [ ] What is optional chaining?
* [ ] What is the difference between `||` and `??`?
* [ ] What is the difference between `&&` and `||`?
* [ ] What does short-circuit evaluation mean?
* [ ] When should you use `??` instead of `||`?
* [ ] What does the `!` operator do?
* [ ] What is the exponentiation operator?
* [ ] What is the difference between prefix and postfix increment?
* [ ] What is operator precedence?
* [ ] How does JavaScript determine which operator executes first?

---

# 6. Scope

* [ ] What is scope?
* [ ] What are the different types of scope?
* [ ] What is global scope?
* [ ] What is function scope?
* [ ] What is block scope?
* [ ] What is lexical scope?
* [ ] What is scope chaining?
* [ ] How does JavaScript find a variable?
* [ ] What happens when a variable isn't found in the current scope?
* [ ] What is the scope chain?
* [ ] Why is lexical scope important?
* [ ] What is a global variable?
* [ ] Why should global variables be avoided?
* [ ] How does `let` differ from `var` in scope?
* [ ] How does `const` differ from `var` in scope?

---

# 7. Hoisting

* [ ] What is hoisting?
* [ ] Is hoisting actually moving variables to the top?
* [ ] How are `var` declarations hoisted?
* [ ] How are `let` declarations hoisted?
* [ ] How are `const` declarations hoisted?
* [ ] How are function declarations hoisted?
* [ ] Are function expressions hoisted?
* [ ] What is the Temporal Dead Zone?
* [ ] Why does the Temporal Dead Zone exist?
* [ ] When does the Temporal Dead Zone begin?
* [ ] When does the Temporal Dead Zone end?
* [ ] Why can you access a function declaration before its definition?
* [ ] Why can't you access a `let` variable before initialization?

---

# 8. Execution Context

* [ ] What is an execution context?
* [ ] What is the global execution context?
* [ ] What is a function execution context?
* [ ] What happens when JavaScript creates an execution context?
* [ ] What is the creation phase?
* [ ] What is the execution phase?
* [ ] What is the execution context stack?
* [ ] What is the call stack?
* [ ] How does the call stack work?
* [ ] What happens when a function is called?
* [ ] What happens when a function returns?
* [ ] What causes "Maximum call stack size exceeded"?
* [ ] How is scope related to execution context?
* [ ] What is the relationship between execution context and lexical environment?

---

# 9. Lexical Environment

* [ ] What is a lexical environment?
* [ ] What is an environment record?
* [ ] What is the outer lexical environment reference?
* [ ] How does lexical environment enable closures?
* [ ] What is the difference between lexical environment and scope?
* [ ] How does JavaScript resolve variables through lexical environments?

---

# 10. Functions

* [ ] What is a function?
* [ ] Why are functions first-class citizens in JavaScript?
* [ ] What does first-class function mean?
* [ ] What is a function declaration?
* [ ] What is a function expression?
* [ ] What is the difference between function declaration and function expression?
* [ ] What is an anonymous function?
* [ ] What is a named function expression?
* [ ] What is an immediately invoked function expression?
* [ ] What is an IIFE?
* [ ] Why were IIFEs commonly used before ES modules?
* [ ] What is a callback function?
* [ ] What is a higher-order function?
* [ ] What is a pure function?
* [ ] What is an impure function?
* [ ] What is function composition?
* [ ] What is currying?
* [ ] What is partial application?
* [ ] What is recursion?
* [ ] When should recursion be used?
* [ ] What are the risks of recursion in JavaScript?

---

# 11. `this`

* [ ] What is `this`?
* [ ] Why does JavaScript have `this`?
* [ ] How is the value of `this` determined?
* [ ] What is the difference between `this` in regular functions and arrow functions?
* [ ] What is `this` in the global context?
* [ ] What is `this` inside a regular function?
* [ ] What is `this` inside an object method?
* [ ] What is `this` inside an arrow function?
* [ ] What is `this` inside a constructor?
* [ ] What is `this` inside a class method?
* [ ] What happens to `this` when a function is passed as a callback?
* [ ] What does `call()` do?
* [ ] What does `apply()` do?
* [ ] What does `bind()` do?
* [ ] What is the difference between `call`, `apply`, and `bind`?
* [ ] When should you use `bind()`?
* [ ] Can you change `this` inside an arrow function using `call()`?
* [ ] Why don't arrow functions have their own `this`?
* [ ] What is lexical `this`?

---

# 12. Arrow Functions

* [ ] What is an arrow function?
* [ ] Why were arrow functions introduced?
* [ ] How are arrow functions different from regular functions?
* [ ] Do arrow functions have their own `this`?
* [ ] Do arrow functions have their own `arguments`?
* [ ] Can arrow functions be used as constructors?
* [ ] Can arrow functions use `new`?
* [ ] When should you use arrow functions?
* [ ] When might a regular function be preferable?

---

# 13. Closures

* [ ] What is a closure?
* [ ] Why do closures exist?
* [ ] How does a closure work internally?
* [ ] What is lexical scoping's relationship with closures?
* [ ] What are real-world uses of closures?
* [ ] How can closures create private variables?
* [ ] Can closures cause memory leaks?
* [ ] How do closures work with asynchronous code?
* [ ] How do closures work inside loops?
* [ ] Why did `let` solve common closure problems in loops?
* [ ] What is a closure interview question you should be able to solve without running code?

---

# 14. Objects

* [ ] What is an object?
* [ ] How do you create an object?
* [ ] What is object property access?
* [ ] Dot notation vs bracket notation?
* [ ] When should bracket notation be used?
* [ ] What is object destructuring?
* [ ] What is object shorthand?
* [ ] What are computed property names?
* [ ] What is property shorthand?
* [ ] How do you add a property to an object?
* [ ] How do you delete a property?
* [ ] What does `delete` do?
* [ ] How do you check whether an object contains a property?
* [ ] What is `Object.keys()`?
* [ ] What is `Object.values()`?
* [ ] What is `Object.entries()`?
* [ ] What is `Object.assign()`?
* [ ] What is object spread?
* [ ] What is shallow copying?
* [ ] What is deep copying?
* [ ] What are the limitations of object spread?
* [ ] What is `structuredClone()`?
* [ ] When should you use `structuredClone()`?

---

# 15. Object Immutability

* [ ] What does immutability mean?
* [ ] Why is immutability useful?
* [ ] What is `Object.freeze()`?
* [ ] What is `Object.seal()`?
* [ ] What is the difference between freeze and seal?
* [ ] Does `Object.freeze()` deep-freeze an object?
* [ ] What is shallow immutability?
* [ ] Why is immutability important in React?
* [ ] What are the performance trade-offs of immutable updates?

---

# 16. Prototypes

* [ ] What is a prototype?
* [ ] What is the prototype chain?
* [ ] Why does JavaScript use prototypes?
* [ ] What is prototype inheritance?
* [ ] What is `Object.prototype`?
* [ ] What is `__proto__`?
* [ ] What is `prototype`?
* [ ] What is the difference between `prototype` and `__proto__`?
* [ ] How does property lookup work through the prototype chain?
* [ ] What happens when a property doesn't exist on an object?
* [ ] How do you create an object with a specific prototype?
* [ ] What does `Object.create()` do?
* [ ] What does `Object.getPrototypeOf()` do?
* [ ] What does `Object.setPrototypeOf()` do?
* [ ] Why is changing prototypes at runtime generally discouraged?
* [ ] What is prototype pollution?
* [ ] Why is prototype pollution a security concern?

---

# 17. Classes

* [ ] What are JavaScript classes?
* [ ] Why were classes introduced?
* [ ] Are JavaScript classes true classical inheritance?
* [ ] How are classes related to prototypes?
* [ ] What is a constructor?
* [ ] What does `new` do?
* [ ] What is inheritance?
* [ ] What does `extends` do?
* [ ] What does `super()` do?
* [ ] What are static methods?
* [ ] What are private class fields?
* [ ] What are getters and setters?
* [ ] What is method overriding?
* [ ] What is polymorphism?
* [ ] How does JavaScript implement inheritance internally?

---

# 18. `new` Keyword

* [ ] What happens when you use `new`?
* [ ] What object is created?
* [ ] How is the prototype connected?
* [ ] How is `this` assigned?
* [ ] What happens if the constructor returns an object?
* [ ] What happens if the constructor returns a primitive?
* [ ] Can arrow functions be used with `new`?
* [ ] How would you implement a simplified version of `new`?

---

# 19. Arrays

* [ ] What is an array?
* [ ] How are arrays different from objects?
* [ ] How does JavaScript internally represent arrays?
* [ ] What is array indexing?
* [ ] What does `push()` do?
* [ ] What does `pop()` do?
* [ ] What does `shift()` do?
* [ ] What does `unshift()` do?
* [ ] What does `slice()` do?
* [ ] What does `splice()` do?
* [ ] What is the difference between `slice()` and `splice()`?
* [ ] What does `concat()` do?
* [ ] What does `includes()` do?
* [ ] What does `indexOf()` do?
* [ ] What does `find()` do?
* [ ] What does `findIndex()` do?
* [ ] What does `some()` do?
* [ ] What does `every()` do?
* [ ] What does `filter()` do?
* [ ] What does `map()` do?
* [ ] What does `reduce()` do?
* [ ] What does `forEach()` do?
* [ ] What is the difference between `map()` and `forEach()`?
* [ ] What is the difference between `filter()` and `find()`?
* [ ] When should you use `reduce()`?
* [ ] Why shouldn't you use `map()` when you don't need the returned array?
* [ ] Which array methods mutate the original array?
* [ ] Which array methods return a new array?
* [ ] What is array destructuring?
* [ ] What is array spread?
* [ ] What is array-like vs iterable?

---

# 20. Map, Set, WeakMap, WeakSet

* [ ] What is `Map`?
* [ ] Why use `Map` instead of an object?
* [ ] What types of keys can a `Map` have?
* [ ] What is `Set`?
* [ ] When should you use `Set`?
* [ ] What is `WeakMap`?
* [ ] What is `WeakSet`?
* [ ] What is the difference between `Map` and `WeakMap`?
* [ ] What is the difference between `Set` and `WeakSet`?
* [ ] Why are WeakMap and WeakSet related to garbage collection?
* [ ] When would you use WeakMap in a real application?

---

# 21. Strings

* [ ] Are JavaScript strings mutable?
* [ ] What is string immutability?
* [ ] What is a template literal?
* [ ] What is string interpolation?
* [ ] What is `split()`?
* [ ] What is `trim()`?
* [ ] What is `replace()`?
* [ ] What is `replaceAll()`?
* [ ] What is `includes()`?
* [ ] What is `startsWith()`?
* [ ] What is `endsWith()`?
* [ ] What is `substring()`?
* [ ] What is `substr()` and why is it discouraged?
* [ ] What is `slice()` for strings?
* [ ] How does JavaScript handle Unicode strings?

---

# 22. Destructuring and Spread

* [ ] What is destructuring?
* [ ] Why is destructuring useful?
* [ ] What is object destructuring?
* [ ] What is array destructuring?
* [ ] What are default values in destructuring?
* [ ] What is nested destructuring?
* [ ] What is rest syntax?
* [ ] What is spread syntax?
* [ ] What is the difference between rest and spread?
* [ ] How does spread behave with nested objects?
* [ ] How does spread behave with arrays?
* [ ] What happens when objects have duplicate properties during spread?

---

# 23. Modules

* [ ] What is a JavaScript module?
* [ ] Why do we need modules?
* [ ] What is ES Module?
* [ ] What is CommonJS?
* [ ] What is `export`?
* [ ] What is `import`?
* [ ] What is default export?
* [ ] What is named export?
* [ ] What is the difference between default and named exports?
* [ ] What is dynamic import?
* [ ] Why is dynamic import useful?
* [ ] What is module scope?
* [ ] How does module scope differ from global scope?
* [ ] What is tree shaking?
* [ ] Why do ES modules help bundlers optimize applications?
* [ ] What is circular dependency?
* [ ] How can circular dependencies cause problems?

---

# 24. Asynchronous JavaScript

* [ ] What is synchronous execution?
* [ ] What is asynchronous execution?
* [ ] Why does JavaScript need asynchronous programming?
* [ ] What is a blocking operation?
* [ ] What is a non-blocking operation?
* [ ] What is a callback?
* [ ] What is callback hell?
* [ ] How can callback hell be avoided?
* [ ] What is a Promise?
* [ ] Why were Promises introduced?
* [ ] What are the states of a Promise?
* [ ] What does `pending` mean?
* [ ] What does `fulfilled` mean?
* [ ] What does `rejected` mean?
* [ ] What is `.then()`?
* [ ] What is `.catch()`?
* [ ] What is `.finally()`?
* [ ] What is Promise chaining?
* [ ] What happens when a Promise callback returns another Promise?
* [ ] What happens when a Promise callback throws an error?

---

# 25. async/await

* [ ] What is `async`?
* [ ] What is `await`?
* [ ] Why was async/await introduced?
* [ ] Does `async` make a function synchronous?
* [ ] What does an async function return?
* [ ] What happens when you await a Promise?
* [ ] Can you use `await` outside an async function?
* [ ] What is top-level await?
* [ ] How do you handle errors with async/await?
* [ ] What is the difference between `try/catch` and `.catch()`?
* [ ] Does `await` block the entire JavaScript thread?
* [ ] What does `await` actually pause?
* [ ] How do you execute independent API calls in parallel?
* [ ] What is the difference between sequential and parallel `await`?
* [ ] Why can unnecessary `await` reduce performance?

---

# 26. Promise Methods

* [ ] What is `Promise.all()`?
* [ ] When should you use `Promise.all()`?
* [ ] What happens if one Promise rejects inside `Promise.all()`?
* [ ] What is `Promise.allSettled()`?
* [ ] When should you use `Promise.allSettled()`?
* [ ] What is `Promise.race()`?
* [ ] What is `Promise.any()`?
* [ ] What is the difference between `all`, `allSettled`, `race`, and `any`?
* [ ] How would you implement a timeout for a Promise?
* [ ] How would you retry a failed Promise?
* [ ] How would you run multiple API requests concurrently?

---

# 27. Event Loop

* [ ] What is the event loop?
* [ ] Why does JavaScript need an event loop?
* [ ] What is the call stack?
* [ ] What is the task queue?
* [ ] What is the microtask queue?
* [ ] What is the difference between task and microtask?
* [ ] What is a macrotask?
* [ ] What is a microtask?
* [ ] What is the order of execution between synchronous code, microtasks, and tasks?
* [ ] Why does Promise code usually execute before `setTimeout()` callbacks?
* [ ] What is `setTimeout()`?
* [ ] Does `setTimeout(fn, 0)` execute immediately?
* [ ] What is `setInterval()`?
* [ ] What is `queueMicrotask()`?
* [ ] How does the browser event loop work?
* [ ] How can long-running JavaScript block the UI?
* [ ] How would you prevent UI blocking?
* [ ] What is starvation in the event loop?

---

# 28. Callback Queue and Microtasks

* [ ] What goes into the microtask queue?
* [ ] What goes into the task queue?
* [ ] Where do Promise callbacks go?
* [ ] Where does `setTimeout()` go?
* [ ] Where does DOM event handling go?
* [ ] Why are microtasks processed before the next task?
* [ ] Can an infinite chain of microtasks block the browser?
* [ ] How would you explain the event loop on a whiteboard?

---

# 29. Event Handling

* [ ] What is an event?
* [ ] What is event propagation?
* [ ] What is event bubbling?
* [ ] What is event capturing?
* [ ] What is event delegation?
* [ ] Why is event delegation useful?
* [ ] What is `event.target`?
* [ ] What is `event.currentTarget`?
* [ ] What is the difference between `target` and `currentTarget`?
* [ ] What does `preventDefault()` do?
* [ ] What does `stopPropagation()` do?
* [ ] What does `stopImmediatePropagation()` do?
* [ ] How does browser event delegation improve performance?
* [ ] What are passive event listeners?

---

# 30. DOM

* [ ] What is the DOM?
* [ ] Why does the browser create a DOM?
* [ ] How does JavaScript interact with the DOM?
* [ ] What is `querySelector()`?
* [ ] What is `querySelectorAll()`?
* [ ] What is `getElementById()`?
* [ ] What is the difference between Node and Element?
* [ ] How do you create a DOM element?
* [ ] How do you remove a DOM element?
* [ ] What is `innerHTML`?
* [ ] What is `textContent`?
* [ ] What is the difference between `innerHTML` and `textContent`?
* [ ] What is DOM manipulation?
* [ ] Why can excessive DOM manipulation be expensive?

---

# 31. Browser Storage

* [ ] What is localStorage?
* [ ] What is sessionStorage?
* [ ] What is the difference between localStorage and sessionStorage?
* [ ] What are cookies?
* [ ] What is the difference between cookies and localStorage?
* [ ] What is an HttpOnly cookie?
* [ ] What is a Secure cookie?
* [ ] What is SameSite?
* [ ] What are the security risks of localStorage?
* [ ] When should you use cookies?
* [ ] When should you use localStorage?

---

# 32. JSON

* [ ] What is JSON?
* [ ] Why is JSON commonly used in APIs?
* [ ] What does `JSON.stringify()` do?
* [ ] What does `JSON.parse()` do?
* [ ] What happens when you stringify a function?
* [ ] What happens when you stringify `undefined`?
* [ ] What are the limitations of JSON-based deep cloning?
* [ ] Why is `structuredClone()` sometimes better than JSON cloning?

---

# 33. Regular Expressions

* [ ] What is a regular expression?
* [ ] Why are regular expressions useful?
* [ ] What is a regex pattern?
* [ ] What are regex flags?
* [ ] What does `g` mean?
* [ ] What does `i` mean?
* [ ] What does `m` mean?
* [ ] What does `test()` do?
* [ ] What does `match()` do?
* [ ] What does `replace()` do with regex?
* [ ] What are common regex performance problems?
* [ ] When should regex be avoided?

---

# 34. Error Handling

* [ ] What is an exception?
* [ ] What is `try/catch`?
* [ ] What is `finally`?
* [ ] What does `throw` do?
* [ ] What is a custom Error?
* [ ] What is the difference between syntax errors and runtime errors?
* [ ] What is a TypeError?
* [ ] What is a ReferenceError?
* [ ] What is a RangeError?
* [ ] How do you handle asynchronous errors?
* [ ] How do you handle rejected Promises?
* [ ] Why shouldn't errors be silently swallowed?
* [ ] How would you design error handling in a production frontend?

---

# 35. Memory Management

* [ ] How does JavaScript manage memory?
* [ ] What is garbage collection?
* [ ] What is reachability?
* [ ] What is a memory leak?
* [ ] What causes memory leaks in JavaScript?
* [ ] How can event listeners cause memory leaks?
* [ ] How can timers cause memory leaks?
* [ ] How can closures contribute to memory usage?
* [ ] How can global variables create memory problems?
* [ ] How does garbage collection identify unreachable objects?
* [ ] What is mark-and-sweep?
* [ ] How would you debug a memory leak?

---

# 36. Equality and Tricky Values

* [ ] What is the difference between `==`, `===`, and `Object.is()`?
* [ ] Why is `NaN !== NaN`?
* [ ] How do you check whether two values are actually `NaN`?
* [ ] Why is `0 === -0` true?
* [ ] Why does `Object.is(0, -0)` return false?
* [ ] Why is `null == undefined` true?
* [ ] Why is `null === undefined` false?
* [ ] Why is `[] == false` true?
* [ ] Why is `[] === []` false?
* [ ] Why is `{}` === `{}` false?
* [ ] How does JavaScript compare objects?

---

# 37. Pass by Value vs Reference

* [ ] Is JavaScript pass-by-value or pass-by-reference?
* [ ] What happens when a primitive is passed to a function?
* [ ] What happens when an object is passed to a function?
* [ ] Why do object mutations appear to be passed by reference?
* [ ] Can you modify an object's property inside a function?
* [ ] Can you reassign the original object reference from inside a function?
* [ ] How would you explain this concept in an interview?

---

# 38. Functional Programming Concepts

* [ ] What is functional programming?
* [ ] What is a pure function?
* [ ] What is immutability?
* [ ] What is side effect?
* [ ] What is higher-order function?
* [ ] What is function composition?
* [ ] What is currying?
* [ ] What is partial application?
* [ ] Why are pure functions easier to test?
* [ ] Why is immutability useful in frontend development?
* [ ] How do `map`, `filter`, and `reduce` relate to functional programming?

---

# 39. Iterators and Generators

* [ ] What is an iterable?
* [ ] What is an iterator?
* [ ] What is the iterator protocol?
* [ ] What is the iterable protocol?
* [ ] What does `Symbol.iterator` do?
* [ ] What is a generator?
* [ ] What does `function*` mean?
* [ ] What does `yield` do?
* [ ] When should generators be used?
* [ ] How are generators different from normal functions?
* [ ] How does `for...of` work internally?

---

# 40. Symbols

* [ ] What is a Symbol?
* [ ] Why were Symbols introduced?
* [ ] Are Symbols unique?
* [ ] What is `Symbol.iterator`?
* [ ] What are well-known Symbols?
* [ ] Why might Symbols be useful for object properties?

---

# 41. Proxy and Reflect

* [ ] What is a Proxy?
* [ ] Why would you use a Proxy?
* [ ] What are Proxy traps?
* [ ] What is `Reflect`?
* [ ] How are Proxy and Reflect related?
* [ ] What are real-world use cases for Proxy?
* [ ] What are the performance considerations of Proxy?

---

# 42. Dates and Internationalization

* [ ] How does JavaScript represent dates?
* [ ] What is a timestamp?
* [ ] What is UTC?
* [ ] What is local time?
* [ ] Why can JavaScript date handling be tricky?
* [ ] What is `Intl`?
* [ ] What is `Intl.DateTimeFormat`?
* [ ] What is `Intl.NumberFormat`?
* [ ] How would you safely handle dates in a production application?

---

# 43. Performance Optimization

* [ ] How do you optimize JavaScript performance?
* [ ] What makes JavaScript execution slow?
* [ ] What is expensive computation?
* [ ] What is memoization?
* [ ] When should memoization be used?
* [ ] What is lazy evaluation?
* [ ] What is debouncing?
* [ ] What is throttling?
* [ ] Debouncing vs throttling?
* [ ] How do you optimize loops?
* [ ] How do you avoid unnecessary object creation?
* [ ] How do you reduce DOM operations?
* [ ] How do you optimize large arrays?
* [ ] How do you optimize expensive calculations?
* [ ] How do you reduce JavaScript bundle size?
* [ ] What is tree shaking?
* [ ] What is code splitting?
* [ ] What is lazy loading?
* [ ] What is caching?
* [ ] What is browser caching?
* [ ] What is memory optimization?
* [ ] How can closures affect performance?
* [ ] How can excessive Promise creation affect performance?
* [ ] How can unnecessary async/await reduce performance?
* [ ] How would you investigate a slow JavaScript application?

---

# 44. Debouncing and Throttling

* [ ] What is debouncing?
* [ ] What is throttling?
* [ ] When should you debounce?
* [ ] When should you throttle?
* [ ] How would you debounce a search API?
* [ ] How would you throttle a scroll event?
* [ ] What happens if debounce delay is too high?
* [ ] What happens if throttle interval is too high?
* [ ] How would you implement debounce from scratch?
* [ ] How would you implement throttle from scratch?

---

# 45. Security

* [ ] What is XSS?
* [ ] How can JavaScript cause XSS?
* [ ] What is CSRF?
* [ ] What is CORS?
* [ ] What is same-origin policy?
* [ ] What is prototype pollution?
* [ ] Why is `eval()` dangerous?
* [ ] Why should user input be treated as untrusted?
* [ ] What is Content Security Policy?
* [ ] How should authentication tokens be handled?
* [ ] What frontend security mistakes are common?

---

# 46. CORS and Browser Security

* [ ] What is CORS?
* [ ] Why does CORS exist?
* [ ] What is the same-origin policy?
* [ ] What is an origin?
* [ ] What are protocol, domain, and port in an origin?
* [ ] What is a preflight request?
* [ ] What is an OPTIONS request?
* [ ] When does a browser send a preflight request?
* [ ] What are CORS headers?
* [ ] Is CORS a frontend problem or backend problem?
* [ ] Why can't frontend JavaScript simply disable CORS?

---

# 47. Event Loop Interview Scenarios

* [ ] Predict the output of code containing `console.log`, `Promise`, and `setTimeout`.
* [ ] Predict the output when multiple microtasks are created.
* [ ] Predict the output when nested Promises are used.
* [ ] Predict the output when `setTimeout(..., 0)` is used.
* [ ] Predict the output when `async/await` and `setTimeout` are combined.
* [ ] Explain why synchronous code executes first.
* [ ] Explain why Promise callbacks execute before timers.
* [ ] Explain how an async function interacts with the event loop.
* [ ] Explain what happens when the call stack becomes empty.
* [ ] Explain how the browser decides what callback executes next.

---

# 48. Output-Based Interview Questions

* [ ] What is the output of `typeof null` and why?
* [ ] What is the output of `typeof NaN` and why?
* [ ] What is the output of `[] == false` and why?
* [ ] What is the output of `{}` comparisons and why?
* [ ] What happens with `var` inside a loop?
* [ ] What happens with `let` inside a loop?
* [ ] What happens when a closure is created inside a loop?
* [ ] What happens when a function is called before declaration?
* [ ] What happens when a `let` variable is accessed before initialization?
* [ ] What happens when `this` is used inside an arrow function?
* [ ] What happens when an object is copied using spread?
* [ ] What happens when nested objects are copied using spread?
* [ ] What happens when `Promise.all()` contains a rejected Promise?
* [ ] What happens when an async function throws?
* [ ] What happens when `await` receives a non-Promise value?
* [ ] What happens when `setTimeout()` is set to zero?
* [ ] What happens when multiple microtasks continuously schedule more microtasks?

---

# 49. Real Interview Scenario Questions

* [ ] A search input is calling the API on every keystroke. How would you fix it?
* [ ] A page freezes when processing 100,000 records. What would you investigate?
* [ ] A function is executing thousands of times unexpectedly. How would you debug it?
* [ ] A memory leak appears after repeatedly opening and closing a modal. How would you investigate it?
* [ ] An event listener continues running after a component is removed. What could be wrong?
* [ ] An API request returns after the user has navigated away. How should it be handled?
* [ ] Two API requests return in an unexpected order. How would you prevent stale data?
* [ ] A timer continues running after leaving a page. How would you fix it?
* [ ] A frontend application has a large JavaScript bundle. How would you optimize it?
* [ ] A loop processes millions of records and blocks the UI. What would you do?
* [ ] A function is repeatedly creating expensive objects. How would you optimize it?
* [ ] A user scrolls through a very large list and the browser becomes slow. What techniques would you use?
* [ ] A React application has slow search filtering. How would you optimize the JavaScript logic?
* [ ] A browser tab consumes increasing memory over time. How would you debug it?
* [ ] A Promise never resolves. How would you investigate it?
* [ ] An API call needs to be cancelled when a user changes the search query. How would you implement it?
* [ ] Three independent APIs need to execute together. How would you handle them?
* [ ] One API depends on another API's result. How would you structure the requests?
* [ ] Five APIs are independent but one fails. Which Promise method would you use?
* [ ] A calculation takes 2 seconds and blocks the browser. How would you improve the user experience?

---

# 50. JavaScript Architecture

* [ ] How would you structure a large JavaScript application?
* [ ] How would you separate business logic from UI logic?
* [ ] What is separation of concerns?
* [ ] What is modular architecture?
* [ ] Why should modules have a single responsibility?
* [ ] What is dependency injection?
* [ ] Why is dependency injection useful?
* [ ] What is loose coupling?
* [ ] What is high cohesion?
* [ ] What is clean code?
* [ ] What makes JavaScript code maintainable?
* [ ] How do you avoid duplicated logic?
* [ ] How do you design reusable utilities?
* [ ] How do you handle configuration?
* [ ] How do you handle environment variables?

---

# 51. Advanced JavaScript Internals

* [ ] How does the JavaScript engine execute code?
* [ ] What is parsing?
* [ ] What is an Abstract Syntax Tree?
* [ ] What is bytecode?
* [ ] What is JIT compilation?
* [ ] What is optimization inside a JavaScript engine?
* [ ] What is deoptimization?
* [ ] What are hidden classes?
* [ ] What are inline caches?
* [ ] Why can changing object shapes affect performance?
* [ ] What is garbage collection?
* [ ] What is the heap?
* [ ] What is the stack?
* [ ] What is stored in the heap?
* [ ] What is stored on the call stack?
* [ ] How does the engine optimize frequently executed code?

---

# 52. Browser Runtime

* [ ] What is the JavaScript runtime in a browser?
* [ ] What is provided by the browser and what is provided by JavaScript itself?
* [ ] Is `setTimeout()` part of JavaScript?
* [ ] Is `fetch()` part of JavaScript?
* [ ] What are Web APIs?
* [ ] What is the relationship between the JavaScript engine and Web APIs?
* [ ] What is the browser event loop?
* [ ] How does `fetch()` interact with the event loop?
* [ ] How does DOM event handling interact with JavaScript?
* [ ] Why can't JavaScript directly access everything on the user's computer?

---

# 53. Node.js Awareness for Full-Stack Interviews

* [ ] What is Node.js?
* [ ] How is Node.js different from browser JavaScript?
* [ ] Does Node.js use the same JavaScript language?
* [ ] What is the V8 engine?
* [ ] What is libuv?
* [ ] Why is Node.js considered non-blocking?
* [ ] Is Node.js single-threaded?
* [ ] What is the Node.js event loop?
* [ ] What are worker threads?
* [ ] When should CPU-heavy work use worker threads?
* [ ] What is the difference between browser APIs and Node.js APIs?
* [ ] What is CommonJS?
* [ ] What are ES modules in Node.js?

---

# 54. Common JavaScript Interview "Why" Questions

* [ ] Why is JavaScript single-threaded?
* [ ] Why is JavaScript asynchronous?
* [ ] Why does JavaScript need an event loop?
* [ ] Why is `var` function-scoped?
* [ ] Why are `let` and `const` block-scoped?
* [ ] Why does the Temporal Dead Zone exist?
* [ ] Why are functions first-class citizens?
* [ ] Why do closures exist?
* [ ] Why does JavaScript use prototypes?
* [ ] Why were classes introduced?
* [ ] Why is `this` dynamic in regular functions?
* [ ] Why does an arrow function have lexical `this`?
* [ ] Why are Promises needed?
* [ ] Why does `async/await` not block the entire thread?
* [ ] Why do microtasks execute before timers?
* [ ] Why is immutability useful?
* [ ] Why is `===` preferred over `==`?
* [ ] Why are objects compared by reference?
* [ ] Why is `NaN !== NaN`?
* [ ] Why is `typeof null === "object"`?
* [ ] Why should global variables be avoided?
* [ ] Why can closures cause memory issues?
* [ ] Why can excessive DOM manipulation be slow?
* [ ] Why can unnecessary `await` hurt performance?
* [ ] Why can creating too many objects hurt performance?

---

# 55. Common JavaScript "When" Questions

* [ ] When should you use `let`?
* [ ] When should you use `const`?
* [ ] When should you use `var`?
* [ ] When should you use `==`?
* [ ] When should you use `===`?
* [ ] When should you use `Object.is()`?
* [ ] When should you use `Map`?
* [ ] When should you use `Set`?
* [ ] When should you use `WeakMap`?
* [ ] When should you use `forEach()`?
* [ ] When should you use `map()`?
* [ ] When should you use `filter()`?
* [ ] When should you use `reduce()`?
* [ ] When should you use `find()`?
* [ ] When should you use recursion?
* [ ] When should you use a closure?
* [ ] When should you use a class?
* [ ] When should you use a factory function?
* [ ] When should you use a Promise?
* [ ] When should you use `async/await`?
* [ ] When should you use `Promise.all()`?
* [ ] When should you use `Promise.allSettled()`?
* [ ] When should you use `Promise.race()`?
* [ ] When should you use `Promise.any()`?
* [ ] When should you debounce?
* [ ] When should you throttle?
* [ ] When should you use a Web Worker?
* [ ] When should you use dynamic imports?
* [ ] When should you use memoization?

---

# 56. Common Comparison Questions

* [ ] `var` vs `let` vs `const`
* [ ] `==` vs `===`
* [ ] `null` vs `undefined`
* [ ] Primitive vs reference
* [ ] Function declaration vs function expression
* [ ] Regular function vs arrow function
* [ ] `call()` vs `apply()` vs `bind()`
* [ ] Shallow copy vs deep copy
* [ ] Object vs Map
* [ ] Map vs WeakMap
* [ ] Set vs WeakSet
* [ ] `slice()` vs `splice()`
* [ ] `map()` vs `forEach()`
* [ ] `filter()` vs `find()`
* [ ] `some()` vs `every()`
* [ ] `||` vs `??`
* [ ] `async/await` vs Promise chaining
* [ ] Sequential vs parallel API calls
* [ ] Debounce vs throttle
* [ ] Microtask vs macrotask
* [ ] Stack vs heap
* [ ] Shallow equality vs deep equality
* [ ] Prototype inheritance vs class syntax
* [ ] CommonJS vs ES Modules
* [ ] localStorage vs sessionStorage vs cookies

---

# 57. Coding-Concept Questions

* [ ] How would you implement `map()` from scratch?
* [ ] How would you implement `filter()` from scratch?
* [ ] How would you implement `reduce()` from scratch?
* [ ] How would you implement `forEach()` from scratch?
* [ ] How would you implement `find()` from scratch?
* [ ] How would you implement `Promise.all()`?
* [ ] How would you implement debounce?
* [ ] How would you implement throttle?
* [ ] How would you implement a deep clone?
* [ ] How would you implement a shallow clone?
* [ ] How would you implement `bind()`?
* [ ] How would you implement `call()`?
* [ ] How would you implement `apply()`?
* [ ] How would you implement `new`?
* [ ] How would you implement a custom EventEmitter?
* [ ] How would you implement memoization?
* [ ] How would you implement currying?
* [ ] How would you implement a once function?
* [ ] How would you implement a retry mechanism?
* [ ] How would you implement a Promise timeout?

---

# 58. Final Interview Simulation

## Round 1: Fundamentals

* [ ] What is JavaScript?
* [ ] What is ECMAScript?
* [ ] What is the difference between JavaScript and ECMAScript?
* [ ] What are primitive data types?
* [ ] What is scope?
* [ ] What is hoisting?
* [ ] What is the Temporal Dead Zone?
* [ ] What is closure?
* [ ] What is `this`?
* [ ] What is prototype inheritance?

## Round 2: Advanced JavaScript

* [ ] Explain the event loop.
* [ ] Explain the call stack.
* [ ] Explain microtasks and tasks.
* [ ] Explain Promises.
* [ ] Explain async/await.
* [ ] Explain Promise.all.
* [ ] Explain closures internally.
* [ ] Explain prototype chaining.
* [ ] Explain garbage collection.
* [ ] Explain JavaScript execution.

## Round 3: Performance

* [ ] How do you optimize JavaScript?
* [ ] How do you reduce unnecessary work?
* [ ] How do you optimize DOM operations?
* [ ] How do you optimize large data processing?
* [ ] How do you prevent UI blocking?
* [ ] How do you debug memory leaks?
* [ ] How do you optimize API calls?
* [ ] How do you use debouncing?
* [ ] How do you use throttling?
* [ ] How do you reduce bundle size?

## Round 4: Scenario

* [ ] API requests are firing repeatedly. What do you investigate?
* [ ] The UI freezes for 3 seconds. What do you investigate?
* [ ] Memory usage keeps increasing. What do you investigate?
* [ ] A timer continues after a page is closed. What do you investigate?
* [ ] A Promise response arrives after newer data. What do you do?
* [ ] A search API is too expensive. How do you optimize it?
* [ ] A page contains 100,000 records. How do you handle it?
* [ ] A JavaScript bundle is 5 MB. What do you do?

---

# 59. 24-Hour Priority Plan

## 🔴 MUST MASTER

* [ ] Variables
* [ ] Data types
* [ ] Type coercion
* [ ] Scope
* [ ] Hoisting
* [ ] TDZ
* [ ] Execution context
* [ ] Call stack
* [ ] Closures
* [ ] `this`
* [ ] Functions
* [ ] Objects
* [ ] Prototypes
* [ ] Arrays
* [ ] Destructuring
* [ ] Spread/rest
* [ ] Promises
* [ ] async/await
* [ ] Event loop
* [ ] Microtasks vs tasks
* [ ] Error handling
* [ ] DOM
* [ ] Events
* [ ] `Map` / `Set`
* [ ] Modules
* [ ] Memory management
* [ ] Debouncing/throttling

## 🟠 STRONG INTERVIEW KNOWLEDGE

* [ ] Currying
* [ ] Partial application
* [ ] Function composition
* [ ] Generators
* [ ] Iterators
* [ ] Symbols
* [ ] Proxy
* [ ] Reflect
* [ ] WeakMap
* [ ] WeakSet
* [ ] Web APIs
* [ ] Browser runtime
* [ ] CORS
* [ ] Browser storage
* [ ] Security
* [ ] JavaScript engine
* [ ] JIT
* [ ] Garbage collection
* [ ] Performance optimization

## 🟡 ADVANCED AWARENESS

* [ ] Hidden classes
* [ ] Inline caching
* [ ] Deoptimization
* [ ] AST
* [ ] Bytecode
* [ ] Worker threads
* [ ] Web Workers
* [ ] Advanced garbage collection
* [ ] Event loop starvation
* [ ] Advanced module optimization

---

# 60. Final Confidence Test

Before your interview, answer these **without looking at notes**:

* [ ] What is JavaScript?
* [ ] How does JavaScript execute code?
* [ ] Why is JavaScript single-threaded?
* [ ] How does asynchronous JavaScript work?
* [ ] Explain the event loop.
* [ ] Explain call stack, task queue, and microtask queue.
* [ ] Explain Promises.
* [ ] Explain async/await.
* [ ] Explain closures.
* [ ] Explain scope and scope chain.
* [ ] Explain hoisting and TDZ.
* [ ] Explain `this`.
* [ ] Explain prototypes.
* [ ] Explain classes internally.
* [ ] Explain objects and references.
* [ ] Explain shallow vs deep copy.
* [ ] Explain `Map`, `Set`, `WeakMap`, and `WeakSet`.
* [ ] Explain JavaScript memory management.
* [ ] Explain garbage collection.
* [ ] Explain debouncing and throttling.
* [ ] Explain JavaScript performance optimization.
* [ ] Explain browser runtime and Web APIs.
* [ ] Explain CORS.
* [ ] Explain modules.
* [ ] Explain how you would debug a slow JavaScript application.
* [ ] Explain how you would debug a memory leak.
* [ ] Explain how you would handle race conditions.
* [ ] Explain how you would optimize a large-data application.

---

# Confidence Rule

For every important question, practice this answer structure:

**1. What?**
What is the concept?

**2. Why?**
Why does JavaScript need it?

**3. How?**
How does it actually work?

**4. When?**
When would you use it?

**5. When NOT?**
What situation makes it a bad choice?

**6. Example?**
Can you give a simple real-world example?

**7. Trade-off?**
What performance, memory, complexity, or maintainability trade-off exists?

---

# Final Goal

You are interview-ready when you can:

* [ ] Explain fundamentals without memorized sentences.
* [ ] Explain JavaScript internals on a whiteboard.
* [ ] Predict common output questions.
* [ ] Explain asynchronous execution clearly.
* [ ] Explain the event loop clearly.
* [ ] Explain closures and prototypes confidently.
* [ ] Compare similar concepts without confusion.
* [ ] Explain optimization decisions with reasons.
* [ ] Solve scenario-based JavaScript questions verbally.
* [ ] Say "I don't know" professionally when you genuinely don't know.
* [ ] Continue reasoning instead of freezing when the interviewer changes the question.

> **Target:** Don't try to memorize 500 answers. Master the concepts behind the questions. Once the concept is solid, unfamiliar interview questions become variations of things you already understand.
