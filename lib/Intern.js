const Employee = require("./Employee");

class Intern extends Employee {
    constructor(names, id, email, school) {
        super(names, id, email);
        this.school = school;
    }
    getSchool() { return this.school }
    getRole() { return 'Intern' }
}

module.exports = Intern;