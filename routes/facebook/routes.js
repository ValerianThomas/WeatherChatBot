const { mensengerWebhookValidation, processMessage } = require('./handler')
const facebookSignature = require('../../middlewares/facebookSignature')
module.exports = (app) => {
	app.get('/facebook', mensengerWebhookValidation)
	app.post('/facebook',facebookSignature, processMessage)
}