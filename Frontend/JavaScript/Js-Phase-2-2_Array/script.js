// ======================================================
// 🚀 JAVASCRIPT ARRAYS - COMPLETE REVISION NOTES
// ======================================================

// ------------------------------------------------------
// 1. ARRAY DECLARATION
// ------------------------------------------------------

// Method 1 (Recommended)
let arr = [1, 2, 3, 4, 5];

// Method 2
let arr2 = new Array(3); // [empty × 3]

console.log(arr);
console.log(arr.length); // Total elements

// ------------------------------------------------------
// 2. ACCESSING ELEMENTS
// ------------------------------------------------------

console.log(arr[0]); // First Element
console.log(arr[2]); // Element at Index 2
console.log(arr[arr.length - 1]); // Last Element

// ------------------------------------------------------
// 3. MUTATING METHODS
// (Original Array Changes)
// ------------------------------------------------------

// ---------------- push() ----------------
// Add element at END
arr.push(99);

console.log(arr);
// [1,2,3,4,5,99]

// Returns New Length

// ---------------- pop() ----------------
// Remove element from END

arr.pop();

console.log(arr);
// [1,2,3,4,5]

// Returns Removed Element

// ---------------- unshift() ----------------
// Add element at START

arr.unshift(100);

console.log(arr);
// [100,1,2,3,4,5]

// Returns New Length

// ---------------- shift() ----------------
// Remove element from START

arr.shift();

console.log(arr);
// [1,2,3,4,5]

// Returns Removed Element

// ------------------------------------------------------
// 4. SPLICE() 🔥
// Add / Delete / Replace
// Mutates Original Array
// Syntax:
// array.splice(startIndex, deleteCount, newElement)
// ------------------------------------------------------

let nums = [1, 2, 3, 4, 5];

// Delete
nums.splice(1, 2);

console.log(nums);
// [1,4,5]

// Add
nums.splice(1, 0, 100);

console.log(nums);
// [1,100,4,5]

// Replace
nums.splice(2, 1, 999);

console.log(nums);
// [1,100,999,5]

// ------------------------------------------------------
// 5. NESTED ARRAY / OBJECT ACCESS
// ------------------------------------------------------

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  { name: "Alok" }
];

console.log(matrix[0][1]); // 2
console.log(matrix[2].name); // Alok

// ------------------------------------------------------
// 6. REVERSE()
// ------------------------------------------------------

let reverseArr = [1, 2, 3, 4];

reverseArr.reverse();

console.log(reverseArr);
// [4,3,2,1]

// ------------------------------------------------------
// 7. SORT()
// ------------------------------------------------------

let rollNumbers = [23, 12, 1, 43, 20, 100];

// Wrong for Numbers

console.log(rollNumbers.sort());

// Correct Ascending

console.log(
  rollNumbers.sort((a, b) => a - b)
);

// [1,12,20,23,43,100]

// Correct Descending

console.log(
  rollNumbers.sort((a, b) => b - a)
);

// [100,43,23,20,12,1]

// ------------------------------------------------------
// 8. LOOPING THROUGH ARRAY
// ------------------------------------------------------

let xyz = [2, 3, 4, 5];

// Traditional For Loop

for (let i = 0; i < xyz.length; i++) {
  console.log(xyz[i]);
}

// for...of

for (let value of xyz) {
  console.log(value);
}

// ------------------------------------------------------
// 9. CREATE EVEN NUMBER ARRAY
// ------------------------------------------------------

let evenNumbers = [];

for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    evenNumbers.push(i);
  }
}

console.log(evenNumbers);

// [0,2,4,6,8,10]

// ------------------------------------------------------
// 10. NON-MUTATING METHODS
// (Original Array Does NOT Change)
// ------------------------------------------------------

let spider = [2, 3, 4, 5, 6];
let spider2 = [200, 300, 400];

// ---------------- slice() ----------------
// Extract Part of Array

console.log(
  spider.slice(1, 4)
);

// [3,4,5]

// ---------------- concat() ----------------
// Merge Arrays

console.log(
  spider.concat(spider2)
);

// [2,3,4,5,6,200,300,400]

// ---------------- includes() ----------------
// Check Existence

console.log(
  spider.includes(5)
);

// true

// ---------------- indexOf() ----------------
// Find Index

console.log(
  spider.indexOf(6)
);

// 4

console.log(
  spider.indexOf(999)
);

// -1

// ---------------- join() ----------------
// Array -> String

console.log(
  spider.join("/")
);

// "2/3/4/5/6"

// ------------------------------------------------------
// 11. STRING ↔ ARRAY
// ------------------------------------------------------

let fullName = "Gobinda-Gagan-Dey";

// String -> Array

let nameArray = fullName.split("-");

console.log(nameArray);

// ["Gobinda","Gagan","Dey"]

// Array -> String

console.log(
  nameArray.join("/")
);

// Gobinda/Gagan/Dey

// ------------------------------------------------------
// 12. SPREAD OPERATOR (...)
// ------------------------------------------------------

let melody = [10, 20, 30];

// Copy Array

let melodyCopy = [...melody];

console.log(melodyCopy);

// Merge Arrays

let merged = [...melody, 40, 50];

console.log(merged);

// [10,20,30,40,50]

// ------------------------------------------------------
// 13. PRIMITIVE VS REFERENCE
// ------------------------------------------------------

// Primitive

let a = 10;
let b = a;

b++;

console.log(a); // 10
console.log(b); // 11

// Separate Memory

// ------------------------------------------------------

// Reference

let count = [1, 2, 3];

let count2 = count;

count2.push(100);

console.log(count);
// [1,2,3,100]

console.log(count2);
// [1,2,3,100]

// Same Memory Reference

// ------------------------------------------------------
// Correct Array Copy
// ------------------------------------------------------

let original = [1, 2, 3];

let copied = [...original];

copied.push(100);

console.log(original);
// [1,2,3]

console.log(copied);
// [1,2,3,100]

// Different Memory

// ------------------------------------------------------
// 14. ARRAY DESTRUCTURING
// ------------------------------------------------------

let numbers = [10, 20, 30];

// Basic

let [x, y, z] = numbers;

console.log(x); // 10
console.log(y); // 20
console.log(z); // 30

// Skip Values

let [first, , third] = numbers;

console.log(first); // 10
console.log(third); // 30

// ------------------------------------------------------
// 🎯 MOST IMPORTANT INTERVIEW METHODS
// ------------------------------------------------------

/*
push()       -> Add at End
pop()        -> Remove from End

unshift()    -> Add at Start
shift()      -> Remove from Start

splice()     -> Add/Delete/Replace (Mutable)
slice()      -> Copy Portion (Immutable)

concat()     -> Merge Arrays

includes()   -> Check Value Exists

indexOf()    -> Find Index

join()       -> Array -> String
split()      -> String -> Array

reverse()    -> Reverse Array

sort()       -> Sort Array

for...of     -> Loop Through Values

spread(...)  -> Copy / Merge

destructuring -> Extract Values
*/

// ======================================================
// 🧠 MEMORY TRICK
// ======================================================

/*
Push  -> End Add
Pop   -> End Remove

Unshift -> Start Add
Shift   -> Start Remove

Slice  -> Copy Part

Splice -> Change Original

Split  -> String ➜ Array

Join   -> Array ➜ String

Spread (...) -> Copy / Merge

Sort Numbers:
Ascending  -> (a,b) => a-b
Descending -> (a,b) => b-a
*/