

import connection from '../config/db.createconnection.config';

class SongController {
        findAll(req, res) {
                connection.query(`SELECT * FROM Song`, (error, rows, fields) => {
                        error ?
                                res.status(500).send({
                                        error_code: 'song_retrieved_failed',
                                        error_description: 'Song retrieved failed',
                                        details: error,
                                })
                                :
                                res.status(200).send({
                                        success_code: 'song_retrieved_success',
                                        success_description: 'Song retrieved successfully',
                                        details: rows,
                                });
                });
        }
        findById(req, res) {
                const id = req.params.id;
                connection.query(`SELECT * FROM Song where id= ${id}`, (error, rows, fields) => {
                        error ?
                                res.status(500).send({
                                        error_code: 'song_retrieved_failed',
                                        error_description: 'Song retrieved failed',
                                        details: error,
                                })
                                :
                                res.status(200).send({
                                        success_code: 'song_retrieved_success',
                                        success_description: 'Song retrieved successfully',
                                        details: rows,
                                });
                });
        }
        create(req, res) {
                const song = req.body;
                console.log('song',song)
                const insertQuery = `INSERT INTO Song 
                ( name, year, genre, musican)
                 VALUES ( "${song.name}" , "${song.year}" , "${song.genre}" , "${song.musican}" );`
                connection.query(insertQuery, (error) => {
                        error ?
                                res.status(500).send({
                                        error_code: 'song_add_failed',
                                        error_description: 'Song Add failed',
                                        details: error,
                                })
                                :
                                res.status(200).send({
                                        success_code: 'song_added_success',
                                        success_description: 'Song added successfully',
                                });
                })

        }

        update(req, res) {
                const id = req.params.id;
                const employee = req.body;

                const updateQuery = `UPDATE Song SET 
                name = "${employee.name}",
                year = "${employee.year}",
                genre = "${employee.genre}",
                musican = "${employee.musican}"
                WHERE id = ${id}`;

                connection.query(updateQuery, (error, rows, fields) => {
                        error ?
                                res.status(500).send({
                                        error_code: 'song_update_failed',
                                        error_description: 'Song Update failed',
                                        details: error,
                                })
                                :
                                res.status(200).send({
                                        success_code: 'song_update_success',
                                        success_description: 'Song Update successfully',
                                        details: rows,
                                });
                })
        }
        delete(req, res) {
                const id = req.params.id;
                const deleteQuery = `DELETE FROM Song where id = "${id}"`;
                connection.query(deleteQuery, (error, rows, fields) => {
                        error ?
                                res.status(500).send({
                                        error_code: 'song_delete_failed',
                                        error_description: 'Song Delete failed',
                                        details: error,
                                })
                                :
                                res.status(200).send({
                                        success_code: 'song_delete_success',
                                        success_description: 'Song Delete successfully',
                                        details: rows,
                                });
                })
        }


}


const songController = new SongController();
export default songController;
