const router = require('express').Router()
const guestbook = require('../models/guestbook.js')

router.get('/', (req, res) => {
    res.render('guestbook/index', { guestbook })
})

router.get('/new', (req, res) => {
    res.render('guestbook/new')
})

router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!guestbook[id]) {
        res.render('error404')
    }
    else {
        res.render('guestbook/show', { guestbook: guestbook[id], id })
    }
})

router.post('/', (req, res) => {
    console.log(req.body)
    if (!req.body.pic) {
        // Default image if one is not provided
        req.body.pic = 'http://placekitten.com/250/300'
    }

    // Default fields if desired

    // if (!req.body.city) {
    //     req.body.city = 'Anywhere'
    // }
    // if (!req.body.state) {
    //     req.body.state = 'USA'
    // }
    guestbook.push(req.body)
    res.redirect('/guestbook')
})

router.delete('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!guestbook[id]) {
        res.render('error404')
    }
    else {
        guestbook.splice(id, 1)
        res.redirect('/guestbook')
    }
})

module.exports = router