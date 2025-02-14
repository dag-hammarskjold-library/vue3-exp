// classes for interacting with the user pieces of the API

export class User {
    constructor(username) {
        if (!User.apiUrl) { throw new Error("User.apiUrl must be set") };
        this.username = username
        this.basket = []
        this.getBasketRecords() // populate this.basket async
    }

    async getBasketRecords() {
        // todo: fetch the user's basket endpoint and populate this.basket
        // requires api authorization
    }
}