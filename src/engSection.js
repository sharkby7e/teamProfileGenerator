function makeCard(obj){
  return `
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${obj.getName()}</h5>
          <h6 class= "card-title"><i class="fa-solid fa-code"></i> ${obj.getRole()}</h6>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${obj.getID()}</li>
          <li class ="list-group-item"><a href="mailto:${obj.getEmail()}" class="card-link">Email</a></li>
          <li class="list-group-item"><a href = "https://www.github.com/${obj.getGithub()}" class ='card-link'>Github: ${obj.getGithub()}</a></li>
        </ul>
      </div>

  `
}

module.exports = {
  makeCard
}

