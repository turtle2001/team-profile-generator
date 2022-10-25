import Employee from "./Employee.js";

class Manager extends Employee {
    constructor(names, id, email, officeNumber) {
        super(names, id, email);

        if (!officeNumber)
            throw new Error("Office number is missing. Please re-enter the information.");

        this.officeNumber = officeNumber;
    }

    getRole() { return 'Manager' }
}

export default Manager;