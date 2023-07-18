"use strict";
//Creating Classes
//A class is a blueprint for creating objects
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    depost(amount) {
        if (amount <= 0)
            throw new Error('Invalid Amount');
        this.balance += amount;
    }
}
