const readline = require('readline-sync');
const chalk = require('chalk');
var center = require('center-align');
const fs = require('fs');
const city = require('./city');

function main() {
    // console.clear();
    console.log("------------------------------------------------");
    console.log(center('Weather', 50));
    console.log("------------------------------------------------");
    console.log('\n\t  Enter 1 for City Name');
    console.log("\n\t  Enter 0 for exit");
    console.log("\n------------------------------------------------");
    // let c=5;

    let c = readline.questionInt('\n Please Enter The Number ');
    console.log("\n------------------------------------------------");
    // console.log(c);
    switch(c){
        case 1:
            city();
            break;
        case 0:
            console.log('Thank You!');
            break;
        default :
          console.log(chalk.cyan.bold('Invalid Response Try Again'));
          main();
    }
}
main();
