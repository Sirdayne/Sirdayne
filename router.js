let authController = require('./controllers/auth')
let recordsController = require('./controllers/records')

exports.init = (app) => {
    app.post('/login', authController.login)
    app.post('/register', authController.register)

    app.get('/records', recordsController.all)
    app.get('/records/:id', recordsController.findById)
    app.put('/records/:id', recordsController.update)
    app.post('/records', recordsController.create)
    app.delete('/records/:id', recordsController.delete)
}