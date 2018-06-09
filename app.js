'use strict'

const Readline = require('readline')
const matcher = require('./matcher')
const {currentWeather} = require('./parser')
const weather = require('./weather')

const rl = Readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false
})

rl.setPrompt('> ')
rl.prompt()
rl.on('line', reply => {
	matcher (reply, async data => {
		switch(data.intent) {
			case "Hello":
			console.log(`${data.entities.greeting} to you to`)
			rl.prompt()
			break
			case "Exit":
				console.log("Have a great day !")
				process.exit(0)
			case "CurrentWeather":
				console.log(`Checking weather for ${data.entities.city}...`)
				try {
					const cityWeather = await weather(data.entities.city, 'current')
					const parseResult = await currentWeather(cityWeather)
					console.log(parseResult)
					rl.prompt()
				} catch(error){
					console.log("there seems to be a problem connecting to the weather service")
					console.log(error)
					rl.prompt()
				}
				//fectch weather from an API
				rl.prompt()
				break
			default :
			console.log("Sorry I am still learning, I don't know what you mean :(")
			rl.prompt()
		}
	})
})