"use strict";
let age;
age = 31;
const userName = "test-user";
console.log(userName);
function clickHandler(message) {
    console.log("click! " + message);
}
const button = document.querySelector("button");
if (button) {
    button.addEventListener("click", clickHandler.bind(null, "hello"));
}
