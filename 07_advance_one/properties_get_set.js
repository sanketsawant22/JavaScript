function user (email, password) {
    this._email = email
    this._password = password

    Object.defineProperty(this, "email", {
        get: function() {
            return this._email
        },

        set: function(value) {
            this.email = value;
        }
    })

    Object.defineProperty(this, "password", {
        get: function() {
            return this._password
        },

        set: function(value) {
            this.password = value;
        }
    })
}

const sanket = new user("sanket", "sawant")

console.log(sanket.password);