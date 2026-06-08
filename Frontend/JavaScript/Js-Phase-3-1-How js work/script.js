// =======================================
// JAVASCRIPT CORE CONCEPTS (INTERVIEW NOTES)
// =======================================

// JavaScript is a Single-Threaded Synchronous Scripting Language.
// Single-Threaded = One task at a time.
// Synchronous = Executes line by line.

// =======================================
// GLOBAL EXECUTION CONTEXT (GEC)
// =======================================

// Execution Context = Environment where JavaScript code runs.

// Every Execution Context has 2 phases:

// 1. Memory Creation Phase
//    - Variables are allocated memory.
//    - Functions are stored completely in memory.

// 2. Code Execution Phase
//    - Code executes line by line.

// =======================================
// CALL STACK
// =======================================

// Stack follows FILO (First In Last Out)

// Example:
//
// Call Stack
// ------------
// |   EC3    |
// |   EC2    |
// |   EC1    |
// |   GEC    |
// ------------
//
// Execution order:
// EC3 -> EC2 -> EC1 -> GEC

// =======================================
// HOISTING
// =======================================

// Variable and function declarations are moved to the top
// of their scope during the Memory Creation Phase.

console.log(a); // undefined
var a = 10;

// Internally:
// var a;
// console.log(a);
// a = 10;

// let and const are hoisted too,
// but they stay in the Temporal Dead Zone (TDZ).

// console.log(b); // ReferenceError
let b = 40;

// =======================================
// var vs let vs const
// =======================================

// var   -> Function Scoped
// let   -> Block Scoped
// const -> Block Scoped

function test() {
    if (true) {
        var x = 10;
        let y = 20;
        const z = 30;
    }

    console.log(x); // 10
    // console.log(y); // Error
    // console.log(z); // Error
}

// =======================================
// TEMPORAL DEAD ZONE (TDZ)
// =======================================

// TDZ = Time between entering scope and variable initialization.

// console.log(name); // ReferenceError
let name = "Gobinda";

// =======================================
// SCOPE
// =======================================

// 1. Global Scope
// 2. Function Scope
// 3. Block Scope
// 4. Lexical Scope

let globalVar = "Global";

function outer() {
    let outerVar = "Outer";

    function inner() {
        let innerVar = "Inner";
        console.log(globalVar, outerVar, innerVar);
    }

    inner();
}

outer();

// =======================================
// LEXICAL SCOPE
// =======================================

// A function can access variables from its parent scope.

let city = "Kharagpur";

function parent() {
    let college = "GIET";

    function child() {
        console.log(city);
        console.log(college);
    }

    child();
}

// =======================================
// SCOPE CHAIN
// =======================================

// JavaScript searches variables in this order:
//
// Current Scope
// ↓
// Parent Scope
// ↓
// Global Scope
// ↓
// Not Found -> ReferenceError

// =======================================
// CLOSURE
// =======================================

// A Closure is created when an inner function remembers
// variables from its outer function even after the outer
// function has finished execution.

function counter() {
    let count = 0;

    return function () {
        count++;
        console.log(count);
    };
}

const increment = counter();

increment(); // 1
increment(); // 2
increment(); // 3

// =======================================
// INTERVIEW FLOW
// =======================================

// JavaScript
// ↓
// Execution Context
// ↓
// Call Stack
// ↓
// Hoisting
// ↓
// TDZ
// ↓
// Scope
// ↓
// Lexical Scope
// ↓
// Scope Chain
// ↓
// Closure

// Master these concepts and most JavaScript execution
// interview questions become much easier.
