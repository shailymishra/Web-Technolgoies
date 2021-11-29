import express from 'express';
import bodyParser from 'body-parser';
// import db from './db/db';
import router from './routes';
// import router from './routes';
import mysql from 'mysql';

import models from './models';

export const databaseCredentials = {
	host: 'localhost',
	user: 'shaily',
	password: 'argusadmin',
	database: 'Students'
};

const connection = mysql.createConnection(databaseCredentials);
const getPeople = () => 'SELECT * FROM student';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);




app.listen(port, () => {
	console.log(`listening on port ${port}`);
});


const db = require('./config/db.config');
  
// force: true will drop the table if it already exists
// db.sequelize.sync().then(() => {
//   console.log('Drop and Resync with { force: true }');
// });


models.sequelize.sync(() => {
console.log('database is working fine')
} )

router.get('/students', (req, res, next) => {
	connection.query('SELECT * from student', function (error, results, fields) {
		if (error) {
			res.send(({ "status": 500, "error": error, "response": null }));
		} else {
			res.send(({ "status": 200, "error": null, "response": results }));
		}
	});
});

// connection.query(getPeople(), (err, rows) => {
//     if (err) {
//       throw err;
//     }

//     for (let i = 0; i < rows.length; i++) {
//       console.log(rows[i].id);
//       console.log(rows[i].firstname);
//       console.log(rows[i].lastname);
//    }
//  });

