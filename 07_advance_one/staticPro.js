class user {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(this.username);
    }   
    
    static createId() {
        return '1234'
    }
}

const sanket = new user("sanket");

console.log(sanket.createId());
