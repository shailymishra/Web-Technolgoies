require('dotenv').config();
import postgress from 'pg';

// const postgress = require('pg').Pool

export const databaseCredentials = {
    host: process.env.POSTGRES_DB_HOST,
    user: process.env.POSTGRES_DB_USERNAME,
    password: process.env.POSTGRES_DB_PASSWORD,
    database: process.env.POSTGRES_DB_NAME
};

const connection = new postgress.Pool(databaseCredentials);

export default connection;