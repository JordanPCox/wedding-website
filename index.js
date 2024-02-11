// Modules and globals
require('dotenv').config()
const express = require('express')
const app = express()

// Express settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

// Controllers and Routes
app.use('/guestbook', require('./controllers/guestbook'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.render('error404')
})


// Listen for connections
app.listen(process.env.PORT, () =>{
    console.log("I'm alive")
})



// NOTES - "guestbook.js" is "places.js" in rest-rant