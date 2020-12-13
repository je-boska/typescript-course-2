"use strict";
let age;
let appId = "abc";
age = 31;
const userName = "test-user";
console.log(userName);
function add(n1, n2) {
    if (n1 + n2 > 0) {
        return n1 + n2;
    }
    return;
}
function clickHandler(message) {
    console.log("click! " + message);
}
const button = document.querySelector("button");
if (button) {
    button.addEventListener("click", clickHandler.bind(null, "hello"));
}
