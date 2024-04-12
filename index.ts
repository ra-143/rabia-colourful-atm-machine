#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

let myBalance = 20000;
let myPin= 12345;
console.log(chalk.blue("\n\t Welcome to Code with Rabia - ATM Machine\n"));

let pinAnswer= await inquirer.prompt([
        {
            name: "Pin",
            message: chalk.yellow("Enter your pin code"),
            type: "number"
        }
    ])

 if (pinAnswer.Pin === myPin){
    console.log(chalk.green("\nCorrect Pin Code!!! Login Successfully\n"));
    
     let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type:"list",
            choices: ["WithDraw Amount","Check Balance"]
        }
    ])
 if (operationAns.operation ==="WithDraw Amount"){
    let withdrawAns = await inquirer.prompt([
        {
            name: "withdrawMethod",
            type: "list",
            message:chalk.blue("Select a Withdrawal Method"),
            choices:["Fast Cash","Enter Amount"]
        }
    ])
    if (withdrawAns.withdrawMethod === "Fast Cash"){
        let fastCashAns = await inquirer.prompt([
            {
                name:"fastCash",
                type:"list",
                message: chalk.grey("Select Amount"),
                choices: [1000, 5000, 10000, 150000, 20000]
            }
        ])
        if (fastCashAns.fastCash > myBalance){
            console.log(chalk.red("Insufficient Balance"));

        }
        else{
            myBalance -= fastCashAns.fastCash
            console.log(`${fastCashAns.fastCash} withdraw successfully`)
            console.log(chalk.blue(`Your Remaining Balance is: ${myBalance}`))
        }

    }
     else if(withdrawAns.withdrawMethod === "Enter Amount"){ 
        let amountAns = await inquirer.prompt([
        {
            name: "Amount",
            type: "number",
            message: chalk.green("Enter the amount to WithDraw:")
        }
    ])
    if (amountAns.Amount > myBalance){
        console.log(chalk.red("Insufficient Balance"));
    }
    else {
        myBalance -=amountAns.Amount;
        console.log(`${amountAns.Amount} WithDraw Successfully`);
        console.log(chalk.blue(`Your remaining balance is : ${ myBalance}`))
    }

    }
   

 }
 else if (operationAns.operation === "Check Balance"){
    console.log(chalk.blue(`Your Account Balance is ${myBalance}`))
 }

}

else {
    console.log(chalk.red("Pin is Incorrect, Please Try Again"));
}

