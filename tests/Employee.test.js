const Employee = require("../lib/employee")

describe('Employee', () => {
  describe('Initialization', () => {
   it('should make a new Employee with name, id, and email',  () => {
      const obj = new Employee('Sid', '1', 'sgquin@gmail.com')

      expect(obj.name).toEqual('Sid')
      expect(obj.id).toEqual('1')
      expect(obj.email).toEqual('sgquin@gmail.com')
    })
  })
  describe('getID', () => {
    it('should return employee id number', ()=>{
      const obj2 = new Employee('Sid', '2', 'sgquin@gmail.com')
      const gottenName = obj2.getName()
      const { name, id, email } = obj2

      expect(gottenName).toEqual(name)
    })
    
  })
  describe('getRole', () => {
    it('should return Employee', ()=>{
      const obj2 = new Employee('Sid', '2', 'sgquin@gmail.com')
      const role = obj2.getRole()

      expect(role).toEqual('Employee')
    })
    
  })
  
})
