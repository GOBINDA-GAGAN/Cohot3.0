FRONTEND INTERVIEW HANDBOOK
│
├── HTML
│ ├── Semantic HTML
│ │ ├── What is semantic HTML and why does it matter for accessibility and SEO?
│ │ ├── When should you use <header>, <main>, and <footer> instead of generic <div> elements?
│ │ ├── How would you choose between <section> and <article> for structuring content?
│ │ ├── What semantic element would you use for site navigation and why?
│ │ ├── How do landmark roles map to semantic HTML elements?
│ │ ├── How can semantic HTML improve the performance of screen readers?
│ │ └── How do semantic tags affect microdata and structured data for search engines?
│ ├── Accessibility
│ │ ├── What is the purpose of ARIA attributes and when should they be used?
│ │ ├── How do you make a custom interactive component (like a dropdown) accessible?
│ │ ├── What is focus management and how do you implement it for modal dialogs?
│ │ ├── How do you ensure keyboard navigation works across a complex form?
│ │ ├── How would you provide accessible names and labels for dynamic content?
│ │ ├── How do you test accessibility manually and with automated tools?
│ │ ├── What is semantic focus order and why does it matter?
│ │ └── How can color contrast and visual design impact accessibility?
│ ├── SEO
│ │ ├── Which HTML elements and attributes most directly influence SEO?
│ │ ├── How would you structure headings (<h1>-<h6>) on a page for SEO and accessibility?
│ │ ├── How does canonicalization using link rel="canonical" work and when do you use it?
│ │ ├── How do meta description and title tags affect search engine results?
│ │ ├── What is structured data (JSON-LD) and how is it added to HTML?
│ │ ├── How does server-side rendering vs client-side rendering affect SEO?
│ │ └── How do crawl budget and site structure influence SEO for large sites?
│ ├── Forms
│ │ ├── How do you use HTML5 input types to improve UX and validation?
│ │ ├── How do you provide client-side and server-side validation for a form?
│ │ ├── How do you associate labels with form controls correctly?
│ │ ├── What are best practices for handling file uploads in HTML forms?
│ │ ├── How do you implement accessible error messages for form validation?
│ │ ├── How do you manage form state and prevent double submissions?
│ │ └── How do you implement progressive enhancement for forms?
│ ├── Media Elements
│ │ ├── How do you use the <picture> element and srcset for responsive images?
│ │ ├── When should you use <video> vs embedding a third-party player?
│ │ ├── How do you provide captions and subtitles for video for accessibility?
│ │ ├── How do you implement lazy loading for images and media?
│ │ ├── What are best practices for serving optimized image formats (WebP, AVIF)?
│ │ └── How do you handle autoplay restrictions and user gestures for media?
│ ├── Tables
│ │ ├── When should you use tables vs CSS layout?
│ │ ├── How do you make data tables accessible to screen readers?
│ │ ├── How do you implement sortable and paginated tables with semantic markup?
│ │ └── What are pros and cons of responsive table patterns for small screens?
│ ├── Storage
│ │ ├── When should you use localStorage vs sessionStorage vs cookies?
│ │ ├── How do you store complex objects in localStorage safely?
│ │ ├── What security considerations apply to storing tokens in browser storage?
│ │ └── How do you choose IndexedDB vs localStorage for client-side persistence?
│ ├── Browser APIs
│ │ ├── How do you use the Fetch API and when to prefer it over XMLHttpRequest?
│ │ ├── What is the Intersection Observer API and how can it improve performance?
│ │ ├── How do you use the Clipboard API for copy/paste functionality?
│ │ ├── What is the Payment Request API and when would you use it?
│ │ ├── How do you detect online/offline status using the Navigator API?
│ │ └── How do you use the Geolocation API and handle permissions?
│ ├── Security
│ │ ├── How can untrusted HTML cause XSS and how do you prevent it in templates?
│ │ ├── What are best practices for handling user-generated content in HTML?
│ │ ├── How do Content Security Policy (CSP) headers interact with inline scripts and styles?
│ │ ├── How do you prevent clickjacking using HTML and headers?
│ │ └── How do you securely handle third-party embeds in an HTML page?
│ └── Interview Questions
│ ├── How does the DOCTYPE declaration affect HTML parsing?
│ ├── What is the difference between block-level and inline elements?
│ ├── How do you use the meta viewport tag for mobile-friendly pages?
│ ├── How do you implement progressive enhancement in an HTML-first approach?
│ ├── What are HTML custom elements (Web Components) and when should you use them?
│ ├── How do you implement a favicon and why is it important?
│ ├── How does the browser decide which character encoding to use for an HTML page?
│ ├── How do template and slot work in the HTML <template> element?
│ ├── How do you embed SVG inline and what are accessibility considerations?
│ ├── What happens when you nest forms or use invalid HTML, and how do browsers handle it?
│ ├── How do you implement client-side routing with anchor elements while preserving accessibility?
│ ├── How does preloading and prefetching resources via <link> tags work?
│ ├── How do you implement a content fallback for browsers that don't support a feature?
│ ├── How do you measure and reduce DOM size and why does it matter?
│ └── How do you implement internationalization (i18n) in HTML documents?

├── CSS
│ ├── Fundamentals
│ │ ├── What is the CSS box model and how do box-sizing values affect layout?
│ │ ├── How do margins collapse and when does it happen?
│ │ ├── How do you use CSS variables (custom properties) and what are their scoping rules?
│ │ ├── How do you use calc() effectively in layouts?
│ │ ├── How do CSS shorthand properties work and when should you avoid them?
│ │ └── How does the browser apply styles from multiple sources (user agent, user, author)?
│ ├── Selectors
│ │ ├── How do combinators (>, +, ~, space) differ and when to use each?
│ │ ├── How do attribute selectors work and what are performance considerations?
│ │ ├── What is the :not() selector and what are its limitations?
│ │ ├── How do pseudo-classes like :nth-child and :nth-of-type work?
│ │ ├── How do you write selectors for high specificity without overusing IDs?
│ │ └── How do ::before and ::after pseudo-elements work and what are common uses?
│ ├── Specificity
│ │ ├── How do you calculate CSS specificity and resolve conflicts?
│ │ ├── When is !important appropriate and what are its downsides?
│ │ ├── How do inline styles affect specificity and when should they be used?
│ │ └── How do cascade, specificity, and source order interact?
│ ├── Cascade
│ │ ├── What is the cascade in CSS and how does the origin and importance influence it?
│ │ ├── How do user-agent stylesheets affect your site and how to override them cleanly?
│ │ └── How do you manage conflicting styles in large projects?
│ ├── Box Model
│ │ ├── How do padding, border, and margin contribute to element size and layout?
│ │ ├── How do replaced elements (images, iframes) behave differently in the box model?
│ │ └── How do CSS logical properties differ from physical margin/padding properties?
│ ├── Positioning
│ │ ├── How do static, relative, absolute, fixed, and sticky positioning differ?
│ │ ├── How does containing block calculation work for absolutely positioned elements?
│ │ ├── How does transform affect stacking context and layout?
│ │ └── When to prefer position: sticky for header or table column behavior?
│ ├── Flexbox
│ │ ├── How do main-axis and cross-axis concepts work in Flexbox?
│ │ ├── How to create equal-height columns using Flexbox?
│ │ ├── What are flex-basis, flex-grow, and flex-shrink and how do they interact?
│ │ ├── How do you vertically center an element using Flexbox?
│ │ └── What common layout problems does Flexbox solve that floats couldn't?
│ ├── Grid
│ │ ├── How do grid-template-areas simplify complex layouts?
│ │ ├── How to implement a responsive grid that rearranges items between breakpoints?
│ │ ├── What is the difference between implicit and explicit grid tracks?
│ │ ├── How do grid auto-placement and alignment properties work?
│ │ └── When to use CSS Grid vs Flexbox for a given layout?
│ ├── Responsive Design
│ │ ├── How do media queries work and what are best practices for breakpoints?
│ │ ├── What is mobile-first CSS and why is it recommended?
│ │ ├── How do you use relative units (rem, em, vw, %) effectively?
│ │ ├── How does responsive typography scale across viewports?
│ │ └── How do you implement responsive images and art direction?
│ ├── Animations
│ │ ├── How do CSS transitions differ from CSS animations?
│ │ ├── What is the difference between transform and top/left animations for performance?
│ │ ├── How do you create complex animation sequences with keyframes?
│ │ ├── How do prefers-reduced-motion and accessibility concerns influence animations?
│ │ └── How do you coordinate animations with JavaScript for interactive UIs?
│ ├── Transforms
│ │ ├── How do 2D transforms differ from 3D transforms and when to use which?
│ │ ├── What is transform-origin and how does it affect animations?
│ │ ├── How do transform and perspective interact for 3D effects?
│ │ └── How do transforms impact layout, stacking context, and hit testing?
│ ├── Architecture
│ │ ├── What are BEM, SMACSS, and OOCSS methodologies and when to apply them?
│ │ ├── How do you structure global vs component-level styles in a large app?
│ │ ├── How do design tokens work in a CSS architecture?
│ │ └── How do you enforce consistent spacing and typography across a team?
│ ├── Preprocessors
│ │ ├── What benefits do Sass/SCSS or Less provide over plain CSS?
│ │ ├── How do mixins and functions in preprocessors help maintainability?
│ │ ├── How do you manage variables and theme values across multiple files?
│ │ └── When should you avoid preprocessing and rely on native CSS features?
│ ├── Design Systems
│ │ ├── What are the key components of a frontend design system?
│ │ ├── How do you version and release a shared component library's styles?
│ │ ├── How do you enforce accessibility and tokens in a design system?
│ │ └── How do you handle platform-specific differences (web vs mobile) in tokens?
│ ├── Performance
│ │ ├── How do CSS selectors impact rendering performance and style recalculation?
│ │ ├── How do large style sheets affect initial render and reflow?
│ │ ├── How can critical CSS be inlined and what are trade-offs?
│ │ └── How do you reduce layout thrashing caused by synchronous style reads/writes?
│ └── Interview Questions
│ ├── How do you implement a sticky footer that always stays at the bottom of the viewport?
│ ├── How do you implement a responsive navigation bar that collapses into a hamburger menu?
│ ├── How do you create a CSS-only tooltip accessible to keyboard users?
│ ├── How do you implement a CSS-only modal and what are its limitations?
│ ├── How do you create a responsive multi-column layout that preserves order on small screens?
│ ├── How do you build a fluid typography system that scales between min and max sizes?
│ ├── How would you implement a masonry grid layout with CSS Grid or Flexbox?
│ ├── How do you implement smooth scrolling for anchor links without JavaScript?
│ ├── How do you prevent layout shifts caused by web fonts during loading?
│ ├── How do you implement theming (dark/light) with CSS variables and prefers-color-scheme?
│ ├── How do you create accessible focus outlines that are visually pleasing?
│ ├── How do you debug CSS specificity issues in a large codebase?
│ └── How do you design CSS architecture to support multiple brands in one repo?

