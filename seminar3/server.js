'use strict'
const express = require('express')

let app = express()

app.get('/ping', (req, res) => {
    res.status(200).send('pong')
})

app.use(express.static('public'))

app.listen(8080)