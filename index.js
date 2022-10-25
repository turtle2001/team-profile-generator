const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const inquirer = require('inquirer')
//const { exit } = require("process");
//const generateHTML = require("./dist/generateHTML")

var employees = [];

function addManager() {
    inquirer
        .prompt([
            {
                message: 'Enter the manager\'s name: ',
                name: 'name',
            },
            {
                message: 'What is their ID number?',
                name: 'id'
            },
            {
                message: 'What is their email address?',
                name: 'email'
            },
            {
                message: 'What is their office number?',
                name: 'office'
            },
        ])
        .then(({ name, id, email, office }) => {
            const manager = new Manager(name, id, email, office)
            employees.push(manager)
            nextAction()
        })
        .catch((err) => console.error(err.message))
}

function nextAction() {
    inquirer
        .prompt([
            {
                type: "list",
                message: "What would you like to do next?",
                choices: ['Add an engineer', 'Add an intern', 'Finished building team'],
                name: choice
            },
        ])
        .then((response) => {
            switch (response.choice) {
                case 'Add an engineer':
                    addEngineer();
                    break;
                case 'Add an intern':
                    addIntern();
                    break;
                case 'Finished building team':
                    exit()
            }
        })
}

function addEngineer() {
    inquirer
        .prompt([
            {
                message: 'Enter the engineer\'s name?',
                name: 'name',
            },
            {
                message: 'What is their ID number?',
                name: 'id'
            },
            {
                message: 'What is their email address?',
                name: 'email'
            },
            {
                message: 'What is their Github id?',
                name: 'github'
            },
        ])
        .then(({ name, id, email, github }) => {
            const engineer = new Engineer(name, id, email, github)
            employees.push(engineer)
            nextAction()
        })
        .catch((err) => console.error(err.message))
}

function addIntern() {
    inquirer
        .prompt([
            {
                message: 'Enter the intern\'s name?',
                name: 'name',
            },
            {
                message: 'What is their ID number?',
                name: 'id'
            },
            {
                message: 'What is their email address?',
                name: 'email'
            },
            {
                message: 'What school are they currently attending?',
                name: 'school'
            },
        ])
        .then(({ name, id, email, school }) => {
            const intern = new Intern(name, id, email, school)
            employees.push(intern)
            nextAction();
        })
        .catch((err) => console.error(err.message))
}

function exit() {
    generateHTML(employees)
}