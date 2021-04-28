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


const port = process.env.APP_PORT || 3012;
app.listen(port, () => {
    console.log('Morning Records API started on port 3012')
})

