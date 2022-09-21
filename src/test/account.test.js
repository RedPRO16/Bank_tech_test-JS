
// const { expect } = require('expect');
const Account = require('../account')

describe('Account', () =>{
  let account;


  beforeEach(() => {
    account = new Account()
  })

  it('Should start with an initial balance of 0', () => {
    expect(account.balance).toEqual(0)
  });

  it('should user to add money to their account', () => {
    account.add(1000);
    expect(account.balance).toEqual(1000)
  });

  it('should user to withdraw money from their account', () => {
    account.add(1000);
    account.withdraw(500);
    expect(account.balance).toEqual(500);
  });

  it('should show on statement deposit with current balance', () => {
    account.add(100);

    expect(account.add(900)).toEqual(" 900.00 deposited. Current balance: 1000.00 ")

  });

  it('should show on statement withdraw with left balance', () => {
    account.add(300);

    expect(account.withdraw(150)).toEqual(" 150.00 withdraw. Current balance: 150.00 ")
  });

  it('Should return message if user tries to withdraw more than they have', () => {
    account.add(500);

    expect(account.withdraw(1000)).toEqual("Insufficient funds");
  });

  it('Should add a transaction object to the transactionLog', () => {
    account.add(500);
    account.withdraw(100);

    expect(account.transactionLog.length).toEqual(2);
    expect(account.transactionLog[1].credit).toEqual(500);
    expect(account.transactionLog[1].balance).toEqual(500);
    expect(account.transactionLog[0].debit).toEqual(100);
    expect(account.transactionLog[0].balance).toEqual(400);
  });

})