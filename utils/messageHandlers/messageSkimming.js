const messageSkimmer = (messageObj) => {
	const sender = messageObj.sender.id
	if( messageObj.message.text) {
		return {
			sender,
			type:'text',
			content: messageObj.message.text
		}
	}
}

module.exports = {
	messageSkimmer
}