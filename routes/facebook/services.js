const rp = require('request-promise')
const keys = require('../../config')
const responseToSender = (responseMessage) => {
	const options = {
		method: 'POST',
		uri: `https://graph.facebook.com/v2.6/me/messages?access_token=${keys.facebookAccessToken}`,
		body:responseMessage,
		json:true
	}
	return rp(options)
}

module.exports = {
	responseToSender
}

