
// for of loop              this loop returns objects not keys

const arr = [5,4,3,2,1,0]

for (const val of arr) {
    console.log(val);
}

const greeting = "hello world!"

for (const greeet of greeting) {
    console.log(greeet);
}

const map = new Map()

map.set("MH", "Maharashtra")
map.set("GJ", "Gujarat")
map.set("UP", "Uttar Pradesh")

for (const [key, value] of map) {
    console.log(key + " :- " + value);
}

// for of loop is not for objects

// for in loop                     this loop returns keys(indexes)

const obj1 = {
    name: "sasnket",
    age: 19,
    city: "nashik"
}

for (const key in obj1) {
    console.log(key + " :- " + obj1[key]);
}


for (const key in arr) {
    console.log(key + " :- " + arr[key]);
}


// for each                used for arrays


const heros = ["ironman", "hulk", "superman", "spiderman"]

heros.forEach(function (val) {
    console.log(val);
})

heros.forEach((val) => {
    console.log(val);
})


function function1(value) {
    console.log(value);
}

heros.forEach(function1)               // here function is not req to execute '()'
                                       // thus only refrence is given


heros.forEach( (item, index, array) => {
    console.log(item, index, array);
} )


// when array contains objects

const objArray = [
    {
        language: "javscript",
        symbol: "js"
    },
    {
        language: "java",
        symbol: "java"
    },
    {
        language: "python",
        symbol: "py"
    }
]


objArray.forEach( (item) => {
    console.log(`${item.symbol} is ${item.language}`);
} )