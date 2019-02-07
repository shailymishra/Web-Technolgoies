require('dotenv').config();

import Sequelize from 'sequelize';
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    operatorsAliases: false,
    pool: {
        max: process.env.DB_POOL_MAX,
        min: process.env.DB_POOL_MIN,
        acquire: process.env.DB_POOL_ACQUIRE,
        idle: process.env.DB_POOL_IDLE
    }
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Here all model will be added as property to db
db.show = require('../models/show.model')(sequelize, Sequelize);

module.exports = db;