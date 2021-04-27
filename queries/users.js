import { pool } from 'services/pool'

const query = `CREATE TABLE public.users
(
    id integer NOT NULL,
    email text COLLATE pg_catalog."default" NOT NULL,
    password text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT users_pkey PRIMARY KEY (id),
    CONSTRAINT users_email_key UNIQUE (email)
)

TABLESPACE pg_default;

ALTER TABLE public.users
    OWNER to postgres;`;

pool.query(query, (err, res) => {
    console.log(err, res);
})