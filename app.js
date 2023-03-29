const express = require('express')
const log = require('./middleware/log')
const product = require('./routes/product');

//express app
const app = express()

//middleware
app.use(log)

//home route
app.get('/', (req, res) => {
    res.json({
        message: "welcome to the app"
    })
})

//product routes
app.use(product)

//product user

//404 page/response
app.use((req, res) => {
    res.status(404)
    res.send({
        status: "failed",
        message: req.originalUrl + "not found"
    })
})

//listen for requests
app.listen(3000, ()=> {
    console.log('listening on port 3000')
})