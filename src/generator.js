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
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Team Profile</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/2eeca62fdc.js" crossorigin="anonymous"></script>
    <link href="../dist/style.css" rel="stylesheet">
  </head>
  <body class = 'd-flex flex-column justify-content-center'>

    <h1 class = "text-center text-light">Your Team Profile</h1>

    <main class = "d-flex flex-wrap justify-content-center align-self-center cardHolder">
    ${cardSectionLit}      
    </main>
  
  </body>
</html>
  `
}

module.exports = {
  generateHTML,
  generateCards
}
