class user {
    constructor (username) {
        this.username = username;
    }

    logMe() {
        console.log(`username is ${this.username}`);
    }
}

class teacher extends user {
    constructor (username, email, password) {
        super(username);
        this.email = email;
        this.password = password;
    }
 
    addCourse() {
        console.log(`new course is added by ${this.username}`);
        
    }
}

let user1 = new teacher("sanket", "sanket@gmail.com", 123456789)
user1.logMe();
user1.addCourse();

let user2 = new user("ujwal");

console.log(user1 instanceof teacher); 
