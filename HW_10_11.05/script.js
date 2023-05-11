// Create an object literal representing a bank account 
// with properties for account number, account holder name, and balance. 
// Add methods for depositing and withdrawing money from the account, 
// and a method for checking the balance.

let sum = 500;
const cashFlow = customers.reduce((sum, customers) => sum + customers.balance);

const customers = [
    {
        accNum: 367689,
        name: 'Vanessa',
        balance: cashFlow,
        viewBalance: () => {console.log(balance);}
    },
    {
        accNum: 392789,
        name: 'Daniel',
        balance: cashFlow,
        viewBalance: () => {console.log(balance);}
    },
    {
        accNum: 367279,
        name: 'Maria',
        balance: cashFlow,
        viewBalance: () => {console.log(balance);}
    },
    {
        accNum: 369089,
        name: 'Rubbi',
        balanceStart: cashFlow,
        viewBalance: () => {console.log(balance);}
    }
];

function printBalance(customers, accNum){
    for(let i = 0; i < customers.length; ++i){
        if(accNum === customers[i].accNum){
            customers.viewBalance();
        }
    }
}



