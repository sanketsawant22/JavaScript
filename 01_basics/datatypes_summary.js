
//  JavaScript is a dynamically typed language. This means that variable types are determined 
//  at runtime rather than at compile time. In dynamically typed languages like JavaScript, 
//  you don't need to specify the type of a variable when you declare it, and the type of a 
//  variable can change as the program executes.

/*
    Datatypes in javascript :

        1) primitive
        2) non-primitive

    # Primitive :

        String, Number, Boolean, Null, Undefined, Symbol

    -> Number includes Float and Decimal they are not seperatley privided in JS
    -> Null != 0; Null == empty;

    # Non-primitive :

        Arrays, Objects, fuctions
*/

// stack (primitive) heap (non-primitive)

let name1 = "sanket"
let name2 = "ujwal"


name3 = name2
name2 = "pranav"
console.log(name2);
console.log(name3);


// in primitive copy of variables is given

// if i change the primmitve variables value then changes will not be applied to coppy of the variable

let user1 = {
    email: "user1@google.com",
    address: "tokyo"
}

let user2 = user1

user2.email = "sanket@gmail.com"

// if non-primitive refrence of variables is given

// so when we change user2.email it will aslo change user1.email as they both have same refrence