├── JavaScript Fundamentals
│ ├── Variables
│ │ ├── What are the differences between var, let, and const?
│ │ ├── How do temporal dead zone and hoisting affect variable usage?
│ │ └── When should you prefer const over let for variables?
│ ├── Data Types
│ │ ├── What are the primitive and reference types in JavaScript?
│ │ ├── How does typeof behave for different values and edge cases?
│ │ └── What is the difference between null and undefined?
│ ├── Type Coercion
│ │ ├── How does JavaScript coerce values in arithmetic and equality operations?
│ │ ├── How do truthy and falsy values influence conditional checks?
│ │ └── What are common pitfalls with implicit type coercion and how to avoid them?
│ ├── Equality
│ │ ├── What is the difference between == and === and when to use each?
│ │ ├── How does Object.is differ from strict equality?
│ │ └── How do you compare floating point numbers safely in JavaScript?
│ ├── Scope
│ │ ├── How do function scope and block scope differ in JavaScript?
│ │ ├── How does lexical scope enable closures?
│ │ └── What are best practices for avoiding global variables?
│ ├── Closures
│ │ ├── How do closures work and what are common use cases?
│ │ ├── How can closures cause memory leaks and how to mitigate them?
│ │ └── How do you implement private state using closures?
│ ├── Hoisting
│ │ ├── What gets hoisted in JavaScript and what does that mean at runtime?
│ │ ├── How do function declarations and function expressions differ in hoisting?
│ │ └── How does hoisting affect variable initialization and errors?
│ ├── Execution Context
│ │ ├── What is an execution context and how does it relate to the call stack?
│ │ ├── How is the global execution context created and torn down?
│ │ └── How does execution context differ between strict mode and non-strict mode?
│ ├── Lexical Environment
│ │ ├── What is a lexical environment and how does it store bindings?
│ │ ├── How does the lexical environment change with nested functions?
│ │ └── How do environments interact with closures?
│ ├── Call Stack
│ │ ├── How does the JavaScript call stack work during function calls?
│ │ ├── What causes a stack overflow and how to prevent it?
│ │ └── How can you interpret stack traces during debugging?
│ ├── Event Loop
│ │ ├── How does the event loop coordinate microtasks and macrotasks?
│ │ ├── What are examples of microtasks and macrotasks in browsers?
│ │ └── How do long-running tasks block rendering and how to avoid them?
│ ├── Async Programming
│ │ ├── What patterns exist for handling asynchronous code before promises?
│ │ ├── How do you handle concurrency and race conditions in async code?
│ │ └── How does error propagation work in asynchronous functions?
│ ├── Promises
│ │ ├── How do you create and chain promises correctly?
│ │ ├── What is Promise.allSettled and when to use it?
│ │ └── How does Promise.race behave with resolved and rejected promises?
│ ├── Async Await
│ │ ├── How does async/await simplify promise-based code?
│ │ ├── How do you handle parallel asynchronous operations with async/await?
│ │ └── What are pitfalls of forgetting to await inside async functions?
│ ├── Modules
│ │ ├── How do ES modules differ from CommonJS modules?
│ │ ├── What is tree shaking and how modules enable it?
│ │ └── How do dynamic imports work and when to use them?
│ └── Interview Questions
│ ├── How does hoisting, scope, and closures combine to produce surprising behavior in a simple for-loop with setTimeout?
│ ├── How would you implement deep equality between two values in JavaScript?
│ ├── How do you debounce and throttle a function and when to use each?
│ ├── How do you implement a publish-subscribe (event emitter) pattern in vanilla JavaScript?
│ ├── How do you polyfill Promise, fetch, or other modern APIs for older browsers?
│ ├── How do you detect and handle memory leaks in a single-page application?
│ ├── How do you implement module initialization order when modules have interdependencies?
│ └── How would you explain prototypal inheritance to a junior developer?

├── JavaScript Advanced
│ ├── Prototype
│ │ ├── What is a prototype in JavaScript and how does prototype-based inheritance work?
│ │ ├── How do you add methods to a constructor's prototype and why is it useful?
│ │ └── How does __proto__ differ from prototype?
│ ├── Prototype Chain
│ │ ├── How does property lookup traverse the prototype chain?
│ │ ├── How do you check whether a property exists on an object vs its prototype chain?
│ │ └── How do you implement method overriding and call super behavior manually?
│ ├── Inheritance
│ │ ├── How do ES6 classes translate to prototype-based inheritance under the hood?
│ │ ├── When should you prefer composition over inheritance in JavaScript?
│ │ └── How do you implement mixins safely in modern JavaScript?
│ ├── this Keyword
│ │ ├── How is this determined in different invocation patterns (method, function, constructor, call/apply, arrow)?
│ │ ├── Why do arrow functions not have their own this and when is that useful?
│ │ └── How do you fix this binding when passing methods as callbacks?
│ ├── Call Apply Bind
│ │ ├── How do call, apply, and bind differ and when to use each?
│ │ ├── How does bind affect function length and name properties?
│ │ └── How do you partially apply arguments using bind or closures?
│ ├── Currying
│ │ ├── What is currying and how do you implement a curry utility?
│ │ ├── How does currying differ from partial application?
│ │ └── When is currying beneficial in UI code?
│ ├── Partial Application
│ │ ├── How do you implement a partial function wrapper in JavaScript?
│ │ ├── What are trade-offs between currying and partial application?
│ │ └── How can partial application improve code reuse in event handlers?
│ ├── Memoization
│ │ ├── How do you memoize a function and what are cache invalidation concerns?
│ │ ├── How do you memoize functions with complex arguments (objects, arrays)?
│ │ └── How do weak maps help with memory-safe memoization?
│ ├── Debounce
│ │ ├── How does debounce differ from throttle and how to implement it precisely?
│ │ ├── How do you implement debounce that supports immediate invocation?
│ │ └── What are pitfalls of debouncing input in forms?
│ ├── Throttle
│ │ ├── How do you throttle function calls with leading and trailing options?
│ │ ├── How does requestAnimationFrame-based throttling differ from time-based throttling?
│ │ └── When should you use throttle instead of debounce for scroll and resize handlers?
│ ├── Generators
│ │ ├── What are generator functions and how do they control execution?
│ │ ├── How do you implement async flows with generators and co-like libraries?
│ │ └── How does yield vs return behave in generator functions?
│ ├── Iterators
│ │ ├── How do iterator protocols work and how to implement a custom iterator?
│ │ ├── How do for...of loops interact with iterator protocols?
│ │ └── How do iterables differ from arrays and when to use them?
│ ├── Symbols
│ │ ├── What are Symbols and how are they used to create private object keys?
│ │ ├── How do well-known symbols (like Symbol.iterator) enable protocol behavior?
│ │ └── How do you use Symbol.for and global symbol registry responsibly?
│ ├── Maps
│ │ ├── How do Map and Object differ for key-value storage use cases?
│ │ ├── When should you use Map over plain objects for performance and semantics?
│ │ └── How do Map iteration order and size operate?
│ ├── Sets
│ │ ├── How do Set and Array differ and when to use Set?
│ │ ├── How do you implement a unique filter using Set?
│ │ └── How do you manage complex object equality in a Set?
│ ├── WeakMap
│ │ ├── What are WeakMap semantics and how do they help with memory management?
│ │ ├── When should you use WeakMap vs Map for caching DOM-related data?
│ │ └── What are the limitations of WeakMap (iteration, primitives)?
│ ├── WeakSet
│ │ ├── What are use cases for WeakSet and how do they differ from Set?
│ │ ├── How does garbage collection interact with WeakSet entries?
│ │ └── How do you implement private instance tracking with WeakSet?
│ ├── Proxy
│ │ ├── How does Proxy enable traps to intercept object operations?
│ │ ├── What are security and performance concerns when using Proxy widely?
│ │ └── How can Proxy be used to implement validation, logging, or reactive APIs?
│ ├── Reflect
│ │ ├── What is the Reflect API and how does it relate to Proxy?
│ │ ├── How do Reflect.get and Reflect.set differ from direct property access?
│ │ └── When is Reflect useful in meta-programming scenarios?
│ ├── Descriptors
│ │ ├── How do property descriptors (writable, enumerable, configurable) affect objects?
│ │ ├── How do Object.defineProperty and Object.defineProperties work?
│ │ └── How do getters and setters interact with property descriptors?
│ ├── Garbage Collection
│ │ ├── How does garbage collection work in JavaScript engines at a high level?
│ │ ├── What patterns can prevent objects from being collected?
│ │ └── How do closures and event listeners unexpectedly retain memory?
│ ├── Memory Leaks
│ │ ├── What are common sources of memory leaks in frontend applications?
│ │ ├── How do you detect memory leaks with browser devtools?
│ │ └── How do you design components to avoid leaks in long-running SPAs?
│ ├── Functional Programming
│ │ ├── How do pure functions, immutability, and higher-order functions improve maintainability?
│ │ ├── How do you implement map, filter, and reduce with custom iterators?
│ │ └── What are trade-offs when using immutable data structures in UI apps?
│ └── Interview Questions
│ ├── How would you implement prototypal inheritance without using class syntax?
│ ├── How do you implement a deep clone function that handles cyclical references?
│ ├── How would you implement a sandboxed iframe communication protocol securely?
│ ├── How do you design a plugin system in JavaScript using Proxy and events?
│ ├── How do you implement a least-recently-used (LRU) cache in JavaScript?
│ ├── How do you implement a task scheduler that limits concurrency for async tasks?
│ ├── How do you implement a function pipeline composer similar to lodash flow?
│ └── How would you implement a minimal reactive system (like a tiny observable)?

