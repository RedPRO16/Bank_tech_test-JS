const Format = require('./format')

class Transaction {
  constructor ({ credit = null, debit = null, balance = null}, formatClass = new Format()) {
    this.credit = credit,
    this.debit = debit,
    this.balance = balance
    this.date = new Date()
    this.formatClass = formatClass;
  };
  showStatement() {
    return [
      this.formatClass.date(this.date),
      this.formatClass.currency(this.credit),
      this.formatClass.currency(this.debit),
      this.formatClass.currency(this.balance)
    ].join("|| ");
  }
};

  module.exports = Transaction;