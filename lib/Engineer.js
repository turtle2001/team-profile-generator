const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(names, id, email, github) {
        super(names, id, email);
        this.gitHub = github;
    }
    getGithub() { return this.gitHub }
    getRole() { return 'Engineer' }
}

module.exports = Engineer;