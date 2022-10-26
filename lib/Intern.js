//For some reason, the bottom import declaration does not work when running node index.js but doesn't work with tests.
//Vice versa for the top one.

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
    getExtraName() { return 'School' }
    getExtraInfo() { return this.school }
}
 
//For some reason, the top export declaration does not work when running node index.js but does work with tests.
//Vice versa for the bottom one.

//module.exports = Intern;
export default Intern;