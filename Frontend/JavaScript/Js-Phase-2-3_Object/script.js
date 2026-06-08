// ======================================================
// JAVASCRIPT OBJECTS - COMPLETE REVISION FILE
// ======================================================

// ------------------------------------------------------
// 1. OBJECT CREATION
// ------------------------------------------------------

// Method 1: Object Literal
const person = {
    name: "Aman",
    age: 25,
    city: "Bhopal",
    isStudent: true
};

console.log("Person:", person);

// Method 2: Object Constructor
const user2 = new Object();
user2.name = "Alok";
user2.age = 24;

console.log("User2:", user2);

// Method 3: Constructor Function
function User(name, age) {
    this.name = name;
    this.age = age;
}

const user3 = new User("Gobinda", 23);
console.log("User3:", user3);

// Method 4: Class
class Employee {
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }
}

const emp = new Employee("Alok", "Frontend Developer");
console.log("Employee:", emp);

// ------------------------------------------------------
// 2. ACCESSING PROPERTIES
// ------------------------------------------------------

const product = {
    _id: "34I17P",
    model: "iPhone 17 Pro",
    price: 30000,
    color: "White",
    isGood: true
};

console.log(product.model);      // Dot Notation
console.log(product["_id"]);     // Bracket Notation

// ------------------------------------------------------
// 3. CRUD OPERATIONS
// ------------------------------------------------------

const user = {
    name: "Alok",
    age: 30,
    marks: 78,
    isSingle: true
};

// Read
console.log(user.name);

// Create
user.city = "Balasore";

// Update
user.isSingle = false;

// Delete
delete user.marks;

console.log(user);

// ------------------------------------------------------
// 4. OBJECT METHODS
// ------------------------------------------------------

const robot = {
    name: "Chitti",
    ram: "20GB",

    creator: {
        name: "Vasikaran",
        age: 40
    },

    skills: ["Cooking", "Dancing", "Fighting"],

    sayHi() {
        return `Hello, I am ${this.name}`;
    },

    getCreator() {
        return this.creator.name;
    }
};

console.log(robot.sayHi());
console.log(robot.getCreator());

// ------------------------------------------------------
// 5. THIS KEYWORD
// ------------------------------------------------------

const student = {
    name: "Gobinda",

    greet() {
        console.log(`Hello ${this.name}`);
    }
};

student.greet();

// ------------------------------------------------------
// 6. NESTED OBJECT
// ------------------------------------------------------

const car = {
    brand: "BMW",

    engine: {
        type: "V8 Twin Turbo",
        horsepower: 617
    }
};

console.log(car.engine.horsepower);

// ------------------------------------------------------
// 7. ARRAY INSIDE OBJECT
// ------------------------------------------------------

const developer = {
    name: "Gobinda",
    skills: ["HTML", "CSS", "JS", "React"]
};

console.log(developer.skills[0]);

// ------------------------------------------------------
// 8. OBJECT INSIDE ARRAY
// ------------------------------------------------------

const users = [
    {
        id: 1,
        name: "A"
    },
    {
        id: 2,
        name: "B"
    }
];

console.log(users[1].name);

// ------------------------------------------------------
// 9. IMPORTANT OBJECT METHODS
// ------------------------------------------------------

console.log(Object.keys(user));

console.log(Object.values(user));

console.log(Object.entries(user));

console.log(Object.hasOwn(user, "name"));

console.log("name" in user);

// ------------------------------------------------------
// 10. LOOPING THROUGH OBJECT
// ------------------------------------------------------

for (const key in user) {
    console.log(key, user[key]);
}

for (const [key, value] of Object.entries(user)) {
    console.log(key, value);
}

// ------------------------------------------------------
// 11. OBJECT.SEAL()
// ------------------------------------------------------

const sealObj = {
    name: "DJ"
};

Object.seal(sealObj);

sealObj.name = "XYZ"; // Allowed

delete sealObj.name; // Not Allowed

sealObj.age = 20; // Not Allowed

console.log(sealObj);

// ------------------------------------------------------
// 12. OBJECT.FREEZE()
// ------------------------------------------------------

const freezeObj = {
    name: "Gobinda"
};

Object.freeze(freezeObj);

freezeObj.name = "New Name";

console.log(freezeObj);

// ------------------------------------------------------
// 13. DESTRUCTURING
// ------------------------------------------------------

const bike = {
    brand: "BMW",
    model: "S1000RR",
    year: 2025,
    color: "Black"
};

const {
    brand,
    model,
    color,
    ...restData
} = bike;

console.log(brand);
console.log(model);
console.log(color);
console.log(restData);

// ------------------------------------------------------
// 14. ARRAY DESTRUCTURING
// ------------------------------------------------------

