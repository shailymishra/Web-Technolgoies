// const express = require("express");
require('dotenv').config();

import express from 'express';
import bodyParser from 'body-parser';
import router from './routes';
import dbConfig from './config/db.sequelize.config';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on ${port}`);
});

dbConfig.sequelize.sync().then(() => {
    console.log('DB connected')
});

// db.sequelize.sync({ force: true }).then(() => {

// console.log('Drop and Resync with { force: true }');
app.get('/', (req, res, next) => {
    res.send('Hello, world!');
});
