const express = require('express')
const config = require('./config')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json({
    verify(req, res, buf) {
      req.rawBody = buf;
	    },
	})
)



const PORT = process.env.PORT || 5000

require('./routes/facebook')(app)


app.listen(PORT, ()=> console.log("listening to"+PORT))