function makeCard(obj){
  return `
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${obj.getName()}</h5>
          <h6 class= "card-title"><i class="fa-solid fa-skull-crossbones"></i> ${obj.getRole()}</h6>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${obj.getID()}</li>
          <li class ="list-group-item"><a href="mailto:${obj.getEmail()}" class="card-link">Email</a></li>
          <li class="list-group-item">Office: ${obj.getOffice()}</li>
        </ul>
      </div>
  `
}

module.exports = {
  makeCard
}
