// Object Deep \\
// 'use strict'
console.log("Object deep");

console.log(this); // in vscode give {} // in browser-->windows object

console.log(window); //windows obj

function abc() {
    console.log(this); //windows object if "useStric"-->undefind

}

abc();

var obj = {
    name:"hello",
    sayhi: () => {
        console.log(this);

    },
    sayHello: function () {
        console.log(this);
    }
}
console.log(obj.sayHello());



// error
// syntex error
//refernece error
//type error
//range error
// aggregat Error
//URI Error
//InternalError


var a=10
// a is a global variable 
// arrow function donot have lexical contex

// this in addEventListener
// return the element itself

//call
//aply, SAME AS CALL AND [pass array argument]
//bind
// --> use for function sheraingv--> explicit binding

var student={
    firstName:"ALok",
    lastname:"sharma",
    getIntro:function(){
        console.log(this.firstName+" "+ this.lastname);
        
    }
}
var student2={
firstName:"ALok2",
    lastname:"sharma 2",
}
student.getIntro.call(student2);