const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const cors = require('cors')
const { json } = require('express')
const route = require('./routers')

app.use(cors())
app.use(json())
app.use('/', route)

app.listen(port, () => {
    console.log(`this app run on ${port}`)
})