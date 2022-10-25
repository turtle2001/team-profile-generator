const Manager = require("../lib/Manager")

describe("Manager", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, and email, and officeNumber", () => {
            const manager = new Manager("Abe", 1, "iamabe@gmail.com", 100)

            expect(manager.name).toEqual("Abe");
            expect(manager.id).toEqual(1);
            expect(manager.email).toEqual("iamabe@gmail.com")
            expect(manager.officeNumber).toEqual(100)
        })

        it("should throw an error if officeNumber is missing", () => {
            const manager = new Manager("Abe", 1, "a@gmail.com", NaN)
            expect(employee).toThrow()
        })
    })

    describe("getRole", () => {
        it("should return the manager's role", () => {
            const manager = new Manager("Amy", 1, "schumer@gmail.com", NaN)
            expect(manager.getRole()).toEqual("Manager")
        })
    })
})