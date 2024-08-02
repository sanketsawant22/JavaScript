function sayMyName() {
    console.log("s");
    console.log("a");
    console.log("n");
    console.log("k");
    console.log("e");
    console.log("t");
}

sayMyName // this is refrence
sayMyName() // this is function

function add2Num(num1, num2) {

    // let result = num1 + num2
    // return result

    return num1 + num2
}

const result = add2Num(3 ,3)
console.log(`Result is : ${result}`);


function userLogin(username) {
    return `${username} has just logged in.`
}

console.log(userLogin("Jerry"));

function calculateCartPrice() {
    
}