const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('GET /guestbook')
})







module.exports = router