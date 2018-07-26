module.exports = {
  saveRace: async function(time,lapTimes,dappVersion) {
    app.sdb.create('Time', {
    id: app.autoID.increment('time_max_id'),
    transactionId: this.trs.id,
    time: time,
    lapTimes: JSON.stringify(lapTimes),
    racerId: this.trs.senderId,
    version: dappVersion,
    timestamp: this.trs.timestamp
    })
  },
  saveLap: async function(lapTime,dappVersion) {	

		app.sdb.create('Laptime', {
		    id: app.autoID.increment('laptime_max_id'),
		    transactionId: this.trs.id,
		    lapTime: lapTime,
		    racerId: this.trs.senderId,
		    version: dappVersion,
		    timestamp: this.trs.timestamp
		})	

   }	 	
}
