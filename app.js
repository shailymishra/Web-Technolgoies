// const express = require("express");
require('dotenv').config();

import express from 'express';
import bodyParser from 'body-parser';
import router from './routes';
import db from './config/db.sequelize.config';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on ${port}`);
});


db.mySqldb.sequelize.sync().then(() => {
    console.log('Mysql DB connected')
});

db.postgresdb.sequelize.sync().then(() => {
    console.log('Postgres DB connected')
})

// db.sequelize.sync({ force: true }).then(() => {
// console.log('Drop and Resync with { force: true }');
app.get('/', (req, res, next) => {
    res.send('Hello, world!');
});


const dbConfig = require('./config/mongodb.config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("MongoDB conncted");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

