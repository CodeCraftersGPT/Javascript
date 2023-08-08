class BankAccount{
    constructor(accountName1,accountNumber1){
        this.accountName = accountName1;
        this.accountNumber = accountNumber1;
        this.balance=2000;
    }

    withDraw(amount){
        this.balance = this.balance - amount;
    }

    deposit(amount){
        this.balance = this.balance + amount;
    }
}
var manjithAccount = new BankAccount('Manjith',1001);

console.log(manjithAccount.accountName);
console.log(manjithAccount.balance);

manjithAccount.deposit(100000000000);

console.log(manjithAccount.balance);