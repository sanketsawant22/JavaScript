class user {
    constructor(email, password) {
        this.email = email;
        this.password  = password
        // console.log(password);      it  will return origional password
    }

    get password() {       // if we are using getter then setter is mandatory too
        // return this._password.toUpperCase();

        // if we want to return fake password or password with added words
        return `${this._password}2210`
    }

    set password(password) {
        this._password = password
    }
}

const sanket = new user("sanket@gmail.com", "sawant")

console.log(sanket.password);
