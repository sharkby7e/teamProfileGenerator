const Employee = require("../lib/employee")

describe('Employee', () => {
  describe('Initialization', () => {
   it('should make a new Employee with name, id, and email',  () => {
     const obj = new Employee('Sid', 'sgquin@gmail.com')
     const obj2 = new Employee('Ellen', 'ellenekeating@gmail.com')

     expect(obj.name).toEqual('Sid')
     expect(obj.id).toEqual(1)
     expect(obj2.id).toEqual(2)
     expect(obj.email).toEqual('sgquin@gmail.com')
    })
  })

  describe('getID', () => {
    it('should return employee id number', ()=>{
      const obj = new Employee('Sid', 'sgquin@gmail.com')
      const gottenID = obj.getID()

      expect(gottenID).toEqual(obj.id)
    })
  })

  describe('getRole', () => {
    it('should return Employee', ()=>{
      const obj2 = new Employee('Sid', 'sgquin@gmail.com')
      const role = obj2.getRole()

      expect(role).toEqual('Employee')
    })
  })
})

