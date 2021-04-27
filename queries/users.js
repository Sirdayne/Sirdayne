const query = `CREATE TABLE public.records
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
trained boolean DEFAULT false,
    weight numeric(10,2),
    date date,
    CONSTRAINT records_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public.records
OWNER to postgres;`;

const { Pool  } = require('pg')

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT
})

pool.query(query, (err, res) => {
    console.log(err, res);
})