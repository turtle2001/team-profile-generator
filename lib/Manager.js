//For some reason, the bottom import declaration does not work when running node index.js but doesn't work with tests.
//Vice versa for the top one.

import Employee from "./Employee.js";
//const Employee = require("./Employee");

class Manager extends Employee {
    constructor(names, id, email, officeNumber) {
        super(names, id, email);

        if (!officeNumber)
            throw new Error("Office number is missing. Please re-enter the information.");

        this.officeNumber = officeNumber;
    }

    getRole() { return 'Manager' }
    getExtraName() { return 'Office Number' }
    getExtraInfo() { return this.officeNumber }
}

//For some reason, the top export declaration does not work when running node index.js but does work with tests.
//Vice versa for the bottom one.

//module.exports = Manager;
export default Manager;