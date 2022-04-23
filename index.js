const inquirer = require('inquirer')
const fs = require('fs')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
// const generate = require('./src/generator')

const empArray = []
function managerPrompt(){
    inquirer.prompt([
        {
            message: 'Please Enter Manager Name',
            name: 'name'
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
        let newMan = new Manager( answer.name, answer.email, answer.office )
        empArray.push(newMan)
        // generate.generateSection(newMan)
        console.log("Manager Successfully Added!")
        addEmpMenu()
    })
}

function addEmpMenu(){
    inquirer.prompt([
        {
            type: 'list', 
            message: `\nCreate a new Employee\nWhat is their Position`,
            name: 'choice',
            choices: ['Engineer', 'Intern', 'I\'m done creating employees']
        },
    ]).then ((answer) => {
        switch(answer.choice){
            case 'Engineer':
                engineerMenu();
                break;
            case 'Intern':
                internMenu();
                break;
            case 'I\'m done creating employees':
                console.log(empArray)
                break;
                // generate.generateHTML(empArray)
        }
    })
}

function engineerMenu() {
    inquirer.prompt([
        {
            message: 'Please Enter Engineer Name',
            name: 'name'
        },
        {
            message: 'Please Enter Engineer email',
            name: 'email'
        },
        {
            message: 'Please Enter Engineer gitHub username',
            name: 'github'
        }
    ]).then((answers)=> {
        let newEng = new Engineer(answers.name, answers.email, answers.github)
        empArray.push(newEng)
        console.log('Engineer Successfully Added!')
        addEmpMenu()
    })
}

function internMenu() {
    inquirer.prompt([
        {
            message: 'Please Enter Intern Name',
            name: 'name'
        },
        {
            message: 'Please Enter Intern email',
            name: 'email'
        },
        {
            message: 'Please Enter Intern school',
            name: 'school'
        }
    ]).then((answers)=> {
        let newInt = new Intern(answers.name, answers.email, answers.school)
        empArray.push(newInt)
        console.log('Engineer Successfully Added!')
        addEmpMenu()
    })
}




// first file to run on open 
function run(){
    managerPrompt()
}

run()
