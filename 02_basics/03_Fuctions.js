//  Functions

const object1 = {
    name: "sanket",
    age: 19,
    city: "Nasik"
}

object1.function1 = function() {
    console.log("hello wolrd");
}

console.log(object1.function1); // gives  refrence of function but doesnt execute it

console.log(object1.function1()); // execute the function

// when we use backticks " `` " that is called string interpolation

object1.function2 = function() {
    console.log(`hello ${this.name}, Your age is ${this.age}`); // 'this' keyword will refer to the object
}

console.log(object1.function2());

