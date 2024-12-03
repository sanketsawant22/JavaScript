const user = {
    email: "asdf@gmail.com",
    fullname: {
        fisrtname: "sanket",
        lastname: "sawant"
    },
    city: "nashik"
}

console.log(user.fullname.fisrtname);

const obj1 = {1: "A", 2: "B"}
const obj2 = {2: "C", 3: "D"}

const obj3 = Object.assign({}, obj1, obj2)
const obj4 = {...obj1, ...obj2}   // works same 

// if Object.assign(obj1, obj2) then obj2 will combine with obj1 inside
// obj1 thus we provide empty object at first {}

console.log(obj3);
console.log(obj4);

console.log(Object.keys(user));   // will reurn keys of abject in array form
console.log(Object.values(user));   // will reurn values of abject in array form

console.log(user.hasOwnProperty("email"));



// ---------------------------------------------------------------------------------------------------

// destructure of objects

const{email} = user
console.log(email);

const{email: mail} = user    // email value will be assigned to mail keyword
console.log(mail);