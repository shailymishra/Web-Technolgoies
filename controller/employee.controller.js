
const db = require('../config/db.sequelize.config');

class EmployeeController {
    findAll(req, res) {
        db.sequelize.query("SELECT * FROM `Employee`", { type: db.sequelize.QueryTypes.SELECT })
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
        db.sequelize.query(`SELECT * FROM Employee where id= ${id}`, { type: db.sequelize.QueryTypes.SELECT })
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

        db.sequelize.query(insertQuery, { type: db.sequelize.QueryTypes.INSERT })
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

        db.sequelize.query(updateQuery, { type: db.sequelize.QueryTypes.UPDATE })
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
        db.sequelize.query(deleteQuery)
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

