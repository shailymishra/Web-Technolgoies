require('dotenv').config();
import mysql from 'mysql2';

export const databaseCredentials = {
    host: process.env.MYSQL_DB_HOST,
    user: process.env.MYSQL_DB_USERNAME,
    password: process.env.MYSQL_DB_PASSWORD,
    database: process.env.MYSQL_DB_NAME
};

const connection = mysql.createConnection(databaseCredentials);

export default connection;