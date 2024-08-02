// variables declared inside any block are local scopes (if, while, for) 
// variables which are not declared inside any block are global scopes


// imp normal function vs arrow functions     ***


// function
const name = "sanket"
const myName = function name(name) {
    console.log(`my name is ${name}`);
}

myName(name)


// function
function normal() {
    console.log("this is function too...");
} 

normal()


// arrow function
const functionName = () => {
    console.log("this is arrow function...");
}

functionName()


// implicite arrow function
const implicite = (num1, num2) => (num1 + num2)

console.log(implicite(2,2))

// if we add {} braces then return keyword is must
// else we can use () braces without return keyword in implicite funcitons

// to return object it is must to be entered inside {} braces

const obj = () => ({username: "sanket", age: 19})

console.log(obj());
