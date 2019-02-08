require('dotenv').config();
import mysql from 'mysql2';

export const databaseCredentials = {
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
};

const connection = mysql.createConnection(databaseCredentials);

console.log('connection db')
export default connection;