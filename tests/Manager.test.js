const Manager = require("../lib/manager")

describe('Manager', () => {
  describe('Initialization', () => {
   it('should make a new Employee with name, id, and email',  () => {
      const obj = new Manager('Sid', 'sgquin@gmail.com', 1)
      expect(obj.name).toEqual('Sid')
      expect(obj.id).toEqual(1)
      expect(obj.email).toEqual('sgquin@gmail.com')
     expect(obj.officeNum).toEqual(1)
    })
  })
  describe('getRole change', () => {
    it('should return manager', () =>{
      const obj = new Manager('Sid', 'sgquin@gmail.com', 1)
      expect(obj.getRole()).toEqual('Manager')
      expect(obj.id).toEqual(2)
    })
  })
})
