//Creating Classes
//A class is a blueprint for creating objects
class Account {
//readonly modifier makes id only set in the constructor    
    readonly id: number;
    owner: string;
    balance: number;
//optional modifier is a ? after the property    
    nickname?: string;

    constructor(id: number, owner: string, balance: number) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }

    depost(amount: number): void {
        if (amount <= 0) 
            throw new Error('Invalid Amount');
        this.balance += amount;    
    }
}

//Creating an object from that account
let account = new Account(1, 'Willy', 0);
account.depost(100_000);
console.log(account.balance);
//Checking if new object is an instance of the class
console.log(account instanceof Account);

