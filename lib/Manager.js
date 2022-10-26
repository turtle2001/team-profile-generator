//import Employee from "./Employee.js";
const Employee = require("./Employee");

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

module.exports = Manager;
//export default Manager;