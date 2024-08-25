const user = {
    _email: "abc@xyz.com",
    _password: "abcxyz",

    get _email() {
        return this._email
    },

    set _email(value) {
        this._email = value
    }
}

