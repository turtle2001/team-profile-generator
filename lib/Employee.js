class Employee {
    constructor(names, id, email,) {
        this.names = names;
        this.id = id;
        this.email = email;
    }

    getName() { return this.names; }
    getId() { return this.id; }
    getEmail() { return this.email; }
    getRole() { return 'Employee' }
}

module.exports = Employee;