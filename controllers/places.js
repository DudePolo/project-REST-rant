const router = require('express').Router()

router.get('/', function (req, res) {
    res.send('GET /place')
})
module.exports = router