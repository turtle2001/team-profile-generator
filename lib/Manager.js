const Employee = require("./Employee");

class Manager extends Employee {
    constructor(names, id, email, officeNumber) {
        super(names, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() { return 'Manager' }
}

module.exports = Manager;