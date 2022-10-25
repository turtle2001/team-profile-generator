import Employee from "./Employee.js";

class Engineer extends Employee {
    constructor(names, id, email, github) {
        super(names, id, email);

        if (!github)
            throw new Error("Github id is missing. Please re-enter the information.");

        this.gitHub = github;
    }
    getGithub() { return this.gitHub }
    getRole() { return 'Engineer' }
}

export default Engineer;