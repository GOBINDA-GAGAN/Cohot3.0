'use strict';

console.log("===== 1. Normal Function =====");

function normalFunction() {
    console.log(this);
}
normalFunction();


console.log("\n===== 2. Object Method =====");

const obj1 = {
    name: "Alok",
    print: function () {
        console.log(this);
    }
};
obj1.print();


console.log("\n===== 3. Arrow Function Inside Object =====");

const obj2 = {
    name: "Alok",
    print: () => {
        console.log(this);
    }
};
obj2.print();


console.log("\n===== 4. Nested Normal Function =====");

const obj3 = {
    name: "Alok",
    print() {
        function inner() {
            console.log(this);
        }
        inner();
    }
};
obj3.print();


console.log("\n===== 5. Nested Arrow Function =====");

const obj4 = {
    name: "Alok",
    print() {
        const inner = () => {
            console.log(this);
        };
        inner();
    }
};
obj4.print();


console.log("\n===== 6. call() =====");

function show() {
    console.log(this);
}

show.call({ name: "Rahul" });


console.log("\n===== 7. apply() =====");

show.apply({ name: "Rohan" });


console.log("\n===== 8. bind() =====");

const boundFn = show.bind({ name: "Gobinda" });
boundFn();


console.log("\n===== 9. Arrow + call() =====");

const arrowFn = () => {
    console.log(this);
};

arrowFn.call({ name: "Alex" });


console.log("\n===== 10. Constructor Function =====");

function Person(name) {
    this.name = name;
}

const p1 = new Person("John");
console.log(p1);


console.log("\n===== 11. Lost Context =====");

const obj5 = {
    name: "Lost Context",

    print() {
        console.log(this);
    }
};

const lost = obj5.print;

try {
    lost();
} catch (error) {
    console.log(error.message);
}


console.log("\n===== 12. Fix Lost Context =====");

const fixed = obj5.print.bind(obj5);
fixed();


console.log("\n===== 13. setTimeout Normal Function =====");

const obj6 = {
    name: "Timer",

    print() {
        setTimeout(function () {
            console.log(this);
        }, 1000);
    }
};

obj6.print();


console.log("\n===== 14. setTimeout Arrow Function =====");

const obj7 = {
    name: "Arrow Timer",

    print() {
        setTimeout(() => {
            console.log(this);
        }, 1000);
    }
};

obj7.print();


console.log("\n===== 15. Class Method =====");

class User {
    constructor(name) {
        this.name = name;
    }

    print() {
        console.log(this);
    }
}

const user = new User("Gobinda");
user.print();


console.log("\n===== 16. Extracted Class Method =====");

const extracted = user.print;

try {
    extracted();
} catch (error) {
    console.log(error.message);
}


console.log("\n===== 17. bind Class Method =====");

const bindClassMethod = user.print.bind(user);
bindClassMethod();


console.log("\n===== 18. Object Method Returning Arrow =====");

const obj8 = {
    name: "Arrow Closure",

    print() {
        return () => {
            console.log(this);
        };
    }
};

const fn = obj8.print();
fn();


console.log("\n===== 19. Object Method Returning Normal Function =====");

const obj9 = {
    name: "Normal Closure",

    print() {
        return function () {
            console.log(this);
        };
    }
};

const fn2 = obj9.print();
fn2();


console.log("\n===== 20. IIFE =====");

(function () {
    console.log(this);
})();


console.log("\n===== END =====");