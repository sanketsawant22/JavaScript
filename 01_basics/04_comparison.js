// console.log(1 > 2);
// console.log(1 < 2);
// console.log(1 == 2);
// console.log(1 >= 1);
// console.log(2 <= 2);

console.log(null > 0);
// -> false because null is not greater than zero

console.log(null == 0);

// -> (in javascript comparison operator and equal to operator work differently comparison convert the variable then compare and eual to checks directly)
// -> false null is not equal to zero

console.log(null >= 0);
// -> (while comparing null is convertede to number that is 0)
// -> true as null (0) >= 0

// -> == check that are the values same by not converting them
// -> === check datatype is same or not along with value

console.log("2" == 2);
// -> true


console.log("2" === 2);
// -> false