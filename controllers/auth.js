const { Pool  } = require('pg')

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT
})

exports.all = (req, res) => {
    pool.query('SELECT * from records', (err, records) => {
        if (err) {
            res.sendStatus(500)
        }
        if (records && records.rows) {
            res.send(records.rows)
        }
    })
}

exports.findById = (req, res) => {
    const id = parseInt(req.params.id);
    if (id) {
        pool.query('SELECT * from records WHERE id = $1', [id], (err, record) => {
            if (err) {
                res.sendStatus(500)
            }
            if (record && record.rows && record.rows.length === 1) {
                res.send(record.rows[0])
            } else {
                res.sendStatus(404)
            }
        })
    } else {
        res.sendStatus(404)
    }
}

exports.update = (req, res) => {
    pool.query('UPDATE records SET date = $2, weight = $3, trained = $4 WHERE id = $1', [req.params.id, req.body.date, req.body.weight, req.body.trained], (err, record) => {
        if (err) {
            res.sendStatus(500)
        }
        if (record.rowCount === 1) {
            res.sendStatus(200)
        } else {
            res.sendStatus(404)
        }
    })
}

exports.create = (req, res) => {
    pool.query('INSERT INTO records(date, weight, trained) VALUES ($1, $2, $3)', [req.body.date, req.body.weight, req.body.trained], (err, record) => {
        if (err) {
            res.sendStatus(500)
        }
        if (record.rowCount === 1) {
            res.sendStatus(201)
        } else {
            res.sendStatus(500)
        }
    })
}

exports.delete = (req, res) => {
    const id = parseInt(req.params.id);
    if (id) {
        pool.query('DELETE FROM records WHERE id = $1', [req.params.id], (err, record) => {
            if (err) {
                res.sendStatus(500)
            }
            if (record.rowCount === 1) {
                res.sendStatus(200)
            } else {
                res.sendStatus(404)
            }
        })
    } else {
        res.sendStatus(404)
    }
}