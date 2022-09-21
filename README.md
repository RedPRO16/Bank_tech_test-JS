# Bank tech test

Today, you'll practice doing a tech test.

For most tech tests, you'll essentially have unlimited time.  This practice session is about producing the best code you can when there is a minimal time pressure.

You'll get to practice your OO design and TDD skills.

You'll work alone, and you'll also review your own code so you can practice reflecting on and improving your own work.

## Specification

### Requirements

* You should be able to interact with your code via a REPL like IRB or Node.  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2023
**And** a deposit of 2000 on 13-01-2023
**And** a withdrawal of 500 on 14-01-2023
**When** she prints her bank statement
**Then** she would see

```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```

## Self-assessment

Once you have completed the challenge and feel happy with your solution, here's a form to help you reflect on the quality of your code: https://docs.google.com/forms/d/1Q-NnqVObbGLDHxlvbUfeAC7yBCf3eCjTmz6GOqC9Aeo/edit


## Dependencies

**Production:**
<br>
**[Moment]** - Time formatting library.

**Development:**
<br>
**[MockDate]** - A JavaScript mockdate object used to change when "now" is for testing purposes.
<br>
**[Jest]** - JavaScript testing framework.


<!-- dependency links -->
[Moment]: https://momentjs.com/
[MockDate]: https://www.npmjs.com/package/mockdate
[Jest]: https://jestjs.io/

<!-- project link -->
[available here]: git@github.com:RedPRO16/bank_tech_JS.git

## Quick Start

1. Clone this repo
2. Install dependencies with:
```
$ npm install
```
3. Run tests with:
```
$ npm test
```
4. Run the Node REPL:
```
$ node
```
5. Use the account with the following functions:

| **Function** | **Description** |
|--------------|-----------------|
| > const Account = require('./src/account.js'); | Require in `account.js`|
| > let bankAccount = new Account(); | Create new account |
| bankAccount.add(amount); | Deposit any value you choose into the account as the amount parameter |
| bankAccount.withdraw(amount); | Withdraw any value you choose from the account as the amount parameter. Although account must have at least that balance or 'Insufficient funds" will be shown |
| bankAccount.statement(); | Will print statement to teh screen showing transaction history including dates, amounts and balance after each transaction |

Below is an example of what would be shown on the screen:

![Screenshot 2022-09-21 at 12 00 25](https://user-images.githubusercontent.com/40929562/191494068-d98d6acd-2352-480b-ad69-fc1936cf71fd.png)


----Test coverage is > %95
![Screenshot 2022-09-21 at 21 43 21](https://user-images.githubusercontent.com/40929562/191606981-3f68d719-8bfc-4daa-aa19-7ce2d1f11b18.png)
