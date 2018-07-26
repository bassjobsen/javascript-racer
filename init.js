module.exports = async function () {
  
   console.log('enter dapp init')

  app.registerContract(1000, 'domain.register')
  app.registerContract(1001, 'domain.set_ip')
  app.registerContract(1002, 'racetimes.saveRace')
  app.registerContract(1003, 'racetimes.saveLap')
  app.events.on('newBlock', (block) => {
    console.log('new block received', block.height)
  })
}