├── JavaScript Coding
│ ├── String Problems
│ │ ├── How do you reverse a string in JavaScript handling surrogate pairs?
│ │ ├── How do you check if a string is a palindrome ignoring punctuation and case?
│ │ ├── How do you find the first non-repeating character in a string?
│ │ ├── How do you implement a substring search (Knuth–Morris–Pratt) in JavaScript?
│ │ └── How do you compress repeated characters in a string (run-length encoding)?
│ ├── Array Problems
│ │ ├── How do you flatten an arbitrarily nested array without recursion using a stack?
│ │ ├── How do you implement array chunking into equal-sized groups?
│ │ ├── How do you find the kth largest element in an unsorted array efficiently?
│ │ ├── How do you merge two sorted arrays in-place with minimal extra space?
│ │ └── How do you remove duplicates from an array of objects by key?
│ ├── Object Problems
│ │ ├── How do you deep merge two objects with nested arrays and objects?
│ │ ├── How do you invert keys and values of an object safely when values are not unique?
│ │ ├── How do you implement a pick and omit utility for objects?
│ │ └── How do you implement object path getter and setter given a dot-path string?
│ ├── Recursion Problems
│ │ ├── How do you implement a recursive binary tree traversal for a DOM-like structure?
│ │ ├── How do you convert recursive algorithms to iterative to avoid stack overflows?
│ │ └── How do you memoize recursive Fibonacci to achieve linear time?
│ ├── Polyfills
│ │ ├── How would you polyfill Array.prototype.map with correct this binding?
│ │ ├── How do you polyfill Promise for older browsers while preserving edge semantics?
│ │ └── How do you polyfill Object.assign safely?
│ ├── Promise Problems
│ │ ├── How do you implement Promise.all from scratch?
│ │ ├── How do you implement a retry mechanism with exponential backoff using promises?
│ │ └── How do you implement a concurrency-limited promise pool?
│ ├── Event Emitter
│ │ ├── How do you implement an event emitter with on, off, once, and emit methods?
│ │ ├── How do you ensure listeners are invoked in the correct order and with correct this?
│ │ └── How do you implement event namespacing and listener priority?
│ ├── LRU Cache
│ │ ├── How do you implement an LRU cache with O(1) get and set operations?
│ │ ├── How do you adapt an LRU cache for asynchronous value generation?
│ │ └── How do you optimize memory usage for large caches in the browser?
│ ├── Deep Clone
│ │ ├── How do you deep clone objects containing Dates, RegExps, and Maps?
│ │ ├── How do you handle cloning objects with circular references?
│ │ └── How do you clone DOM nodes and event listeners correctly?
│ ├── Flatten Problems
│ │ ├── How do you flatten an object with nested keys into a dot-separated flat object?
│ │ ├── How do you flatten nested React children into an array of elements?
│ │ └── How do you flatten nested promises (promise of array of promises) reliably?
│ ├── Utility Functions
│ │ ├── How do you implement throttle, debounce, and once utilities with tests?
│ │ ├── How do you implement a deep merge with custom merge strategies?
│ │ └── How do you design a stable sort function for arrays of objects?
│ ├── Data Transformations
│ │ ├── How do you transform CSV to JSON streaming in the browser efficiently?
│ │ ├── How do you implement client-side CSV parsing for large files without blocking UI?
│ │ └── How do you implement pivot and aggregation functions for tabular data?
│ ├── Functional Utilities
│ │ ├── How do you implement compose and pipe utilities and what are their differences?
│ │ ├── How do you implement a memoize function that accepts resolver functions?
│ │ └── How do you implement a curry function that supports placeholders?
│ └── Coding Interview Questions
│ ├── How would you implement a virtualized list component from scratch to render millions of rows?
│ ├── How would you build a debounce-able autocomplete that cancels pending requests and handles out-of-order responses?
│ ├── How would you implement drag-and-drop sorting for list items with keyboard accessibility?
│ ├── How would you implement infinite scroll with paginated API and memory management?
│ ├── How would you implement a client-side diff algorithm that produces minimal DOM updates?
│ ├── How would you build a collaborative text editor's operational transformation or CRDT baseline in JavaScript?
│ └── How would you implement a performant image lazy-loader that supports srcset and intersection thresholds?

