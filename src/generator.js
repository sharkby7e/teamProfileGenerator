const manCard = require('./manSection')
const engCard = require('./engSection')
const intCard = require('./intSection')

let cardSectionLit = ``

function generateCards(arr){
  arr.forEach(obj => {
    let role = obj.getRole()
    switch(role){
      case 'Manager':
        cardSectionLit += manCard.makeCard(obj)
        break;
      case 'Engineer':
        cardSectionLit += engCard.makeCard(obj) 
        break;
      case 'Intern':
        cardSectionLit += intCard.makeCard(obj)
        break;
    }
  })
}

function generateHTML(){
  return `
  `
}

module.exports = {
  generateHTML,
  generateCards
}
