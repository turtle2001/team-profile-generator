const Intern = require("../lib/Intern")

describe("Intern", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, and email, and school", () => {
            const intern = new Intern("Abe", 1, "iamabe@gmail.com", "UC Berkeley")

            expect(intern.names).toEqual("Abe");
            expect(intern.id).toEqual(1);
            expect(intern.email).toEqual("iamabe@gmail.com")
            expect(intern.school).toEqual("UC Berkeley")
        })

        it("should throw an error if school is missing", () => {
            const intern = () => new Intern("Abe", 1, "a@gmail.com", "")
            expect(intern).toThrow()
        })
    })

    describe("getSchool", () => {
        it("should return the intern's school", () => {
            const intern = new Intern("Amy", 1, "schumer@gmail.com", "UC Berkeley")
            expect(intern.getSchool()).toEqual("UC Berkeley")
        })
    })

    describe("getRole", () => {
        it("should return the intern's role", () => {
            const intern = new Intern("Amy", 1, "schumer@gmail.com", "UC Berkeley")
            expect(intern.getRole()).toEqual("Intern")
        })
    })
})