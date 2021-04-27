const pool = require('../services/pool').pool;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const generateAccessToken = (id, email) => {
    const payload = { id, email };
    return jwt.sign(payload, process.env.SECRET_JWT, { expiresIn: '24h'})
}

exports.register = (req, res) => {
    const salt = 7;
    const hashPassword = bcrypt.hashSync(req.body.password, salt)
    pool.query('INSERT INTO users(email, password) VALUES ($1, $2)', [req.body.email, hashPassword], (err, user) => {
        if (err) {
            res.sendStatus(500)
        }
        if (user.rowCount === 1) {
            res.sendStatus(201)
        } else {
            res.sendStatus(500)
        }
    })
}

exports.login = (req, res) => {
    pool.query('SELECT * from users WHERE email = $1', [req.body.email], (err, user) => {
        if (err) {
            res.sendStatus(500)
        }
        if (user.rowCount === 1) {
            res.sendStatus(201)
        } else {
            res.sendStatus(500)
        }
    })
}