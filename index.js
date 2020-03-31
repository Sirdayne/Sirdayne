let express = require('express')
let bodyParser = require('body-parser')

let app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

let router = require('./router')
router.init(app)

app.listen(3012, () => {
    console.log('Morning Records API started')
})

