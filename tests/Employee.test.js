const Employee = require('../lib/Employee');


test("employee class creates objects", ()=> {
    const object = new Employee()
    expect(typeOf(object).toBe("object"))

})

test("employee sets name correctly", () => {
    const name = "Joe"
    const object = new Employee(name)
    expect(object.name).toBe(name)
})

test("employee sets ID correctly", () => {
    const name = "Joe"
    const id = "1234"
    const object = new Employee(name, id)
    expect(object.id).toBe(id)
})

test("employee sets email correctly", () => {
    const name = "Joe"
    const id = "1234"
    const email = "billdozer@arlen.com"
    const object = new Employee(name, id, email)
    expect(object.email).toBe(email)
})

test("employee returns role as 'employee'", () => {
    const name = "Joe"
    const id = "1234"
    const email = "billdozer@arlen.com"
    const roleRequest = "Employee"
    const object = new Employee(name, id, email)
    expect(object.getRole()).toBe(roleRequest)
})