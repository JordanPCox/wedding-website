require('dotenv').config()
const express = require('express')
const app = express()

app.use('/guestbook', require('./controllers/guestbook'))

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.listen(process.env.PORT, () =>{
    console.log("I'm alive")
})

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})