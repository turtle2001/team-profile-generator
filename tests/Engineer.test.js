const Engineer = require("../lib/Engineer")

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, and email, and github id", () => {
            const engineer = new Engineer("Abe", 1, "iamabe@gmail.com", "iamabe999")

            expect(engineer.names).toEqual("Abe");
            expect(engineer.id).toEqual(1);
            expect(engineer.email).toEqual("iamabe@gmail.com")
            expect(engineer.github).toEqual("iamabe999")
        })

        it("should throw an error if github id is missing", () => {
            const engineer = () => new Engineer("Abe", 1, "a@gmail.com", "")
            expect(engineer).toThrow()
        })
    })

    describe("getGithub", () => {
        it("should return the engineer's github id", () => {
            const engineer = new Engineer("Amy", 1, "schumer@gmail.com", "amyschumer999")
            expect(engineer.getGithub()).toEqual("amyschumer999")
        })
    })

    describe("getRole", () => {
        it("should return the engineer's role", () => {
            const engineer = new Engineer("Amy", 1, "schumer@gmail.com", "amyschumer999")
            expect(engineer.getRole()).toEqual("Engineer")
        })
    })
})