const Transaction = require('./transaction')
const Print = require('./print.js')
const Format = require('./format')

class Account {
  constructor(transactionClass = Transaction, printer = new Print(), formatClass = new Format()) {
    const STARTING_BALANCE = 0;

    this.balance = STARTING_BALANCE;
    this.transactionClass = transactionClass;
    this.formatClass = formatClass;
    this.printer = printer
    this.transactionLog = []
  }

    add (amount) {
      this.balance += amount
      this.addTransaction({credit: amount, balance: this.balance});
      return this.addMessage(amount, 'deposited');
    }

    withdraw (amount) {
      if (amount > this.balance)
      return "Insufficient funds";
      this.balance -= amount
      this.addTransaction({debit: amount, balance: this.balance});
      return this.addMessage(amount, 'withdraw');
    }

    statement() {
      this.printer.printStatement(this.transactionLog, (transaction) => {
        return transaction.showStatement();
      });
    }

    addTransaction (transfer) {
      this.transactionLog.unshift(new this.transactionClass(transfer))
    }

    addMessage (amount, message) {
      let currency = this.formatClass.currency(amount)
      let balance = this.formatClass.currency(this.balance)

      return ` ${currency}${message}. Current balance: ${balance}`
    }

}

module.exports = Account