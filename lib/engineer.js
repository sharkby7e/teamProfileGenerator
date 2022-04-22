const Employee = require('./employee');

class Engineer extends Employee{
  constructor(name, email, gitHub){
    super(name, email)
    this.gitHub = gitHub
  }
  getGithub(){return this.gitHub}
  getRole() { return 'Engineer'}
}

module.exports = Engineer
