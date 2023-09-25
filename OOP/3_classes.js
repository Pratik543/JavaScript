class BankAccout {
  constructor(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }
  withdraw(amount) {
    this.balance -= amount;
  }
}

const pratik = new BankAccout("Pratik", 4_000);
const shreya = new BankAccout("Shreya", 0);

shreya.deposit(5000);

console.log(pratik);
console.log(shreya);
