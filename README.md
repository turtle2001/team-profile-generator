# Team Profile Generator

## Description
The goal of this project was to build a node.js app that takes in information about employees and generates a webpage based on the input. Each employee is stored in an employee object with various sub-classes.

## Installation
Node.js using the inquirer and jest packages

## [Demo](https://drive.google.com/file/d/10nC6AvoDr4S_dBgD227-E93crqNg1L5c/view)

## Code Snippet
```JavaScript
import Employee from "./Employee.js";
//const Employee = require("./Employee");

class Intern extends Employee {
    constructor(names, id, email, school) {
        super(names, id, email);

        if (!school)
            throw new Error("School name is missing. Please re-enter the information.");

        this.school = school;
    }
    getSchool() { return this.school }
    getRole() { return 'Intern' }
    getExtraName() { return 'School: ' }
    getExtraInfo() { return this.school }
}

//module.exports = Intern;
export default Intern;
```

## Author Links
[LinkedIn](https://www.linkedin.com/in/alexis-zaragoza-5baa51242/)
[GitHub](https://github.com/turtle2001)