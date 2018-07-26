app.route.get('/racetime/fastlap/:address',  async function (req) {
	let address = req.params.address	
	return await app.model.Laptime.findAll({"condition": {"racerId": address}, "sort": "lapTime","limit": 1})
})
app.route.get('/racetime/fastlaps/:address',  async function (req) {
    return await app.model.Laptime.findAll({"condition": {"racerId": req.params.address}, "sort": "lapTime", "limit": 10})
})
app.route.get('/racetime/fastlaps',  async function (req) {
    //werkt
    return await app.model.Laptime.findAll({"sort": "lapTime", "limit": 10})
})

/*app.route.get('/racetime/fastrace/:address',  async function (req) {
	let address = req.params.address	
	return await app.model.Time.findOne({"condition": {"racerId": address}, "sort": "time"})
})*/

app.route.get('/racetime/fastraces/:address',  async function (req) {
    return await app.model.Time.findAll({"condition": {"racerId": req.params.address}, "sort": "time", "limit": 10})
})
app.route.get('/racetime/fastraces',  async function (req) {
    //werkt
    return await app.model.Time.findAll({"sort": "time", "limit": 10})
})

/*app.route.get('/racetime/fastlaps-day',  async function (req) {
    return await app.model.Laptime.findAll({"sort": "lapTime", "limit": 10})
})
app.route.get('/racetime/fastlaps-week',  async function (req) {
    return await app.model.Laptime.findAll({"sort": {"lapTime": -1 }, "limit": 10})
})
app.route.get('/racetime/all',  async function (req) {
    //werkt
    return await app.model.Laptime.findAll()
})*/
