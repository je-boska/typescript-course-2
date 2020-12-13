let age: number
age = 31

const userName = "test-user"

console.log(userName)

function clickHandler(message: string) {
    console.log("click! " + message)
}

// A comment
const button = document.querySelector("button")!

if (button) {
    button.addEventListener("click", clickHandler.bind(null, "hello"))
}