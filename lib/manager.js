const Employee = require('./employee')

class Manager extends Employee{
constructor( name, email, officeNum ){
  super( name, email )
  this.officeNum = officeNum
}

getRole(){ return 'Manager'}
getOffice(){ return this.officeNum}
  
}

module.exports = Manager
