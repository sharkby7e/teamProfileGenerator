const inquirer = require('inquirer')
const fs = require('fs')
const Manager = require('./lib/manager')


function managerPrompt(){
  inquirer.prompt([
    {
      message: 'Please Enter Manager Name',
      name: 'name'
    },
    {
      message: 'Please Enter Manager ID',
      name: 'id'
    },
    {
      message: 'Please Enter Manager email',
      name: 'email'
    },
    {
      message: 'Please Enter Manager Office Number',
      name: 'office'
    },
  ]).then(function(answer){
    let newMan = new Manager( answer.name, answer.id, answer.email, answer.office)
    generate.generateSection(newMan)
    addEmpMenu()
  })
}


function addEmpMenu(){
inquirer.prompt([
  {
    type: 'list', 
    message: 'Please select from the menu below',
    choices: ['Add new Engineer', 'Add new Intern']
  },
])
}
function run(){
  managerPrompt()
}

run()