├── Browser Internals
│ ├── Rendering Pipeline
│ │ ├── What are the main stages of the browser rendering pipeline from HTML to pixels?
│ │ ├── How does the browser construct the CSSOM and DOM trees concurrently?
│ │ └── How does GPU compositing fit into the rendering pipeline?
│ ├── Critical Rendering Path
│ │ ├── What is the critical rendering path and how do you optimize it?
│ │ ├── How does resource prioritization affect the critical rendering path?
│ │ └── How do you reduce time-to-first-paint and time-to-interactive?
│ ├── Parsing
│ │ ├── How does the HTML parser handle scripts and blocking behavior?
│ │ ├── How do synchronous and asynchronous scripts affect parsing and execution?
│ │ └── How are CSS and JS parse trees generated and used?
│ ├── DOM Construction
│ │ ├── How does the browser build the DOM and what causes layout thrashing?
│ │ ├── How can document fragments and innerHTML optimize DOM updates?
│ │ └── How do mutation observers work and when to use them?
│ ├── CSSOM
│ │ ├── How is the CSSOM constructed and how do media queries affect it?
│ │ ├── How do @import and @font-face affect CSSOM and resource loading?
│ │ └── How do style recalculations happen after DOM mutations?
│ ├── Render Tree
│ │ ├── How is the render tree different from the DOM and CSSOM?
│ │ ├── How do pseudo-elements contribute to the render tree?
│ │ └── How do visibility and display properties affect render tree nodes?
│ ├── Layout
│ │ ├── What triggers layout (reflow) and how do you minimize it?
│ │ ├── How do layout calculations propagate through the tree?
│ │ └── How do absolute and fixed elements influence layout passes?
│ ├── Reflow
│ │ ├── How does reflow impact performance and how to measure it?
│ │ ├── How do style and layout changes batch to avoid repeated reflows?
│ │ └── How can you avoid forced synchronous layouts (layout thrashing)?
│ ├── Repaint
│ │ ├── What causes repaint and how does it differ from reflow?
│ │ ├── How do CSS properties like color, background, and visibility affect repaint?
│ │ └── How do you minimize repaints during animations?
│ ├── Compositing
│ │ ├── How does compositing on multiple layers improve performance?
│ │ ├── How do you create a new layer and what are trade-offs?
│ │ └── How do will-change and transform trigger layer promotion?
│ ├── Event Delegation
│ │ ├── What is event delegation and how does it improve event handling performance?
│ │ ├── How do you implement event delegation for dynamic lists?
│ │ └── What are pitfalls of delegation with stopPropagation and event targets?
│ ├── Event Propagation
│ │ ├── How do capture, target, and bubble phases work in event propagation?
│ │ ├── How do you use stopImmediatePropagation vs stopPropagation appropriately?
│ │ └── How does event propagation differ between native and composed events?
│ ├── DOM APIs
│ │ ├── How do querySelector and getElementById differ in performance and use cases?
│ │ ├── How do you use requestAnimationFrame for smooth visual updates?
│ │ └── How do you use Element.getBoundingClientRect and why does it force layout?
│ ├── BOM APIs
│ │ ├── What is the Browser Object Model and how does history.pushState work?
│ │ ├── How do location and history APIs affect client-side routing?
│ │ └── How do you use window.postMessage securely between windows and frames?
│ ├── Storage Internals
│ │ ├── How do browser quotas and eviction policies affect IndexedDB and cache storage?
│ │ ├── How do browsers implement storage partitioning for privacy?
│ │ └── How does storage persistence (persistent vs temporary) work?
│ ├── Service Workers
│ │ ├── How do service workers intercept network requests and implement caching strategies?
│ │ ├── How do you handle service worker lifecycle updates and skipWaiting/clients.claim?
│ │ └── How do you design offline-first behaviors with service workers and IndexedDB?
│ ├── Web Workers
│ │ ├── How do web workers communicate with the main thread and what are serialization costs?
│ │ ├── How do you use SharedArrayBuffer and Atomics safely?
│ │ └── When to use service workers vs dedicated web workers?
│ ├── WebAssembly
│ │ ├── How does WebAssembly integrate with JavaScript and when to use it?
│ │ ├── How do you manage memory and data transfer between JS and Wasm?
│ │ └── How does Wasm affect startup and runtime performance in the browser?
│ ├── Browser Security
│ │ ├── How do same-origin policy and CORS enforce browser security boundaries?
│ │ ├── How do clickjacking and frame-ancestors mitigation work?
│ │ └── How do permissions and feature policies manage high-risk APIs?
│ └── Interview Questions
│ ├── What happens in the browser when you type a URL and press enter?
│ ├── How do async scripts with defer and async attributes behave differently during parsing?
│ ├── How do you diagnose a slow paint or layout using browser devtools?
│ ├── How do you measure and reduce main-thread blocking time in an SPA?
│ ├── How do you implement a smooth 60 FPS animation and avoid jank?
│ ├── How do you ensure deterministic rendering order when using requestAnimationFrame and timers?
│ └── How do you profile and fix memory bloat in a long-running single-page application?

├── Networking
│ ├── HTTP
│ │ ├── How do HTTP methods (GET, POST, PUT, DELETE, PATCH) differ semantically?
│ │ ├── What are status codes categories and how should clients handle them?
│ │ ├── How do caching headers (Cache-Control, ETag, Last-Modified) affect browser caching?
│ │ └── How do you debug HTTP request failures and inspect headers?
│ ├── HTTPS
│ │ ├── How does TLS/SSL secure HTTP traffic and what is certificate validation?
│ │ ├── What is HSTS and how does it prevent downgrade attacks?
│ │ └── How do mixed-content issues occur and how to resolve them?
│ ├── TCP IP
│ │ ├── How do TCP's congestion control and retransmission affect web performance?
│ │ ├── How does TCP slow-start influence latency for new connections?
│ │ └── How does QUIC (HTTP/3) change transport behavior compared to TCP?
│ ├── DNS
│ │ ├── How does DNS resolution affect page load and what is DNS prefetching?
│ │ ├── How do CNAMEs and DNS-based load balancing affect availability?
│ │ └── How do DNS TTLs influence cache invalidation strategies?
│ ├── REST
│ │ ├── What are RESTful API principles and when to deviate from them?
│ │ ├── How do you design pagination, filtering, and sorting in REST APIs?
│ │ └── How do you handle partial updates and idempotency with PATCH requests?
│ ├── GraphQL
│ │ ├── How does GraphQL query execution differ from REST endpoints?
│ │ ├── How do you implement caching and error handling for GraphQL clients?
│ │ └── How do you prevent over-fetching and under-fetching with GraphQL?
│ ├── WebSockets
│ │ ├── How do WebSockets establish a persistent connection and when to use them?
│ │ ├── How do you handle reconnection and backoff strategies for WebSocket clients?
│ │ └── How do you scale WebSocket servers for many concurrent connections?
│ ├── Server Sent Events
│ │ ├── How do Server-Sent Events differ from WebSockets and when to use them?
│ │ ├── How do you implement event stream reconnection with Last-Event-ID?
│ │ └── How do SSEs behave with proxies and buffering?
│ ├── CORS
│ │ ├── How does CORS work and what headers control cross-origin requests?
│ │ ├── How do preflight requests function and when are they triggered?
│ │ └── How do you debug and resolve CORS errors in development and production?
│ ├── Authentication
│ │ ├── What are common authentication flows for SPAs and their trade-offs?
│ │ ├── How do you implement secure token storage and refresh flows in the browser?
│ │ └── How do you design login endpoints to mitigate brute-force attacks?
│ ├── Authorization
│ │ ├── How do you implement role-based access control vs attribute-based access control?
│ │ ├── How do you enforce authorization on both client and server sides?
│ │ └── How do you design route guards and permission checks in client apps?
│ ├── Cookies
│ │ ├── How do cookies work with SameSite, HttpOnly, Secure, and Domain attributes?
│ │ ├── How do you handle CSRF in cookie-based authentication systems?
│ │ └── How do cookie size limits and counts influence design decisions?
│ ├── Sessions
│ │ ├── How do session-based authentication flows compare to token-based flows for SPAs?
│ │ ├── How do you handle session invalidation and logout reliably across tabs?
│ │ └── How do you scale session stores for high traffic?
│ ├── JWT
│ │ ├── How do JSON Web Tokens work and what are their security concerns?
│ │ ├── How do you handle token revocation and rotation with JWTs?
│ │ └── When is storing JWTs in localStorage vs cookies appropriate?
│ ├── Caching
│ │ ├── How do browser, CDN, and application caching layers interact?
│ │ ├── How would you implement cache busting for static assets?
│ │ └── How does stale-while-revalidate and cache-control strategies improve UX?
│ └── Interview Questions
│ ├── How do you design a client retry strategy for transient network failures?
│ ├── How would you implement resumable uploads in the browser?
│ ├── How do you measure and optimize Time To First Byte (TTFB) for a web app?
│ ├── How do you secure API keys and secrets used in frontend code?
│ ├── How do you implement optimistic UI updates safely over unreliable networks?
│ └── How do you debug intermittent network issues that occur only in production?

├── TypeScript
│ ├── Basic Types
│ │ ├── What are TypeScript's primitive types and when to use them?
│ │ ├── How do any, unknown, and never differ and when to use each?
│ │ └── How do you configure strict mode and what benefits does it provide?
│ ├── Interfaces
│ │ ├── How do interfaces differ from type aliases for object shapes?
│ │ ├── How do you extend interfaces and use them for component props?
│ │ └── How do you define optional and readonly properties in interfaces?
│ ├── Type Aliases
│ │ ├── When should you prefer type aliases over interfaces?
│ │ ├── How do union and intersection types work with type aliases?
│ │ └── How do you model discriminated unions with type aliases?
│ ├── Generics
│ │ ├── How do generics improve code reuse and type safety in functions and components?
│ │ ├── How do you constrain generic type parameters with extends?
│ │ └── How do you infer generics when calling functions or using components?
│ ├── Utility Types
│ │ ├── How do Partial, Required, Pick, and Omit work and when to use them?
│ │ ├── How do Readonly and Record help enforce invariants?
│ │ └── How do you implement custom utility types for advanced transformations?
│ ├── Type Guards
│ │ ├── How do user-defined type guards and instanceof checks refine types?
│ │ ├── How do you safely narrow unknown values in runtime-checked code?
│ │ └── How do discriminated unions and tag properties simplify narrowing?
│ ├── Enums
│ │ ├── How do string enums differ from numeric enums and const enums?
│ │ ├── What are downsides of enums and when to prefer union types?
│ │ └── How do enums compile to JavaScript and affect bundle size?
│ ├── Mapped Types
│ │ ├── How do mapped types transform existing types (e.g., making all props optional)?
│ │ ├── How do you map over keys to create new types for deep transforms?
│ │ └── How do you handle index signatures and keyof in mapped types?
│ ├── Conditional Types
│ │ ├── How do conditional types enable type-level computation in TypeScript?
│ │ ├── How do distributive conditional types behave with unions?
│ │ └── How do infer and extends work within conditional types for advanced patterns?
│ ├── Advanced Types
│ │ ├── How do you model recursive types and type-level recursion safely?
│ │ ├── How do you extract function argument and return types using built-in helpers?
│ │ └── How do template literal types enable string pattern typing?
│ ├── Declaration Files
│ │ ├── How do you write a .d.ts file for a third-party library without types?
│ │ ├── How do you augment module declarations and global types safely?
│ │ └── How do you use declare global and module augmentation responsibly?
│ └── Interview Questions
│ ├── How would you migrate a large JavaScript codebase incrementally to TypeScript?
│ ├── How do you type a React component that forwards refs and accepts generic props?
│ ├── How do you type an API client that returns typed payloads with pagination?
│ ├── How do you design types for a state management library with actions and reducers?
│ ├── How do you prevent excessive type inference that results in slow compilation?
│ └── How do you use TypeScript with CSS modules or styled-components to type class names?

