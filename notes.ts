//Creating Classes
//A class is a blueprint for creating objects
class Account {
    id: number;
    owner: string;
    balance: number;

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