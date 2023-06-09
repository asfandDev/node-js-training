const express = require('express')
const app = express()
require('dotenv').config();
const listEndpoints = require('express-list-endpoints')
const bodyParser = require('body-parser')

const apiRoutes = require('./routes')

app.use(bodyParser.json({urlExtended:true}))

app.use('/api' , apiRoutes)

console.log(listEndpoints(app))

app.listen(process.env.SERVER_PORT || 3000 , () => {
    console.log('listening on port ' , process.env.SERVER_PORT || 3000)
})
