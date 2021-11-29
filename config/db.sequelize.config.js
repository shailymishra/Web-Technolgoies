require('dotenv').config();

import Sequelize from 'sequelize';
const mysqlsequelize = new Sequelize(process.env.MYSQL_DB_NAME, process.env.MYSQL_DB_USERNAME, process.env.MYSQL_DB_PASSWORD, {
    host: process.env.MYSQL_DB_HOST,
    dialect: process.env.MYSQL_DB_DIALECT,
    operatorsAliases: false,
    pool: {
        max: process.env.MYSQL_DB_POOL_MAX,
        min: process.env.MYSQL_DB_POOL_MIN,
        acquire: process.env.MYSQL_DB_POOL_ACQUIRE,
        idle: process.env.MYSQL_DB_POOL_idle
    }
});


const postgressequelize = new Sequelize(process.env.POSTGRES_DB_NAME, process.env.POSTGRES_DB_USERNAME, process.env.POSTGRES_DB_PASSWORD, {
    host: process.env.POSTGRES_DB_HOST,
    dialect: process.env.POSTGRES_DB_DIALECT,
    operatorsAliases: false
});


const db = {
    mySqldb: {},
    postgresdb: {}
};

db.mySqldb.Sequelize = Sequelize;
db.mySqldb.sequelize = mysqlsequelize;

// Here all model will be added as property to db
db.mySqldb.show = require('../models/show.model')(mysqlsequelize, Sequelize);

db.postgresdb.Sequelize = Sequelize;
db.postgresdb.sequelize = postgressequelize;
db.postgresdb.book = require('../models/Book.model')(postgressequelize, Sequelize);

module.exports = db;