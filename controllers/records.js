let records = [
    {
        id: 1,
        date: '29/03/2020',
        weight: 75.2,
        trained: false
    },
    {
        id: 2,
        date: '30/03/2020',
        weight: 75.4,
        trained: true
    },
    {
        id: 3,
        date: '31/03/2020',
        weight: 75.6,
        trained: false
    }
]

exports.all = (req, res) => {
    res.send(records)
}

exports.findById = (req, res) => {
    let found = records.find(record => {
        if (record.id === Number(req.params.id)) {
            return record
        }
    })
    if (found) {
        res.send(found)
    } else {
        res.sendStatus(404)
    }
}

exports.update = (req, res) => {
    let found = records.find(record => {
        if (record.id === Number(req.params.id)) {
            return record
        }
    })
    if (found) {
        found.date = req.body.date ? req.body.date : found.date
        found.weight = req.body.weight ? req.body.weight : found.weight
        found.trained = req.body.trained ? req.body.trained : found.trained
        res.send(found)
    } else {
        res.sendStatus(404)
    }
}

exports.create = (req, res) => {
        if (req.body.date && req.body.weight && typeof(req.body.trained) === "boolean") {
            let record = {
                id: Date.now(),
                date: req.body.date,
                weight: req.body.weight,
                trained: req.body.trained
            }
            records.push(record)
            res.send(record)
        } else {
            res.status(400).send({
                message: 'Fill all required fields'
            })
        }
}

exports.delete = (req, res) => {
    let found = records.find(record => {
        if (record.id === Number(req.params.id)) {
            return record
        }
    })
    if (found) {
        records = records.filter(record => record.id !== Number(req.params.id))
        res.sendStatus(200)
    } else {
        res.sendStatus(404)
    }
}