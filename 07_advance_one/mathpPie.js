const obj1 = {
    name : "sanket",
    age : 20,
    city : "nashik",
    fcn: () => {
        console.log("asdf");
    }
}

const discription = Object.getOwnPropertyDescriptor(obj1, "city")

console.log(discription);

const discription2 = Object.getOwnPropertyDescriptor(Math, "PI"); 

// properties are set to false by hardcoding with so many check such that it will never be able to 
// change the value of math.pi 

console.log(discription2);

// we can change the properties of objects 

Object.defineProperty(obj1, "city", {
    writable: false,       // by this city name is fixed it will not change
    enumerable: false // if we set ennumeration to false it will not appear while iteration
})

// to iterate any object we can use forof with this property
 
for (const [key, value] of Object.entries(obj1)) {
    if(typeof(value) !== "function") {
        console.log(`${key} : ${value}`);
    }
}