//import Employee from "./Employee.js";
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(names, id, email, github) {
        super(names, id, email);

        if (!github)
            throw new Error("Github id is missing. Please re-enter the information.");

        this.github = github;
    }
    getGithub() { return this.github }
    getRole() { return 'Engineer' }
    getExtraName() { return 'Github' }
    getExtraInfo() { return this.github }
}

module.exports = Engineer;
//export default Engineer;