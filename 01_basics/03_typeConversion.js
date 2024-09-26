let score = "33"

console.log(typeof score)

let num  = Number(score)

console.log(typeof num);

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------

const n1 = new Number(10);
console.log(typeof n1); // "object"  n1 is an object of type Number.

const n2 = Number(10);
console.log(typeof n2); // "number"  n2 is a primitive value of type number.


// Performance : -
// Primitive values are faster and more efficient to use.
// Objects are more complex and have additional overhead.

// Behaviour : - 
// Objects created with new Number(10) have methods and properties from the Number prototype.
// Primitive numbers do not have methods and properties; however, JavaScript will temporarily convert them to objects when you try to access a property or method.

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------
console.log(typeof num)
console.log(num)

/* when converting  to number

"33" -> 33
"33abc" -> NaN, type = number
"sanket" -> NaN
true -> 1
false -> 0
null -> 0
undefined -> NaN

*/

let logedIn = 1

let boolean = Boolean(logedIn)

console.log(typeof logedIn)
console.log(boolean)
console.log(typeof boolean)

// 1 -> true
// 0 -> false
// "" -> false
// "asdf" -> true

console.log("1" + 2); 
// -> "12"
console.log(1 + "2");
// -> 12
console.log("1" + "2");
// -> "12"
console.log(1 + 2);
// -> 3

console.log("1" + 2 + 2);
// ->"122"
console.log(1 + 2 + "2");
// -> 32

// To avoid such error in code operation are must to be performed using '()'