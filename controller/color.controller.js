

import postgressConnection from '../config/postgress.pool.config';

class ColorController {
    findAll(req, res) {
        postgressConnection.query(`SELECT * FROM "BackendRest"."Color"`, (error, results) => {
            // results contains rows, fields and other properties
            error ?
                res.status(500).send({
                    error_code: 'color_retrieved_failed',
                    error_description: 'Color retrieved failed',
                    details: error,
                })
                :
                res.status(200).send({
                    success_code: 'color_retrieved_success',
                    success_description: 'Color retrieved successfully',
                    details: results.rows,
                });
        });
    }
    findById(req, res) {
        const id = req.params.id;
        postgressConnection.query(`SELECT * FROM "BackendRest"."Color" where id= ${id}`, (error, results) => {
            error ?
                res.status(500).send({
                    error_code: 'color_retrieved_failed',
                    error_description: 'Color retrieved failed',
                    details: error,
                })
                :
                res.status(200).send({
                    success_code: 'color_retrieved_success',
                    success_description: 'Color retrieved successfully',
                    details: results.rows,
                });
        });
    }
    create(req, res) {
        const color = req.body;
        const insertQuery = `INSERT INTO "BackendRest"."Color" 
                ( name, code)
                 VALUES ( '${color.name}' , '${color.code}'  );`
        postgressConnection.query(insertQuery, (error, results) => {
            error ?
                res.status(500).send({
                    error_code: 'color_add_failed',
                    error_description: 'Color Add failed',
                    details: error,
                })
                :
                res.status(200).send({
                    success_code: 'color_added_success',
                    success_description: 'Color added successfully',
                });
        })
    }

    update(req, res) {
        const id = req.params.id;
        const color = req.body;

        const updateQuery = `UPDATE "BackendRest"."Color"  SET 
                name = '${color.name}',
                code = '${color.code}'
                WHERE id = ${id}`;

        postgressConnection.query(updateQuery, (error, results) => {
            error ?
                res.status(500).send({
                    error_code: 'color_update_failed',
                    error_description: 'Color Update failed',
                    details: error,
                })
                :
                res.status(200).send({
                    success_code: 'color_update_success',
                    success_description: 'Color Update successfully'
                });
        })
    }
    delete(req, res) {
        const id = req.params.id;
        const deleteQuery = `DELETE FROM "BackendRest"."Color" where id = ${id}`;
        postgressConnection.query(deleteQuery, (error, results) => {
            error ?
                res.status(500).send({
                    error_code: 'color_delete_failed',
                    error_description: 'Color Delete failed',
                    details: error,
                })
                :
                res.status(200).send({
                    success_code: 'color_delete_success',
                    success_description: 'Color Delete successfully'
                });
        })
    }
}


const colorController = new ColorController();
export default colorController;
