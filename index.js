var inquirer = require("inquirer");
var fs = require("fs");
var writing = require('./utils/generateMarkdown');

const questions = [

    {
        message: "What is your Read Me project title?",
        name: "title",
        type: "input"
    },
    {
        message: "What is your github username?",
        name: "username",
        type: "description"
    },
    {
        message: "What is your email address?",
        name: "email",
        type: "input"
    },
    {
        message: "Please write a short description of your project.",
        name: "description",
        type: "input"
    },
    {
        message: "What is the licensing?",
        name: "license",
        type: "list",
        choices: ["MIT", "Apache 2.0","GPL 3.0", "BSD 3", "None" ]
    },
    {
        message: "What command should be run to install dependencies?",
        name: "dependencies",
        type: "input",
        default: "npm i"
    },
    {
        message: "What command should you run to run test?",
        name: "test",
        type: "input",
        default: "npm test"
    },
    {
        message: "What does the user need to know about using the repo?",
        name: "info",
        type: "input"
       
    },
    {
        message: "What does the user need to know about contributing to the repo?",
        name: "contributing",
        type: "input"
       
    },




];


function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {

        if (err) {
            console.log(err);
        }
        else {
            console.log("Read Me created");
        }
    })
}

function init() {
    inquirer.prompt(questions).then(function (answers) {
        console.log(answers)
        //for (var i = 0; i < answers.length(); i++) {
            writeToFile('MyReadME.md', writing.generateMarkdown(answers))
       // }
    })
};

init()







