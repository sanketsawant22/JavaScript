
//  Objects are declared by 2 methods

//         1--> literal
//         2--> constructor   (singleton)

// ------------------- literal --------------------------

const obj1 = {
    name: "sanket",
    "full name": "sanket sawant",
    age: 19,
    city: "nashik",
    isLogedin: "false",
    lastlogedin: [2,4,1,3,6]
}

// here name, age , city are keys and are treated as strings
//  sanket 19 nashik are values for particular key

console.log(obj1.name);
console.log(obj1["name"]); // used in special cases like "full name"
// both works same

console.log(obj1["full name"]);

obj1.city = "pune"

// it will change city permanently

Object.freeze(obj1)  // It will not allow to make further changes to object data

// how to use symbol as a key in obj

const sym1 = Symbol("mySymb1")

const obj2 = {
    name: "ujwal",
    [sym1]: "1234"
}

console.log(obj2[sym1]); // imp interview que.........
