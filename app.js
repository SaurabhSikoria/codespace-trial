const app = require('express')()
require('dotenv').config

app.get('/', (req, res) => {
    res.send('<h1>Server is running</h1>')
})

module.exports = app

