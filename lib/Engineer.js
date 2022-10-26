//For some reason, the bottom import declaration does not work when running node index.js but doesn't work with tests.
//Vice versa for the top one.

import Employee from "./Employee.js";
//const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(names, id, email, github) {
        super(names, id, email);

        if (!github)
            throw new Error("Github id is missing. Please re-enter the information.");

        this.github = github;
    }
    getGithub() { return this.github }
    getRole() { return 'Engineer' }
    getExtraName() { return 'Github' }  //needed to determine what to display on HTML
    getExtraInfo() { return this.github }
}

//For some reason, the top export declaration does not work when running node index.js but does work with tests.
//Vice versa for the bottom one.

//module.exports = Engineer;
export default Engineer;