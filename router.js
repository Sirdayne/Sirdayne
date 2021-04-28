let authController = require('./controllers/auth')
let recordsController = require('./controllers/records')
let usersController = require('./controllers/users')

const authMiddleware = require('./middlewares/auth')

exports.init = (app) => {
    app.post('/login', authController.login)
    app.post('/register', authController.register)

    app.get('/users', usersController.all)
    app.get('/users/:id', usersController.findById)

    app.get('/records', authMiddleware, recordsController.all)
    app.get('/records/:id', authMiddleware, recordsController.findById)
    app.put('/records/:id', authMiddleware, recordsController.update)
    app.post('/records', authMiddleware, recordsController.create)
    app.delete('/records/:id', authMiddleware, recordsController.delete)
}