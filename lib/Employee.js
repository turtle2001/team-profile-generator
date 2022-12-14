//employee class
class Employee {
    constructor(names, id, email,) {
        if (!names)
            throw new Error("Name is missing. Please re-enter the information.");
        if (!id)
            throw new Error("Id is missing. Please re-enter the information.");
        if (!email)
            throw new Error("Email is missing. Please re-enter the information.");

        this.names = names;
        this.id = id;
        this.email = email;
    }

    getName() { return this.names; }
    getId() { return this.id; }
    getEmail() { return this.email; }
    getRole() { return 'Employee' }
}

//For some reason, the top export declaration does not work when running node index.js but doesn't work with tests. Vice versa for the bottom one.

//module.exports = Employee;
export default Employee;