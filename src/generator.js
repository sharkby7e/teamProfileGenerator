const manCard = require('./manSection')

let cardSectionLit = ``

function generateCards(arr){
  arr.forEach(obj => {
    let role = obj.getRole()
    switch(role){
      case 'Manager':
        cardSectionLit += manCard.makeCard(obj)
        break;
    }
  })
}

function generateHTML(){
  return `
  ${cardSectionLit}
  `
}

module.exports = {
  generateHTML,
  generateCards
}
