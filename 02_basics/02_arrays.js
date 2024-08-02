const mcu_heros = ["Thor", "Spiderman", "Ironman", "Scarletwitch"]

const dc_heros = ["Batman", "Aquaman", "Flash", "Wonderwomen", "Superman"]


console.log(mcu_heros.concat(dc_heros));
// concate will add both array and return third array

// instead of concate we can use spread (" ... ") it will spread the elements of array

const all_heros = [...dc_heros, ...mcu_heros]

console.log(all_heros);

mcu_heros.push(dc_heros)
console.log(mcu_heros);
// push will add array2 to array1 directly as a element

const another_arr = [ 1, 2, 3, [ 4, 5 ], 6 , [ 7 , [8 , 9 ,0 ] ] ]
const real_another_arr = another_arr.flat(Infinity)
// flat will spread internal arrays into one array --Infinity here is limit of internal array--

console.log(real_another_arr);

// Array

console.log(Array.isArray("sanket"));
// check it given array or not

console.log(Array.from("sanket"));
// creates array from input


let score1 = 100
let score2 = 200
let score3 = 300
// crete array from given variables
console.log(Array.of(score1,score2,score3));