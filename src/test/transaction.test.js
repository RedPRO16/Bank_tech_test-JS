// const { expect } = require('expect');
// const { beforeEach, it } = require('jest-circus');
// const { expect } = require('expect');
// const { beforeAll, afterAll, it } = require('jest-circus');
// const { describe } = require('yargs');
const Transaction = require('../transaction');

describe('Transaction', () => {
  let transaction;

  beforeEach(() =>{
    transaction = new Transaction({credit: 100, debit: 50, balance: 150})
  })

  it('should initialize with a credit amount', () =>{
    expect(transaction.credit).toEqual(100);
  });

  it('should initialize with a debit amount', () =>{
    expect(transaction.debit).toEqual(50);
  });

  it('should initialize with a balance amount', () =>{
    expect(transaction.balance).toEqual(150);
  });

    describe('showStatament', ()=>{
        const mockedDate = new Date(2022, 12, 13);
        const realDateNow = Date.now.bind(global.Date);

        beforeAll(() =>{
          global.Date = jest.fn(()=> mockedDate)
          })

        afterAll(()=>{
          global.Date.now = realDateNow;

        });

        it('first transaction date has to display', () => {
          let transaction = new Transaction({ credit: 200, debit: 100, balance: 150 })

          expect(transaction.showStatement()).toEqual("13/01/2023 || 200.00 || 100.00 || 150.00 ")
        })

        it( 'should pass in an empty string if no value given', () => {
          let transaction1 = new Transaction({credit: 200})
          let transaction2 = new Transaction({debit: 100})
          let transaction3 = new Transaction({balance: 150})

          expect(transaction1.showStatement()).toEqual("13/01/2023 || 200.00 || || ");
          expect(transaction2.showStatement()).toEqual("13/01/2023 || || 100.00 || ");
          expect(transaction3.showStatement()).toEqual("13/01/2023 || || || 150.00 ");
        });


      });


});