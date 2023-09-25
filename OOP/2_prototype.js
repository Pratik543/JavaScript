function BankAccout(customerName, balance = 0) {
  this.customerName = customerName;
  this.accountNumber = Date.now();
  this.balance = balance;
}
//So this deposit method is part of the BankAccout and it will be shared to all BankAccout objects it is used to save memory and allows for efficient code reuse.
BankAccout.prototype.deposit = function (amount) {
  this.balance += amount;
};
BankAccout.prototype.withdraw = function (amount) {
  this.balance -= amount;
};
//  the deposit and withdraw method is defined on the prototype of the BankAccout constructor function. So now Both pratikAccount and shreyaAccount instances share the same deposit and withdraw  method through the prototype chain

const pratikAccount = new BankAccout("Pratik");
const shreyaAccount = new BankAccout("Shreya", 10_000);

pratikAccount.deposit(1_000);
shreyaAccount.deposit(10_000);
console.log(pratikAccount, shreyaAccount);

// prototype is used to add new properties and methods to an object that will shared to all objects of  the same class/constructor
