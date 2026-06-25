// ===============================
// ES6 Import
// ===============================

import { a, sum } from "./main.js";

// a = exported variable
// sum = exported function

console.log(a); // 10
console.log(sum(2, 3)); // 5


// ===============================
// REAL DOM
// ===============================

// Create h1 element
let h1 = document.createElement("h1");

// Add text
h1.textContent = "I came from Real DOM";

// Append to body
document.body.append(h1);

/*
Flow:

JavaScript
    │
    ▼
createElement()
    │
    ▼
Real DOM Node
    │
    ▼
Added to Browser

*/


// ===============================
// REACT VIRTUAL DOM
// ===============================

// React.createElement(
//      tag,
//      props,
//      children
// )

let rh1 = React.createElement(
    "h2",
    { className: "box" },
    React.createElement(
        "span",
        null,
        "Hello I came from React Virtual DOM"
    )
);

/*

Equivalent JSX:

<h2 className="box">
    <span>Hello I came from React Virtual DOM</span>
</h2>

*/


// ===============================
// REACT ROOT
// ===============================

// Select root div

let rootElement = document.querySelector("#root");

/*

HTML:

<div id="root"></div>

*/


// Create React Root

let root = ReactDOM.createRoot(rootElement);


// ===============================
// RENDER
// ===============================

// Convert Virtual DOM
// into Real DOM

root.render(rh1);

/*

Flow:

React.createElement()
          │
          ▼
     Virtual DOM
          │
          ▼
      render()
          │
          ▼
      Real DOM
          │
          ▼
      Browser UI

*/


// ===============================
// OUTPUT
// ===============================

/*

Body:

<h1>I came from Real DOM</h1>

Root:

<div id="root">
    <h2 class="box">
        <span>
            Hello I came from React Virtual DOM
        </span>
    </h2>
</div>

Console:

10
5

*/