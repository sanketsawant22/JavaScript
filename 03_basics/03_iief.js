


//  IIFE: immediately  invoke function expression
// global scope variables causes polution in function thus to avoid such situation iife are used

(function heros() {
    // named iife as it has name
    console.log("MARVEL");
})();                              // to end iife ; is must end else rest of iife will get errors


((name) => {
    // unnamed iife as it does not have name
    console.log(name, ", hello...!");
})("sanket")


// ----------------------------------------------------------------------------------------

//  Falsy Values : false, 0, "", bigInt 0n, null, undefined


// nullish coalescing operator  null, undefined is replaced by seconde value

 
let val1 = undefined ?? 10

console.log(val1);

// terminary operators

// conditon ? true : false  this is syntax

const var1 = 1

var1 === 1 ? console.log("true") : console.log("false");