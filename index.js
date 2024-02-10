require('dotenv').config()
const express = require('express')
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/guestbook', require('./controllers/guestbook'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.render('error404')
})

app.listen(process.env.PORT, () =>{
    console.log("I'm alive")
})



// NOTES - "guestbook.js" is "places.js" in rest-rant