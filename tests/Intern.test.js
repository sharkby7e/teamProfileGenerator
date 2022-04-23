const Intern = require('../lib/intern');

describe('Intern', () => {
  describe('Initialization', () => {
   it('should make a new Intern with name, id, and email',  () => {
     const obj = new Intern('Sid', 'sgquin@gmail.com', 'University of Michigan')

     expect(obj.name).toEqual('Sid')
     expect(obj.id).toEqual(1)
     expect(obj.school).toEqual('University of Michigan')
    })
  })
  describe('getSchool', () => {
    it('should return Intern gitHub', ()=>{
      const obj = new Intern('Sid', 'sgquin@gmail.com', 'University of Michigan')
      const gotSchool = obj.getSchool()

      expect(obj.id).toEqual(2)
      expect(gotSchool).toEqual(obj.school)
    })
  })
  describe('role', () => {
    it('should return Intern', ()=>{
      const obj = new Intern('Sid', 'sgquin@gmail.com', 'University of Michigan')
      
      expect(obj.id).toEqual(3)
      expect(obj.getRole()).toEqual('Intern')
    })
  })
})

