// console.log(a);
// console.log(b);
// var a = b = 200


//rest
function sum(a, ...number) {
    console.log(a, number);
}
sum(1, 2, 3, 3, 4,)

//spred-array
let a = [1, 2, 3]
let b = [4, 5, ...a];
console.log(b);
//spred-obj
let user = {
    name: "alok"
}
let city = {
    home: "balasore"
}
let address = { ...user, ...city };
console.log(address);


//curring
function sum(a){
    return function(b){
         return function(c){
            return a+b+c;
         }
    }
}
console.log(sum(1)(2)(3));
//infinite curring

function sum1(a){
    return function(b){
        if(b!==undefined){
            return sum1(a+b);
        }
        return a;
    }
}
console.log(sum1(1)(2)(3)(4)(5)(6)());


