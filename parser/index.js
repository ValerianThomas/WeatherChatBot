'use strict'

let getFeel = temp => {
		if (temp < 5) {
			return "shivering cold"
		} else if (temp >= 5 && temp < 15) {
			return "preaty cold"
		} else if (temp >= 15 && temp < 25) {
			return "moderately cold"
		} else if (temp >= 25 && temp < 32) {
			return "quit warm"
		} else if (temp >= 32 && temp < 40) {
			return "very hot"
		} else {
			return "super hot"
		}
	}

const currentWeather = response => {
	if(response.query.results) {
		let resp = response.query.results.channel
		let location = `${resp.location.city}, ${resp.location.country}`
		const {text, temp} = resp.item.condition
		return `Right now, it is ${text.toLowerCase()} in ${location}. ${getFeel(Number(temp))} ${temp} degrees Celcius.`
	}
}


module.exports = {
	currentWeather: currentWeather
}