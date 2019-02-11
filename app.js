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


// router.get('/test', (req, res) => {
//     db.postgresdb.sequelize.query(`SELECT *  FROM   "BackendRest"."Games"`)
//         .spread(rows => {
//             res.status(200).send({
//                 success_code: 'games_retrieved_success',
//                 success_description: 'Games retrieved successfully',
//                 details: rows,
//             });
//         })
// });



// db.sequelize.sync({ force: true }).then(() => {

// console.log('Drop and Resync with { force: true }');
app.get('/', (req, res, next) => {
    res.send('Hello, world!');
});

