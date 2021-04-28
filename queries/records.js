import { pool } from 'services/pool'

const query = `CREATE TABLE records
(
    id SERIAL PRIMARY KEY,
    weight NUMERIC(10,2),
    date DATE,
    trained BOOLEAN DEFAULT FALSE,
)`;

pool.query(query, (err, res) => {
    console.log(err, res);
})