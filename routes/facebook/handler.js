const keys = require('../../config/index.js')
const { messageSkimmer } = require('../../utils/messageHandlers/messageSkimming')
const { responseToSender } = require('./services')
const { responseMessage } = require('../../utils/messageHandlers/responseMessage')
const mensengerWebhookValidation = (req, res) => {
	const params = req.query
	const mode = params['hub.mode']
	const token = params['hub.verify_token']
	const challenge = params['hub.challenge']

	try {
		if(mode === 'subscribe' && token === keys.myToken) {
			res.send(challenge)
			console.log("link sucess")
		} else {
			console.log("wrong credentials")
			res.sendStatus(200)
		}
	} catch(error){
			res.sendStatus(400)
	}
}

const processMessage =  (req, res) => {
	res.sendStatus(200)
	if (req.body.object === "page" && req.body.entry) {
		const data = req.body
		data.entry.forEach(pageObject => {
			if(pageObject.messaging) {
				pageObject.messaging.forEach( (message) => {
					const skimmedMessage = messageSkimmer(message) // return sender = sender id, type = type of message exemple text, and the content exemple "hello World"
					console.log(skimmedMessage)
					responseToSender(responseMessage(skimmedMessage.sender, skimmedMessage.content))
					.then(res => console.log(res))
					.catch(err => console.log(err))
						
					
						
					
				})
			}
		})
	}
}

module.exports = {
	mensengerWebhookValidation,
	processMessage
}