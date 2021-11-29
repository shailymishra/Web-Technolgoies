
const db = require('../config/db.sequelize.config');
const postgresdb = db.postgresdb;
class GameController {
    findAll(req, res) {
        postgresdb.sequelize.query(`SELECT * FROM "BackendRest"."Games"`, { type: postgresdb.sequelize.QueryTypes.SELECT })
            .then(rows => {
                res.status(200).send({
                    success_code: 'games_retrieved_success',
                    success_description: 'Games retrieved successfully',
                    details: rows,
                });
            })
    }
    findById(req, res) {
        const id = req.params.id;
        postgresdb.sequelize.query(`SELECT * FROM "BackendRest"."Games" where id= ${id}`, { type: postgresdb.sequelize.QueryTypes.SELECT })
            .then(row => {
                res.status(200).send({
                    success_code: 'games_retrieved_success',
                    success_description: 'Games retrieved successfully',
                    details: row,
                });
            })
    }
    create(req, res) {
        const game = req.body;
        const insertQuery = `INSERT INTO "BackendRest"."Games" (name,type) VALUES ('${game.name}', '${game.type}')`;
        postgresdb.sequelize.query(insertQuery, { type: postgresdb.sequelize.QueryTypes.INSERT })
            .spread((insertRowId) => {
                res.status(200).send({
                    success_code: 'game_added_success',
                    success_description: 'Game added successfully',
                    details: insertRowId,
                });
            })
    }
    update(req, res) {
        const id = req.params.id;
        const game = req.body;

        const updateQuery = `UPDATE "BackendRest"."Games"  SET 
        name = '${game.name}',
        type = '${game.type}'
        WHERE id = ${id}`;

        postgresdb.sequelize.query(updateQuery, { type: postgresdb.sequelize.QueryTypes.UPDATE })
            .spread(() => {
                res.status(200).send({
                    success_code: 'game_updated_success',
                    success_description: 'Game updated successfully',
                });
            })
    }
    delete(req, res) {
        const id = req.params.id;
        const deleteQuery = `DELETE FROM "BackendRest"."Games" where id = ${id}`;
        postgresdb.sequelize.query(deleteQuery)
            .spread(() => {
                res.status(200).send({
                    success_code: 'game_delete_success',
                    success_description: 'Game deleted successfully',
                });
            })
    }
}

const gameController = new GameController();
export default gameController;