├── React Fundamentals
│ ├── JSX
│ │ ├── How does JSX get transformed to React.createElement calls?
│ │ ├── How do you embed expressions and handle attributes in JSX safely?
│ │ └── How do fragments work and when to use them?
│ ├── Components
│ │ ├── What is the difference between functional and class components?
│ │ ├── How do you decide between splitting UI into multiple components?
│ │ └── How do you design pure, reusable presentational components?
│ ├── Props
│ │ ├── How do you validate prop types in production using TypeScript or prop-types?
│ │ ├── How do you design prop contracts for reusable components?
│ │ └── How do you handle default props and optional props in TypeScript?
│ ├── State
│ │ ├── How do you choose between local component state and lifting state up?
│ │ ├── How do you handle complex nested state updates immutably?
│ │ └── How do you model form state efficiently in React?
│ ├── Events
│ │ ├── How do synthetic events differ from native DOM events?
│ │ ├── How do you prevent default behavior and stop propagation in React handlers?
│ │ └── How do you manage event delegation and performance for large lists?
│ ├── Forms
│ │ ├── How do you handle controlled vs uncontrolled components in forms?
│ │ ├── How do you implement file inputs and validation in React forms?
│ │ └── How do you manage performance for large forms with many fields?
│ ├── Lists
│ │ ├── How do keys work in lists and why are stable keys important?
│ │ ├── How do you implement virtualization for long lists with React?
│ │ └── How do you animate list item insertions and removals?
│ ├── Keys
│ │ ├── How do you generate keys for lists when items lack stable IDs?
│ │ ├── Why is using index as key an anti-pattern and when is it acceptable?
│ │ └── How do keys affect component identity and state preservation?
│ ├── Conditional Rendering
│ │ ├── How do you implement conditional rendering patterns (ternary, &&, switch)?
│ │ ├── How do you avoid rendering heavy subtrees unnecessarily?
│ │ └── How do Suspense and lazy loading factor into conditional rendering?
│ ├── Component Composition
│ │ ├── How do higher-order components (HOC) compare to render props and hooks?
│ │ ├── How do you design component APIs for extensibility without breaking changes?
│ │ └── How do you implement slots or child-as-function patterns in React?
│ └── Interview Questions
│ ├── How does reconciliation determine whether to update or replace components?
│ ├── How do you lift state up to share data between sibling components?
│ ├── How do you implement a controlled input that accepts only numeric values?
│ ├── How do you build a tree of components that supports lazy loading subtrees?
│ ├── How do you implement a tooltip component that positions itself relative to the trigger?
│ └── How do you debug a render performance regression caused by frequent re-renders?

├── React Hooks
│ ├── useState
│ │ ├── How does useState work under the hood with the hook list?
│ │ ├── How do you update state based on previous value safely?
│ │ └── How do you avoid stale closures when using state inside callbacks?
│ ├── useEffect
│ │ ├── How does useEffect differ from componentDidMount/componentDidUpdate/componentWillUnmount?
│ │ ├── How do you manage effect dependencies to avoid infinite loops?
│ │ └── How do you handle cleanup for subscriptions and timers in useEffect?
│ ├── useRef
│ │ ├── How do refs differ from state and when to use them?
│ │ ├── How do you forward refs to DOM nodes or class components?
│ │ └── How do you implement a mutable instance variable with useRef?
│ ├── useMemo
│ │ ├── How does useMemo cache values and when to use it for performance?
│ │ ├── What are pitfalls of overusing useMemo and how to measure benefits?
│ │ └── How do you memoize expensive computed values with dependencies?
│ ├── useCallback
│ │ ├── How does useCallback help prevent unnecessary re-renders?
│ │ ├── When is useCallback unnecessary and can harm performance?
│ │ └── How do functions returned from hooks preserve identity across renders?
│ ├── useReducer
│ │ ├── How do you decide to use useReducer over multiple useState calls?
│ │ ├── How do you implement complex reducers with action creators and immutability?
│ │ └── How do you structure reducer state for undo/redo functionality?
│ ├── useLayoutEffect
│ │ ├── How does useLayoutEffect differ from useEffect and when is it required?
│ │ ├── How do you avoid blocking the browser with expensive layout effects?
│ │ └── How do you perform measurements and DOM reads safely in useLayoutEffect?
│ ├── useImperativeHandle
│ │ ├── How do you expose imperative methods from functional components using useImperativeHandle?
│ │ ├── How do you forward refs and control which methods are accessible?
│ │ └── When should you prefer imperative handles vs prop-driven APIs?
│ ├── useTransition
│ │ ├── How do useTransition and startTransition help with concurrent rendering?
│ │ ├── How do you use isPending to show lower-priority loading states?
│ │ └── How do you balance transitions between urgent and non-urgent UI updates?
│ ├── useDeferredValue
│ │ ├── How does useDeferredValue help with input responsiveness during expensive renders?
│ │ ├── How do you combine useDeferredValue with memoization to reduce churn?
│ │ └── What are scenarios where deferred values are not helpful?
│ ├── Custom Hooks
│ │ ├── How do you design reusable custom hooks with proper dependency handling?
│ │ ├── How do you test custom hooks in isolation?
│ │ └── How do you document and version custom hooks consumed across teams?
│ └── Interview Questions
│ ├── How do you avoid prop drilling using hooks and context?
│ ├── How do you implement state synchronization across tabs using hooks?
│ ├── How do you write a usePrevious hook and what are its limitations?
│ ├── How do you build a useInfiniteScroll hook that manages fetching and cleanup?
│ ├── How do you implement optimistic updates with hooks while keeping them reversible?
│ └── How do you debug and resolve infinite render loops caused by hooks?

├── React Advanced
│ ├── Virtual DOM
│ │ ├── What is the Virtual DOM and how does React use it to optimize updates?
│ │ ├── How does reconciliation compare virtual DOM trees to determine changes?
│ │ └── What are limits of virtual DOM diffing and when to bypass it?
│ ├── Reconciliation
│ │ ├── How does React's reconciliation algorithm handle keyed and unkeyed lists?
│ │ ├── How do keys influence reconciliation and component lifecycle preservation?
│ │ └── How do you optimize reconciliation for large dynamic lists?
│ ├── Fiber
│ │ ├── What is the Fiber architecture and how did it change React's rendering model?
│ │ ├── How does Fiber enable interruptible and incremental rendering?
│ │ └── How do priorities and lanes map to rendering behavior?
│ ├── Concurrent Rendering
│ │ ├── What is concurrent rendering and how does it change component semantics?
│ │ ├── How do Suspense and transitions take advantage of concurrent rendering?
│ │ └── How do you avoid tearing and inconsistent UI under concurrent rendering?
│ ├── Suspense
│ │ ├── How does Suspense work for data fetching and code splitting?
│ │ ├── How do you design a fallback strategy and nested Suspense boundaries?
│ │ └── How does Suspense interact with server-side rendering and hydration?
│ ├── Lazy Loading
│ │ ├── How does React.lazy defer component loading and how to handle errors?
│ │ ├── How do you prefetch lazy components for better perceived performance?
│ │ └── How do you code-split by route vs by component and what are trade-offs?
│ ├── Error Boundaries
│ │ ├── How do error boundaries catch render-time errors and what can't they catch?
│ │ ├── How do you recover UI and log errors from error boundaries?
│ │ └── How do error boundaries interact with Suspense and asynchronous errors?
│ ├── Portals
│ │ ├── How do portals render children outside the DOM hierarchy and why use them?
│ │ ├── How do you manage event propagation and focus inside portals?
│ │ └── How do portals affect CSS and stacking contexts?
│ ├── Hydration
│ │ ├── What is hydration and what problems can occur during hydration mismatch?
│ │ ├── How do you reduce hydration cost for large server-rendered pages?
│ │ └── How do you debug hydration warnings and fix non-deterministic markup?
│ ├── SSR
│ │ ├── How does server-side rendering affect data fetching, routing, and caching?
│ │ ├── How do you avoid leaking server-only code into client bundles?
│ │ └── How do you handle authentication and personalization during SSR?
│ ├── CSR
│ │ ├── How does client-side rendering influence time-to-interactive and SEO?
│ │ ├── When is CSR preferable over SSR or SSG?
│ │ └── How do you measure and optimize initial JavaScript payload for CSR?
│ ├── SSG
│ │ ├── How does static site generation differ from server-side rendering and when to use it?
│ │ ├── How do you handle dynamic content and incremental updates with SSG?
│ │ └── How do you manage large numbers of statically generated pages efficiently?
│ ├── ISR
│ │ ├── What is incremental static regeneration and how does it balance freshness and performance?
│ │ ├── How do you handle revalidation and cache invalidation with ISR?
│ │ └── What are potential pitfalls when combining ISR with user-specific content?
│ ├── React Performance
│ │ ├── How do you identify rendering bottlenecks using React Profiler?
│ │ ├── How do you reduce unnecessary renders with memoization and selectors?
│ │ ├── How do you optimize bundle size by eliminating dead code and large dependencies?
│ │ └── How do you use server components to move work off the client?
│ └── Interview Questions
│ ├── How would you design a highly-performant React app that renders tens of thousands of rows incrementally?
│ ├── How do you implement optimistic UI with rollback in a complex component tree?
│ ├── How would you implement a component library that supports both SSR and client-only hydration?
│ ├── How do you handle cross-cutting concerns like logging, feature flags, and telemetry in React apps?
│ └── How do you migrate a legacy class-based React codebase to hooks and functional components?

