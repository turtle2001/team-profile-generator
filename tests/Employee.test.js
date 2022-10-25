const Employee = require("../lib/Employee")

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, and email", () => {
            const employee = new Employee("Abe", 1, "iamabe@gmail.com")

            expect(employee.name).toEqual("Abe");
            expect(employee.id).toEqual(1);
            expect(employee.email).toEqual("iamabe@gmail.com")
        })

        it("should throw an error if name is missing", () => {
            const employee = new Employee("", 1, "a@gmail.com")
            expect(employee).toThrow()
        })

        it("should throw an error if id is missing", () => {
            const employee = new Employee("Abe", NaN, "a@gmail.com")
            expect(employee).toThrow()
        })
        
        it("should throw an error if email is missing", () => {
            const employee = new Employee("Abe", 1, "")
            expect(employee).toThrow()
        })
    })

    describe("getName", () => {
        it("should return the employee's name", () => {
            const employee = new Employee("Amy", 1, "schumer@gmail.com")
            expect(employee.getName()).toEqual("Amy")
        })
    })

    describe("getId", () => {
        it("should return the employee's ID", () => {
            const employee = new Employee("Amy", 1, "schumer@gmail.com")
            expect(employee.getId()).toEqual(1)
        })
    })

    describe("getEmail", () => {
        it("should return an employees email", () => {
            const employee = new Employee("Amy", 1, "schumer@gmail.com")
            expect(employee.getEmail()).toEqual("schumer@gmail.com")
        })
    })

    describe("getRole", () => {
        it("should return an employees role", () => {
            const employee = new Employee("Amy", 1, "schumer@gmail.com")
            expect(employee.getRole()).toEqual("Employee")
        })
    })
})