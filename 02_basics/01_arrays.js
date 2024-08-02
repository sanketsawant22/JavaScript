//  Arrays

let myArray = [1,2,3,4,5]

// javascript arrays are resizable and can contain different datatypes elements too

// shallow coppies --> coppies shares same refrence 
// deep coppies --> coppies doesnt share same refrence

// arrays are shallow coppies

let arr = ["Thor", "IronMan", "Hulk"]

console.log(arr[0]);

console.log(myArray.length);
// .length reurns total elements in array not index

myArray.push(6)
myArray.push(7)
myArray.pop()

myArray.unshift(0)
// will add element at first position

myArray.shift()
// removes the first element from array

console.log(myArray);

console.log(myArray.includes(10));

console.log(myArray.indexOf(3));
// if element doesnt exist then it will return -1

const newArray = myArray.join()
// newArray will be same as myArray but in string format

console.log(myArray);
console.log(newArray);

const arr1 = [1,2,3,4,5]
console.log(arr1);

let new1 = arr1.slice(2,4)
// slice will give 2,3 only not last index

let new2 = arr1.splice(2,4)
// splice will give 2,3,4 last index too

console.log(new1);
console.log(new2);