├── State Management
│ ├── Context API
│ │ ├── How does React Context work and when should you use it vs props?
│ │ ├── How do you avoid unnecessary re-renders when using Context for global state?
│ │ └── How do you scope contexts to avoid prop drilling while preserving isolation?
│ ├── Redux
│ │ ├── How does Redux's unidirectional data flow work and what are core primitives?
│ │ ├── How do you design actions, reducers, and selectors for maintainability?
│ │ └── How do you handle side effects in Redux using middleware like redux-thunk or redux-saga?
│ ├── Redux Toolkit
│ │ ├── How does Redux Toolkit simplify reducer and action creation with createSlice?
│ │ ├── How do you set up normalized state and use createEntityAdapter?
│ │ └── How do you migrate existing Redux code to Redux Toolkit patterns?
│ ├── Middleware
│ │ ├── How do middleware chains work and how do you implement custom middleware?
│ │ ├── How do you test middleware side effects deterministically?
│ │ └── How do you implement logging, analytics, and async handling as middleware?
│ ├── Zustand
│ │ ├── How does Zustand's API differ from Redux and Context patterns?
│ │ ├── How do you persist Zustand state and handle subscriptions?
│ │ └── When is Zustand a good fit for local vs global state?
│ ├── MobX
│ │ ├── How does MobX automatic observability differ from immutable state approaches?
│ │ ├── How do you avoid common pitfalls like over-observing and performance issues in MobX?
│ │ └── How do you structure MobX stores for testability and modularity?
│ ├── React Query
│ │ ├── How does React Query manage server state and caching for data fetching?
│ │ ├── How do you configure caching, staleness, and background refetching?
│ │ └── How do you handle mutation, optimistic updates, and rollbacks with React Query?
│ ├── TanStack Query
│ │ ├── How does TanStack Query differ from traditional data-fetching libraries?
│ │ ├── How do you support pagination, infinite scroll, and dependent queries?
│ │ └── How do you integrate TanStack Query with SSR and hydration?
│ └── Interview Questions
│ ├── How do you choose the right state management tool for a mid-size product?
│ ├── How do you migrate from Redux to a simpler local state approach without regressions?
│ ├── How do you design normalized client state for collaborative real-time features?
│ ├── How do you ensure serializability of state for debugging and time travel?
│ └── How do you test complex state transitions and side effects reliably?

├── Next.js
│ ├── Routing
│ │ ├── How does file-system based routing work in Next.js and how to create nested routes?
│ │ ├── How do dynamic routes and catch-all routes differ and when to use each?
│ │ ├── How do you implement route-based code splitting and prefetching in Next.js?
│ │ └── How do you create custom route handling with rewrites, redirects, and headers?
│ ├── Dynamic Routing
│ │ ├── How do you fetch data for dynamic routes during build time and runtime?
│ │ ├── How do you handle internationalized routing and locale detection?
│ │ └── How do you implement authentication-protected dynamic routes?
│ ├── App Router
│ │ ├── How does the App Router differ from the Pages Router and what are migration concerns?
│ │ ├── How do server and client components coexist within the App Router?
│ │ └── How do you structure layouts, nested routes, and loading UI in the App Router?
│ ├── Data Fetching
│ │ ├── How do getServerSideProps, getStaticProps, and client-side fetching compare?
│ │ ├── How does the new fetch-on-server convention in Next.js App Router work?
│ │ └── How do you handle data fetching with caching and deduplication in Next.js?
│ ├── Middleware
│ │ ├── How do Next.js middleware functions run and what can they access?
│ │ ├── How do you implement authentication and A/B testing using middleware?
│ │ └── What are performance and cold-start considerations for heavy middleware logic?
│ ├── Server Components
│ │ ├── How do React Server Components work in Next.js and what can they access?
│ │ ├── How do server components affect bundle size and client payload?
│ │ └── How do you pass data and props between server and client components?
│ ├── Client Components
│ │ ├── When must a component be a client component and what are constraints?
│ │ ├── How do you manage state and effects inside client components within App Router?
│ │ └── How do client components impact hydration and interactivity?
│ ├── Rendering Strategies
│ │ ├── How do SSR, SSG, ISR, and streaming SSR differ in Next.js and when to use each?
│ │ ├── How do you choose rendering strategies for user-specific vs public pages?
│ │ └── How do edge functions and edge runtime change rendering architecture?
│ ├── Image Optimization
│ │ ├── How does Next/Image optimize images and when to disable optimization?
│ │ ├── How do you handle responsive images, external domains, and AVIF/WebP support?
│ │ └── How do you manage caching headers and CDNs for optimized images?
│ ├── Metadata API
│ │ ├── How do you set dynamic metadata for pages and layouts in Next.js?
│ │ ├── How does metadata merging work across nested layouts?
│ │ └── How do you handle open graph and social sharing metadata with Next.js?
│ ├── Caching
│ │ ├── How do Next.js caching headers, revalidation, and ISR interact with CDNs?
│ │ ├── How do you implement stale-while-revalidate strategies for API routes?
│ │ └── How do you cache server component data while ensuring freshness?
│ └── Interview Questions
│ ├── How do you architect a Next.js application for multi-tenant deployment?
│ ├── How do you implement incremental static regeneration for highly dynamic datasets?
│ ├── How do you optimize a Next.js app for cold starts on serverless platforms?
│ ├── How do you secure API routes and middleware against injection and abuse?
│ └── How do you migrate a large monolithic Next.js project to use the App Router incrementally?

├── Frontend Performance
│ ├── Core Web Vitals
│ │ ├── What are Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS)?
│ │ ├── How do you measure and diagnose Core Web Vitals in production?
│ │ └── How do you prioritize fixes when multiple Core Web Vitals are failing?
│ ├── Bundle Optimization
│ │ ├── How do you analyze bundle composition and identify large dependencies?
│ │ ├── How do code splitting and dynamic imports reduce initial payload?
│ │ └── How do tree shaking and sideEffects settings influence final bundles?
│ ├── Tree Shaking
│ │ ├── How does module format (ESM vs CJS) affect tree shaking?
│ │ ├── How do side-effectful modules prevent tree shaking and how to mark them?
│ │ └── How do you design libraries to be tree-shakeable?
│ ├── Code Splitting
│ │ ├── How do you decide chunk boundaries for routes vs components?
│ │ ├── How do preloading and prefetching strategies improve perceived performance?
│ │ └── How do you avoid waterfall loads when splitting code across many small chunks?
│ ├── Lazy Loading
│ │ ├── How do you lazy-load images, components, and non-critical resources?
│ │ ├── How do you prioritize resource loading for above-the-fold content?
│ │ └── How do you implement skeleton screens to improve perceived load time?
│ ├── Virtualization
│ │ ├── How does windowing/virtualization reduce DOM cost for large lists?
│ │ ├── How do you handle variable item heights in a virtualized list?
│ │ └── How do you maintain accessibility and focus management in virtualized UIs?
│ ├── Image Optimization
│ │ ├── How do responsive images, modern formats, and compression reduce bandwidth?
│ │ ├── When to use client-side image transformations vs server-side CDN transformations?
│ │ └── How do you handle high-DPI assets without exploding bundle size?
│ ├── Caching
│ │ ├── How do service workers and HTTP caching combine for offline-first UX?
│ │ ├── How do you configure immutable caching for long-lived assets?
│ │ └── How do you measure cache hit rates and their impact on performance?
│ ├── Lighthouse
│ │ ├── How do you use Lighthouse reports to prioritize actionable performance work?
│ │ ├── How do you interpret Performance, Accessibility, Best Practices, and SEO scores together?
│ │ └── How do you avoid gaming synthetic Lighthouse scores while ignoring real-user metrics?
│ ├── Profiling
│ │ ├── How do you use browser performance tools to identify main-thread hotspots?
│ │ ├── How do you profile React components and trace expensive renders?
│ │ └── How do you measure and attribute network time vs CPU time for slow pages?
│ └── Interview Questions
│ ├── How would you reduce Time To Interactive for a heavy homepage with many widgets?
│ ├── How do you design a strategy to progressively load third-party scripts without blocking the main thread?
│ ├── How do you measure performance impact of a new analytics SDK before and after rollout?
│ ├── How do you architect client-side caching to reduce redundant network requests across routes?
│ └── How do you optimize startup cost for PWAs installed on mobile devices?

