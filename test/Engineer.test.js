const Engineer = require('../lib/engineer');

describe('Engineer', () => {
  describe('Initialization', () => {
   it('should make a new Engineer with name, id, and email',  () => {
     const obj = new Engineer('Sid', 'sgquin@gmail.com', 'sharkby7e')

     expect(obj.name).toEqual('Sid')
     expect(obj.id).toEqual(1)
     expect(obj.gitHub).toEqual('sharkby7e')
    })
  })
  describe('getGithub', () => {
    it('should return engineers gitHub', ()=>{
      const obj = new Engineer('Sid', 'sgquin@gmail.com', 'sharkby7e')
      const gotHub = obj.getGithub()

      expect(obj.id).toEqual(2)
      expect(gotHub).toEqual(obj.gitHub)
    })
  })
  describe('role', () => {
    it('should return Engineer', ()=>{
      const obj = new Engineer('Sid', 'sgquin@gmail.com', 'sharkby7e')
      
      expect(obj.id).toEqual(3)
      expect(obj.getRole()).toEqual('Engineer')
    })
  })
})

