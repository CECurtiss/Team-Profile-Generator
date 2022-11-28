const Manager = require('../lib/Manager');

test("employee sets office number correctly", () => {
    const name = "Joe"
    const id = "1234"
    const email = "billdozer@arlen.com"
    const officeNumber = "1"
    const object = new Manager(name, id, email, officeNumber)
    expect(object.officeNumber).toBe(officeNumber)
})

test("employee returns role as 'manager'", () => {
    const name = "Joe"
    const id = "1234"
    const email = "billdozer@arlen.com"
    const officeNumber = "1"
    const roleRequest = "Manager"
    const object = new Manager(name, id, email, officeNumber)
    expect(object.getRole()).toBe(roleRequest)
})