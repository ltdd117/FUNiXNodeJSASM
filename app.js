const express = require('express')

// const routes = require('./routes')

const app = express()

// middleware
app.use((req, res, next) => {
    console.log('In the middleware')
    next() // Allow the req to the next middleware
})

// middleware
app.use((req, res, next) => {
    console.log('In the second middleware')
    res.send('<h1>Hello from Express!</h1>')
})

app.listen(3000)