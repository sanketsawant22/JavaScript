function setUser (username) {
    this.username = username;
    console.log("called");
}

function user (username, email, password) {
    setUser.call(this, username)
    this.email = email;
    this.password =password;
}

let user1 =new user("sanket", "sanket@gmial.com", 123456789)

console.log(user1);

console.log(user1.username);