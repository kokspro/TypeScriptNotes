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
//Creating an object from that account
let account = new Account(1, 'Willy', 0);
account.depost(100000);
console.log(account.balance);
//Checking if new object is an instance of the class
console.log(account instanceof Account);
