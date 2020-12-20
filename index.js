require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

let router = require('./router')
router.init(app)

app.listen(3012, () => {
    console.log('Morning Records API started on port 3012')
})

