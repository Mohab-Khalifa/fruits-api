const express = require('express')
const cors = require('cors')
const fruitsApp = express()
const fruitRoutes = require('./routes/fruitRoutes')

fruitsApp.use(cors())
fruitsApp.use(express.json()) // any http method (i.e. get, put, patch etc.)
fruitsApp.use('/fruits', fruitRoutes)

module.exports = fruitsApp