├── Testing
│ ├── Unit Testing
│ │ ├── How do you design unit tests to be fast, deterministic, and isolated?
│ │ ├── How do you mock modules and functions to isolate unit tests?
│ │ └── How do you test pure utility functions versus DOM-manipulating logic?
│ ├── Integration Testing
│ │ ├── How do integration tests differ from unit and E2E tests in scope and purpose?
│ │ ├── How do you test data fetching flows and state updates end-to-end in a component?
│ │ └── How do you mock network requests in integration tests reliably?
│ ├── End To End Testing
│ │ ├── How do you design E2E tests that are stable and not flaky?
│ │ ├── How do you test routing, authentication, and user flows with Playwright or Cypress?
│ │ └── How do you manage test data setup and teardown for E2E suites?
│ ├── Jest
│ │ ├── How do you configure Jest for a monorepo or multi-package workspace?
│ │ ├── How do you snapshot test components and handle large snapshots?
│ │ └── How do you speed up Jest test runs and avoid slow global setups?
│ ├── React Testing Library
│ │ ├── How does React Testing Library encourage testing behavior over implementation details?
│ │ ├── How do you test asynchronous UI updates with RTL and waitFor utilities?
│ │ └── How do you test context providers, hooks, and custom render wrappers?
│ ├── Mocking
│ │ ├── How do you mock fetch, XHR, and WebSocket interactions in tests?
│ │ ├── How do you use dependency injection to simplify mocking in components?
│ │ └── How do you mock browser APIs like localStorage or matchMedia in tests?
│ ├── Snapshot Testing
│ │ ├── What are benefits and limitations of snapshot testing for UI components?
│ │ ├── How do you review and maintain snapshot changes during refactors?
│ │ └── How do you avoid brittle snapshot tests that break on unrelated changes?
│ └── Interview Questions
│ ├── How would you design a testing strategy for a large frontend app balancing speed and coverage?
│ ├── How do you test accessibility (a11y) automatically and manually in CI?
│ ├── How do you write end-to-end tests for real-time features like chat?
│ ├── How would you implement contract tests for frontend-backend integration?
│ └── How do you measure and act on flaky tests in a CI environment?

├── Security
│ ├── XSS
│ │ ├── What types of XSS exist and how do you prevent them in client-rendered apps?
│ │ ├── How do you sanitize user input without breaking legitimate content?
│ │ └── How do template libraries and frameworks mitigate XSS by default?
│ ├── CSRF
│ │ ├── How does CSRF work and how do you mitigate it for cookie-based auth?
│ │ ├── How do same-site cookies and CSRF tokens differ in protection?
│ │ └── How do you secure API endpoints consumed by SPAs against CSRF?
│ ├── Clickjacking
│ │ ├── How do you prevent clickjacking using frame-ancestors and X-Frame-Options?
│ │ ├── How do you securely embed third-party content without opening clickjacking risks?
│ │ └── How do you test for clickjacking vulnerabilities?
│ ├── CSP
│ │ ├── How does Content Security Policy mitigate XSS and what directives matter most?
│ │ ├── How do you handle inline scripts and styles with strict CSPs?
│ │ └── How do you report CSP violations and iterate on policy tightening?
│ ├── Authentication
│ │ ├── How do secure authentication flows differ for SPAs vs traditional server-rendered apps?
│ │ ├── How do you protect refresh tokens in single-page applications?
│ │ └── How do you implement multi-factor authentication and progressive profiling on the frontend?
│ ├── Authorization
│ │ ├── How do you enforce least privilege on the client while deferring to server checks?
│ │ ├── How do you implement feature flags and guard UI for unauthorized users?
│ │ └── How do you prevent client-side manipulation of privileged UI actions?
│ ├── Secure Storage
│ │ ├── How do you store secrets, tokens, and PII on the client securely?
│ │ ├── How does secure enclave or platform-specific storage change your approach on mobile?
│ │ └── How do you encrypt sensitive data before storing it in IndexedDB?
│ ├── Security Headers
│ │ ├── Which HTTP headers should you set to harden web apps (CSP, HSTS, X-Content-Type-Options)?
│ │ ├── How do you configure Strict-Transport-Security across multiple subdomains?
│ │ └── How do you tune X-Content-Type-Options and Referrer-Policy for privacy and compat?
│ └── Interview Questions
│ ├── How would you design a secure password reset flow in a single-page application?
│ ├── How do you protect against supply-chain attacks from malicious npm packages?
│ ├── How do you perform threat modeling for a new frontend feature that processes user uploads?
│ ├── How do you securely integrate third-party scripts and trackers while minimizing risk?
│ └── How do you detect and respond to client-side security incidents in production?

├── Machine Coding
│ ├── Todo Application
│ │ ├── How would you design a Todo app with offline support and sync conflict resolution?
│ │ ├── How do you implement reorderable todos with drag-and-drop and keyboard accessibility?
│ │ └── How do you persist todos efficiently using IndexedDB and service workers?
│ ├── Kanban Board
│ │ ├── How do you design a Kanban board supporting multiple swimlanes and nested cards?
│ │ ├── How do you implement real-time collaborative drag-and-drop on a Kanban board?
│ │ └── How do you optimize rendering when many cards and lanes update simultaneously?
│ ├── Infinite Scroll
│ │ ├── How do you implement infinite scroll with proper pagination and memory cleanup?
│ │ ├── How do you handle jumping to an item index and preserving scroll position?
│ │ └── How do you test infinite scroll behavior and edge cases like fast scrolling?
│ ├── Autocomplete Search
│ │ ├── How do you implement debounced autocomplete that cancels and deduplicates requests?
│ │ ├── How do you rank and display fuzzy matches efficiently on the client?
│ │ └── How do you implement keyboard navigation and accessible announcements for suggestions?
│ ├── Chat Application
│ │ ├── How do you architect a web chat with message ordering, offline queuing, and delivery receipts?
│ │ ├── How do you implement typing indicators and message read receipts efficiently?
│ │ └── How do you secure real-time messaging against message injection and replay?
│ ├── Dashboard
│ │ ├── How do you design a metrics dashboard with many widgets that periodically refresh?
│ │ ├── How do you implement efficient shared polling and caching between widgets?
│ │ └── How do you handle slow or failing data sources gracefully in widgets?
│ ├── File Explorer
│ │ ├── How do you implement a file explorer with hierarchical navigation and lazy loading folders?
│ │ ├── How do you implement bulk selection, keyboard shortcuts, and virtualized listing?
│ │ └── How do you preview common file types securely on the client?
│ ├── Data Table
│ │ ├── How do you implement a performant, accessible data table with sorting, filtering, and pagination?
│ │ ├── How do you support server-side pagination vs client-side virtualization trade-offs?
│ │ └── How do you support column resizing, reordering, and sticky headers?
│ ├── Shopping Cart
│ │ ├── How do you implement a shopping cart with optimistic updates and inventory checks?
│ │ ├── How do you persist a cart across devices and handle merging?
│ │ └── How do you implement promotions, discounts, and tax calculations on the client?
│ ├── Calendar
│ │ ├── How do you implement a drag-to-create event calendar with recurring events support?
│ │ ├── How do you optimize rendering for multi-day and all-day events?
│ │ └── How do you handle event timezones and daylight saving transitions in the UI?
│ ├── Whiteboard
│ │ ├── How do you implement a collaborative whiteboard with drawing, shapes, and real-time sync?
│ │ ├── How do you compress and transmit drawing diffs efficiently over WebSocket?
│ │ └── How do you implement undo/redo and versioning for whiteboard sessions?
│ ├── Video Player
│ │ ├── How do you implement a custom HTML5 video player with adaptive bitrate and captions?
│ │ ├── How do you implement seekable live streaming and DVR behavior?
│ │ └── How do you measure and reduce startup time for large video assets?
│ ├── Notification Center
│ │ ├── How do you implement an in-app notification center with grouping and read-state synchronization?
│ │ ├── How do you handle push notifications, permission prompts, and fallback channels?
│ │ └── How do you implement throttling and deduplication for frequent notifications?
│ ├── Multi Select Component
│ │ ├── How do you design a performant multi-select with virtualized options and keyboard support?
│ │ ├── How do you implement search, tagging, and async option loading?
│ │ └── How do you handle selection persistence and controlled vs uncontrolled usages?
│ ├── Modal Manager
│ │ ├── How do you implement a global modal manager that stacks multiple modals and traps focus?
│ │ ├── How do you manage scroll locking and background inertness when modals are open?
│ │ └── How do you handle nested modals and returning focus on close?
│ └── Machine Coding Questions
│ ├── How would you design and implement a feature-flag driven UI rollout system for frontend experiments?
│ ├── How would you implement client-side A/B testing with deterministic bucketing and exposure tracking?
│ └── How would you design a client-side plugin system allowing third-party widgets to render inside your app?

