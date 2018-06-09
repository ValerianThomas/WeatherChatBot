'use strict'

const keys = require('./keys')
if(process.env.NODE_ENV === 'production') {
	module.exports = {
	facebookAccessToken : process.env.facebookAccessToken ,
	myToken: process.env.myToken ,
	appSecret: process.env.appSecret
	}
} else {
	module.exports = keys
}