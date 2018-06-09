const responseMessage = (id, text, messaging_type = 'RESPONSE') => {
	return {
		messaging_type,
		recipient: {
			id
		},
		message: {
			text
		}
	}
}


module.exports = {
	responseMessage
}