├── Frontend System Design
│ ├── YouTube
│ │ ├── How would you design the frontend architecture for a YouTube-scale video browsing experience?
│ │ ├── How do you implement progressive playback and prefetch of video thumbnails and metadata?
│ │ ├── How do you optimize discovery page for personalization and low-latency interactions?
│ │ └── How would you handle comment loading, threading, and moderation at scale on the client?
│ ├── Netflix
│ │ ├── How do you design a performant carousel-heavy homepage with recommendations and personalization?
│ │ ├── How do you implement offline downloads and resume functionality in a web client?
│ │ ├── How do you design ABR (adaptive bitrate) heuristics for web playback?
│ │ └── How do you secure DRM-protected content integrated with web APIs?
│ ├── WhatsApp Web
│ │ ├── How do you architect a near-real-time message sync between mobile and web clients?
│ │ ├── How do you implement end-to-end encryption key handling and message replay prevention on the web?
│ │ ├── How do you maintain consistent state across tabs and reconnect gracefully?
│ │ └── How do you design UI to handle large chat histories without exhausting memory?
│ ├── Instagram Feed
│ │ ├── How do you design an infinite-scrolling feed with personalized ranking and caching?
│ │ ├── How do you handle media-heavy content, progressive loading, and prefetch strategies?
│ │ ├── How would you implement client-side ordering to preserve consistency across devices?
│ │ └── How do you surface ads and sponsored content without degrading UX?
│ ├── Google Docs
│ │ ├── How would you design a collaborative document editor supporting concurrent edits with low latency?
│ │ ├── How do you implement operational transformation or CRDT on the frontend?
│ │ ├── How do you handle cursor presence, selection syncing, and collaborative awareness?
│ │ └── How do you optimize rendering for large documents with continuous edits?
│ ├── E Commerce
│ │ ├── How do you design a highly-performant product listing and checkout flow for an e-commerce site?
│ │ ├── How do you guarantee correctness of pricing, promotions, and inventory on the client?
│ │ ├── How do you handle checkout resilience across intermittent networks and payment provider failures?
│ │ └── How do you design frontend to support internationalization, taxes, and multiple currencies?
│ ├── URL Shortener UI
│ │ ├── How would you build a simple but secure URL shortening front end with analytics?
│ │ ├── How do you design rate limiting and abuse prevention on the client side?
│ │ └── How do you provide preview and validation for shortened URLs?
│ ├── Notification System
│ │ ├── How do you design a scalable client-side notification system with batching and priority?
│ │ ├── How do you integrate web push, in-app, and email fallbacks coherently?
│ │ └── How do you manage user preferences and per-device notification settings?
│ ├── Search System
│ │ ├── How do you architect a snappy search UI with instant results and facets?
│ │ ├── How do you implement client-side ranking, debouncing, and incremental refinement?
│ │ └── How do you handle highlighting, pagination, and zero-result experiences?
│ ├── Analytics Dashboard
│ │ ├── How do you design an analytics dashboard supporting large datasets and ad-hoc querying?
│ │ ├── How do you implement efficient client-side aggregations and streaming data visualization?
│ │ └── How do you secure sensitive analytics data and implement row-level permissions?
│ ├── Design System
│ │ ├── How do you architect a scalable design system consumed by multiple product teams?
│ │ ├── How do you version, test, and release component changes while minimizing breaking changes?
│ │ └── How do you design tokens and component APIs for cross-platform consistency?
│ ├── Component Library
│ │ ├── How do you design a component library that supports theming, accessibility, and SSR?
│ │ ├── How do you publish and consume components across monorepos and external apps?
│ │ └── How do you measure and reduce the runtime and bundle cost of shared components?
│ ├── Micro Frontends
│ │ ├── How do you design a micro-frontend architecture that balances independent deployability and shared UX?
│ │ ├── How do you handle cross-team shared state, routing, and authentication?
│ │ └── How do you manage CSS and JS isolation to avoid collisions between micro frontends?
│ └── System Design Questions
│ ├── How would you design a frontend architecture to serve millions of daily active users with low latency?
│ ├── How do you design observability and error reporting for frontend applications at scale?
│ ├── How do you plan for progressive enhancement and graceful degradation across diverse client capabilities?
│ ├── How do you design a rollout and rollback strategy for frontend features across multiple regions?
│ └── How do you architect multi-region CDNs, edge caching, and client cache invalidation for a global app?

├── Behavioral And Project Discussion
│ ├── Resume Questions
│ │ ├── Can you walk me through the most technically challenging project on your resume?
│ │ ├── Which part of your resume best demonstrates your leadership or ownership?
│ │ ├── How did you choose technologies for a major project and what were trade-offs?
│ │ └── How do you keep your public portfolio and resume up to date?
│ ├── Project Deep Dive
│ │ ├── How did you design the architecture for your flagship project and why?
│ │ ├── What performance challenges did you face and how did you solve them?
│ │ ├── How did you ensure accessibility in your project and measure success?
│ │ └── How did you handle cross-team collaboration and dependencies during the project?
│ ├── Architecture Decisions
│ │ ├── How did you decide between server-side rendering and client-side rendering in a past project?
│ │ ├── How did you evaluate third-party vendor trade-offs during architecture selection?
│ │ ├── How do you document architecture decisions for future maintainers?
│ │ └── How do you decompose a monolith into modular frontend packages?
│ ├── Performance Challenges
│ │ ├── Tell me about a time you improved page load time significantly; what steps did you take?
│ │ ├── How did you measure before and after impact of performance optimizations?
│ │ ├── How did you prioritize technical debt vs feature development when performance suffered?
│ │ └── How did you communicate performance trade-offs to product stakeholders?
│ ├── Debugging Stories
│ │ ├── Describe a production bug you diagnosed remotely; how did you identify root cause?
│ │ ├── How do you use logs, traces, and user reports to reconstruct complex bugs?
│ │ ├── How do you perform post-mortems to prevent recurrence of critical incidents?
│ │ └── How do you train teams to improve debugging skills and reduce time-to-fix?
│ ├── Teamwork Questions
│ │ ├── How do you mentor junior engineers and measure their growth?
│ │ ├── How do you handle disagreements on technical approaches within a team?
│ │ ├── How do you onboard new engineers to a large frontend codebase efficiently?
│ │ └── How do you create cross-functional alignment with design and product teams?
│ ├── Conflict Resolution
│ │ ├── How did you resolve a conflict involving code ownership and approvals?
│ │ ├── How do you approach constructive feedback and receive it from peers?
│ │ ├── How do you escalate unresolved technical conflicts to leadership?
│ │ └── How do you ensure psychological safety while enforcing code quality?
│ ├── Leadership Questions
│ │ ├── How have you driven technical strategy or vision for a product area?
│ │ ├── How do you balance hands-on coding with mentorship and roadmap planning?
│ │ ├── How do you delegate responsibilities and maintain accountability in large projects?
│ │ └── How do you influence cross-team technical decisions without direct authority?
│ ├── Ownership Questions
│ │ ├── Describe a time you took ownership of a failing project and turned it around.
│ │ ├── How do you ensure long-term maintainability for features you build?
│ │ ├── How do you handle on-call responsibilities and production bugs for frontend services?
│ │ └── How do you prioritize technical debt, refactors, and new feature work?
│ ├── Product Thinking
│ │ ├── How do you translate product requirements into technical acceptance criteria?
│ │ ├── How do you validate feature ideas with experiments and telemetry?
│ │ ├── How do you incorporate user feedback into iterative frontend design cycles?
│ │ └── How do you measure success for frontend-driven features beyond click metrics?
│ └── HR Questions
│ ├── Why are you interested in this role and our company?
│ ├── How do you handle tight deadlines and shifting priorities?
│ ├── What are your salary expectations and ideal team structure?
│ ├── How do you continue learning and stay current with frontend technologies?
│ └── Where do you see your career in the next three to five years?

Continue