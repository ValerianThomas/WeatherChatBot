const keys = require('../config')
const crypto = require('crypto')
module.exports = (req, res, next) => {
    const hmac = crypto.createHmac('sha1', keys.appSecret);
    hmac.update(req.rawBody, 'utf-8');
    if (req.headers['x-hub-signature'] === `sha1=${hmac.digest('hex')}`) next();
    else res.status(400).send('Invalid signature');
}