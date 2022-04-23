const Manager = require('../lib/manager')

function makeSection(man) {
  let name = man.name
  return `This is a section for ${name}`
}

module.exports = {
  makeSection,
}
