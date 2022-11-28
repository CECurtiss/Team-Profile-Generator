const Engineer = require('../lib/Engineer');

test("employee sets github correctly", () => {
    const name = "Joe"
    const id = "1234"
    const email = "billdozer@arlen.com"
    const github = "billdozer"
    const object = new Engineer(name, id, email, github)
    expect(object.github).toBe(github)
})

test("employee returns role as 'engineer'", () => {
    const name = "Joe"
    const id = "1234"
    const email = "billdozer@arlen.com"
    const github = "billdozer"
    const roleRequest = "Engineer"
    const object = new Engineer(name, id, email, github)
    expect(object.getRole()).toBe(roleRequest)
})