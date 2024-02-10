const router = require('express').Router()

router.get('/', (req, res) => {
    let guestbook = [{
        name: 'Nick',
        location: 'Concord, NC',
        story: 'Met in Mrs. Miller\'s 2nd grade class',
        pic: 'http://placekitten.com/250/250',
        advice: 'Do not have kids!'
    }, {
        name: 'Hannah',
        location: 'NC State',
        story: 'Met in college freshman year',
        pic: 'http://placekitten.com/250/250',
        advice: 'Do not get a dog if you do not have a yard!'
    }]
    res.render('guestbook/index', { guestbook })
})

module.exports = router