

const obj1 = {
    name: "sanket",
    age: 19,
    ball: {
        type: "leather"
    }
    
}

const obj2 = {...obj1}
obj2.age = 21
obj2.ball.type = "tenis"

console.log(obj1);
console.log(obj2);