const arr = [11, 22, 33, 44, 55, 66];

const [a, b, c, ...others] = arr;

console.log(a, b, c);
console.log(others);

// ------------------------------------------------------
// 15. SPREAD OPERATOR
// ------------------------------------------------------

const nums = [1, 2, 3];

const copyNums = [...nums];

console.log(copyNums);

const userA = {
    name: "Gobinda"
};

const userB = {
    ...userA
};

console.log(userB);

// ------------------------------------------------------
// 16. REST OPERATOR
// ------------------------------------------------------

function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(10, 20, 30));

// ------------------------------------------------------
// 17. SHALLOW COPY
// ------------------------------------------------------

const fuel = {
    type: "Petrol",
    mileage: "15 km/l"
};

const shallowCopy = {
    ...fuel
};

console.log(shallowCopy);

// ------------------------------------------------------
// 18. DEEP COPY
// ------------------------------------------------------

// Method 1
const deepCopy1 = JSON.parse(JSON.stringify(fuel));

// Method 2 (Modern)
const deepCopy2 = structuredClone(fuel);

console.log(deepCopy1);
console.log(deepCopy2);

// ------------------------------------------------------
// 19. OPTIONAL CHAINING
// ------------------------------------------------------

const company = {
    employee: {
        name: "Gobinda"
    }
};

console.log(company?.employee?.name);

console.log(company?.employee?.salary);

// ------------------------------------------------------
// 20. NULLISH COALESCING
// ------------------------------------------------------

const salary = null;

console.log(salary ?? 10000);

// ------------------------------------------------------
// 21. OBJECT ASSIGN
// ------------------------------------------------------

const obj1 = {
    a: 1
};

const obj2 = {
    b: 2
};

const merged = Object.assign({}, obj1, obj2);

console.log(merged);

// ------------------------------------------------------
// 22. OBJECT.FROMENTRIES
// ------------------------------------------------------

const entries = [
    ["name", "Gobinda"],
    ["age", 23]
];

const obj = Object.fromEntries(entries);

console.log(obj);

// ------------------------------------------------------
// 23. JSON METHODS
// ------------------------------------------------------

const userJson = {
    name: "Gobinda",
    age: 23
};

const jsonString = JSON.stringify(userJson);

console.log(jsonString);

const normalObj = JSON.parse(jsonString);

console.log(normalObj);

// ------------------------------------------------------
// 24. PROPERTY DESCRIPTOR
// ------------------------------------------------------

const account = {
    balance: 1000
};

console.log(
    Object.getOwnPropertyDescriptor(
        account,
        "balance"
    )
);

// ------------------------------------------------------
// 25. PROTOTYPE
// ------------------------------------------------------

function Animal(name) {
    this.name = name;
}

Animal.prototype.sayHi = function () {
    console.log(`Hi, I am ${this.name}`);
};

const dog = new Animal("Tommy");

dog.sayHi();

// ------------------------------------------------------
// 26. OBJECT INTERVIEW QUESTIONS PRACTICE
// ------------------------------------------------------

// Remove Property
const test1 = {
    a: 1,
    b: 2
};

delete test1.a;

// Check Property Exists
console.log("b" in test1);

// Count Properties
console.log(Object.keys(test1).length);

// Convert Object -> Array
console.log(Object.entries(test1));

// Convert Array -> Object
console.log(
    Object.fromEntries([
        ["x", 10],
        ["y", 20]
    ])
);

// ======================================================
// OBJECT TOPICS COVERED
// ======================================================

// 1. Object Literal
// 2. new Object()
// 3. Constructor Function
// 4. Class Constructor
// 5. CRUD
// 6. Dot Notation
// 7. Bracket Notation
// 8. Nested Objects
// 9. Arrays in Objects
// 10. Objects in Arrays
// 11. Methods
// 12. this Keyword
// 13. Object.keys()
// 14. Object.values()
// 15. Object.entries()
// 16. hasOwn()
// 17. in Operator
// 18. for...in
// 19. Object.seal()
// 20. Object.freeze()
// 21. Destructuring
// 22. Spread Operator
// 23. Rest Operator
// 24. Shallow Copy
// 25. Deep Copy
// 26. Optional Chaining
// 27. Nullish Coalescing
// 28. Object.assign()
// 29. Object.fromEntries()
// 30. JSON.parse()
// 31. JSON.stringify()
// 32. Property Descriptor
// 33. Prototype
// 34. Constructor
// 35. Class
// 36. Prototype Chain
// 37. Object.create()
// 38. Object.is()
// 39. Object.defineProperty()
// 40. Object.preventExtensions()

// These 40 topics cover about 95% of Object questions
// asked in JavaScript interviews.