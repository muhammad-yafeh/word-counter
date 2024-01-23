import inquirer from "inquirer";
let input = await inquirer.prompt([{ name: "para",
        type: "input",
        message: "enter paragraph :" }]);
let words = input.para.split(" ");
console.log(words.length);
