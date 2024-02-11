const router = require('express').Router()

router.get('/', (req, res) => {
    let guestbook = [{
        name: 'Nick',
        location: 'Concord, NC',
        story: 'Met in Mrs. Miller\'s 2nd grade class',
        pic: '/images/test-1-sm.jpg',
        advice: 'Do not have kids!'
    }, {
        name: 'Hannah',
        location: 'NC State',
        story: 'Met in college freshman year',
        pic: '/images/test-2-sm.jpg',
        advice: 'Do not get a dog if you do not have a yard!'
    }]
    res.render('guestbook/index', { guestbook })
})

router.get('/new', (req, res) => {
    res.render('guestbook/new')
})

module.exports = router