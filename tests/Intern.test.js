const Intern = require('../lib/Intern');

test("employee sets school correctly", () => {
    const name = "Joe"
    const id = "1234"
    const email = "billdozer@arlen.com"
    const school = "Tom Landry U"
    const object = new Intern(name, id, email, school)
    expect(object.school).toBe(school)
})

test("employee returns role as 'intern'", () => {
    const name = "Joe"
    const id = "1234"
    const email = "billdozer@arlen.com"
    const school = "Tom Landry U"
    const roleRequest = "Engineer"
    const object = new Intern(name, id, email, school)
    expect(object.getRole()).toBe(roleRequest)
})