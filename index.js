import Manager from './lib/Manager.js'
import Engineer from './lib/Engineer.js'
import Intern from './lib/Intern.js'
import inquirer from 'inquirer'
import fs from 'fs'

//stores employee objects
let employees = [];

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
            employees.push(manager) //adds employee to employees list
            nextAction()
        })
        .catch((err) => { console.error(err.message); addManager() })
}

function nextAction() {
    inquirer
        .prompt([
            {
                type: "list",
                message: "What would you like to do next?",
                choices: ['Add an engineer', 'Add an intern', 'Finished building team'],
                name: "choice"
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
                    generateHTML(employees)
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
        .catch((err) => { console.error(err.message); addEngineer() })
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
        .catch((err) => { console.error(err.message); addIntern() })
}

function generateHTML(employees) {
    let cards = employees.map(employee => generateCard(employee))
    let generatedHtml =
        `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
            integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
            crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>My Team</title>
    </head>
    
    <body>
        <div class="jumbotron text-center bg-danger text-white">
            <h1>My Team</h1>
        </div>
        <div class="container">
            <div class="row justify-content-around">
                ${cards.join("\n")}
            </div>
        </div>
    </body>        
</html>
`
    fs.writeFile(`./dist/generatedhtml.html`, generatedHtml, (err) => {
        if (err)
            console.log(err)
        else
            console.log("File created")
    })
}

function generateCard(employee) {
    //engineer card needs an extra link
    if (employee.getRole() == 'Engineer')
        return `
<div class="col-4">
    <div class="card m-2 shadow">
        <div class="card-header bg-primary text-white">
            <h4>${employee.getName()}</h4>
            <h5><i class="fa-solid fa-mug-hot"></i>${employee.getRole()}</h5>
        </div>
        <div class="card-body bg-light">
            <div class="list-group">
                <li class="list-group-item">ID: ${employee.getId()}</li>
                <li class="list-group-item">Email: <a
                   href="mailto: ${employee.getEmail()}">${employee.getEmail()}</a> </li>
                <li class="list-group-item">${employee.getExtraName()}: <a href="https://github.com/${employee.getExtraInfo()}">${employee.getExtraInfo()}</li>
            </div>
        </div>
    </div>
</div>
    `
    else
        return `
<div class="col-4">
    <div class="card m-2 shadow">
        <div class="card-header bg-primary text-white">
            <h4>${employee.getName()}</h4>
            <h5><i class="fa-solid fa-mug-hot"></i>${employee.getRole()}</h5>
        </div>
        <div class="card-body bg-light">
            <div class="list-group">
                <li class="list-group-item">ID: ${employee.getId()}</li>
                <li class="list-group-item">Email: <a
                        href=mailto: "${employee.getEmail()}">${employee.getEmail()}</a> </li>
                <li class="list-group-item">${employee.getExtraName()}: ${employee.getExtraInfo()}</li>
            </div>
        </div>
    </div>
</div>`
}

addManager();