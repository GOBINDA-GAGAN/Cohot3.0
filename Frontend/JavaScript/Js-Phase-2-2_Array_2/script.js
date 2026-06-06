// ================================
// JAVASCRIPT ARRAY METHODS REVISION
// ================================

const arr = [1, 2, 3, 4, 5];

console.log("Original Array:", arr);


// =================================
// 1. for...of
// Purpose: Loop through values
// =================================
console.log("\n1. for...of");

for (const value of arr) {
    console.log(value);
}


// =================================
// 2. forEach()
// Purpose: Iterate array
// Returns: undefined
// =================================
console.log("\n2. forEach()");

arr.forEach((value, index) => {
    console.log(index, value);
});


// =================================
// 3. map()
// Purpose: Transform data
// Returns: New Array
// =================================
console.log("\n3. map()");

const squares = arr.map(value => value * value);

console.log("Squares:", squares);


// =================================
// 4. filter()
// Purpose: Select matching elements
// Returns: New Array
// =================================
console.log("\n4. filter()");

const marks = [89, 33, 40, 67, 78, 99, 94];

const passedStudents = marks.filter(mark => mark >= 40);

console.log("Passed Students:", passedStudents);


// =================================
// 5. reduce()
// Purpose: Convert array to single value
// =================================
console.log("\n5. reduce()");

const numbers = [10, 20, 30, 40];

const sum = numbers.reduce((acc, value) => {
    return acc + value;
}, 0);

console.log("Sum:", sum);


// =================================
// 6. find()
// Purpose: First matching element
// =================================
console.log("\n6. find()");

const ages = [20, 30, 20, 32, 12];

const firstAgeGreaterThan25 = ages.find(age => age > 25);

console.log("First Age > 25:", firstAgeGreaterThan25);


// =================================
// 7. findIndex()
// Purpose: First matching index
// =================================
console.log("\n7. findIndex()");

const firstIndex = ages.findIndex(age => age > 25);

console.log("Index:", firstIndex);


// =================================
// 8. some()
// Purpose: At least one condition true
// =================================
console.log("\n8. some()");

const hasFailStudent = marks.some(mark => mark < 40);

console.log("Any Failed Student:", hasFailStudent);


// =================================
// 9. every()
// Purpose: All conditions true
// =================================
console.log("\n9. every()");

const allPassed = marks.every(mark => mark >= 40);

console.log("All Passed:", allPassed);


// =================================
// 10. Spread Operator (...)
// Purpose: Copy / Merge arrays
// =================================
console.log("\n10. Spread Operator");

const arr1 = [1, 2];
const arr2 = [3, 4];

const mergedArray = [...arr1, ...arr2];

console.log("Merged Array:", mergedArray);


// =================================
// 11. Rest Operator (...)
// Purpose: Collect values
// =================================
console.log("\n11. Rest Operator");

function total(...nums) {
    return nums.reduce((acc, num) => acc + num, 0);
}

console.log(total(10, 20, 30, 40));


// =================================
// 12. Array Destructuring
// Purpose: Extract values
// =================================
console.log("\n12. Array Destructuring");

const fruits = ["Apple", "Banana", "Mango"];

const [first, second, third] = fruits;

console.log(first);
console.log(second);
console.log(third);


// =================================
// QUICK RECALL
// =================================

/*
for...of    -> Loop values
forEach()   -> Iterate
map()       -> Transform
filter()    -> Select
reduce()    -> Accumulate
find()      -> First Match
findIndex() -> First Match Index
some()      -> Any True
every()     -> All True
spread(...) -> Expand
rest(...)   -> Collect
[a,b,c]     -> Destructure
*/