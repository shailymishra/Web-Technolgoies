
const db = require('../config/db.sequelize.config');
const mysqldb = db.mysqldb;

class EmployeeController {
    findAll(req, res) {
        mysqldb.sequelize.query("SELECT * FROM `Employee`", { type: mysqldb.sequelize.QueryTypes.SELECT })
            .then(rows => {
                res.status(200).send({
                    success_code: 'employee_retrieved_success',
                    success_description: 'Employee retrieved successfully',
                    details: rows,
                });
            })
    }
    findById(req, res) {
        const id = req.params.id;
        mysqldb.sequelize.query(`SELECT * FROM Employee where id= ${id}`, { type: mysqldb.sequelize.QueryTypes.SELECT })
            .then(row => {
                res.status(200).send({
                    success_code: 'employee_retrieved_success',
                    success_description: 'Employee retrieved successfully',
                    details: row,
                });
            })
    }
    create(req, res) {
        const employee = req.body;
        const insertQuery = `INSERT INTO Employee 
        ( name, department, designation)
         VALUES ( "${employee.name}" , "${employee.department}" , "${employee.designation}");`

        mysqldb.sequelize.query(insertQuery, { type: mysqldb.sequelize.QueryTypes.INSERT })
            .spread((insertRowId) => {
                res.status(200).send({
                    success_code: 'employee_added_success',
                    success_description: 'Employee added successfully',
                    details: insertRowId,
                });
            })
    }
    update(req, res) {
        const id = req.params.id;
        const employee = req.body;

        const updateQuery = `UPDATE Employee SET 
        name = "${employee.name}",
        department = "${employee.department}",
        designation = "${employee.designation}"
        WHERE id = ${id}`;

        mysqldb.sequelize.query(updateQuery, { type: mysqldb.sequelize.QueryTypes.UPDATE })
            .spread(() => {
                res.status(200).send({
                    success_code: 'employee_updated_success',
                    success_description: 'Employee updated successfully',
                });
            })
    }
    delete(req, res) {
        const id = req.params.id;
        const deleteQuery = `DELETE FROM Employee where id = "${id}"`;
        mysqldb.sequelize.query(deleteQuery)
            .spread(() => {
                res.status(200).send({
                    success_code: 'employee_delete_success',
                    success_description: 'Employee deleted successfully',
                });
            })
    }

}

const employeeController = new EmployeeController();
export default employeeController;

