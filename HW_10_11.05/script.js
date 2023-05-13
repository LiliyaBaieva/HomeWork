// Create an object literal representing a bank account 
// with properties for account number, account holder name, and balance. 
// Add methods for depositing and withdrawing money from the account, 
// and a method for checking the balance.

// let sum = 500;
// const cashFlow = customers.reduce((sum, customers) => sum + customers.balance);

// const customers = [
//     {
//         accNum: 367689,
//         name: 'Vanessa',
//         balance: cashFlow,
//         viewBalance: () => {console.log(balance);}
//     },
//     {
//         accNum: 392789,
//         name: 'Daniel',
//         balance: cashFlow,
//         viewBalance: () => {console.log(balance);}
//     },
//     {
//         accNum: 367279,
//         name: 'Maria',
//         balance: cashFlow,
//         viewBalance: () => {console.log(balance);}
//     },
//     {
//         accNum: 369089,
//         name: 'Rubbi',
//         balanceStart: cashFlow,
//         viewBalance: () => {console.log(balance);}
//     }
// ];

// function printBalance(customers, accNum){
//     for(let i = 0; i < customers.length; ++i){
//         if(accNum === customers[i].accNum){
//             customers.viewBalance();
//         }
//     }
// }


alert('Hello word!')

const bankAccaunt = {
    accountNumber: '123456789',
    accauntHolderName: 'Alice',
    balance: 1000,
    deposit: function(amount){
        amount > 60000 ? alert("Требуется подтверждение легальности доходов.") :
        this.balance += amount; 
    },
    withdrow: function(amount){
        amount <= this.balance ? this.balance -= amount 
        : alert("На вашем счету недостаточно средств.");
    },
    checkBalance: function(){
        alert(`На вашем счету ${this.balance}`);
    }
}

let res = Object.keys(bankAccaunt);
console.log(res);
const [number, userName, balance] = Object.values(bankAccaunt);
console.log(number, userName, balance);
Object.entries(bankAccaunt);
console.log(res);


bankAccaunt.checkBalance();
bankAccaunt.deposit(500);
bankAccaunt.checkBalance();
bankAccaunt.withdrow(700);
bankAccaunt.checkBalance();
bankAccaunt.withdrow(1000);
bankAccaunt.checkBalance();