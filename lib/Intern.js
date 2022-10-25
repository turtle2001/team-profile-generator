import Employee from "./Employee.js";

class Intern extends Employee {
    constructor(names, id, email, school) {
        super(names, id, email);

        if (!school)
            throw new Error("School name is missing. Please re-enter the information.");

        this.school = school;
    }
    getSchool() { return this.school }
    getRole() { return 'Intern' }
}

export default Intern;