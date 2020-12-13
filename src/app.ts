let age: number
let appId = "abc"
age = 31

const userName = "test-user"

console.log(userName)

function add (n1: number, n2: number) {
    if (n1 + n2 > 0) {
        return n1 + n2
    } 
    // noImplicitReturns option enabled; all paths must lead to a return statement 
    return
}

function clickHandler(message: string) {
    // UNUSED LOCAL VARIABLE
    // let userName = "JE"
    console.log("click! " + message)
}

// A comment
const button = document.querySelector("button")!

if (button) {
    button.addEventListener("click", clickHandler.bind(null, "hello"))
}