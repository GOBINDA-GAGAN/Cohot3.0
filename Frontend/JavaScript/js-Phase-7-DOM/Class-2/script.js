const bulb = document.querySelector(".bulb")
const btn = document.querySelector("button")

console.log(bulb);

let flag = true
btn.addEventListener('mouseenter', function () {
    if (flag) {
        bulb.style.background = "yellow"

        btn.innerText = "Off"
        flag = false;
    }
    else {
        bulb.style.background = "black"

        btn.innerText = "On"
        flag = true

    }

})

const user = {
  name: "Rahul",
  greet() {
    console.log(this.name);
  }
};

user.greet();