const db = require('../config/db.sequelize.config');
const show = db.show;

class ShowController {
    findAll(req, res) {
        return show.findAll().then(shows => {
            res.status(200).send({
                success_code: 'show_retrieved_success',
                success_description: 'Show retrieved successfully',
                details: shows,
            });
        });
    }
    findById(req, res) {
        return show.findById(req.params.id).then(show => {
            res.status(200).send({
                success_code: 'show_retrieved_success',
                success_description: 'Show retrieved successfully',
                details: show,
            });
        })
    }
    create(req, res) {
        return show.create(new Show(req.body)).then(show => {
            res.status(201).send({
                success_code: 'show_added_success',
                success_description: 'Show added successfully',
                details: show,
            });
        });
    }
    update(req, res) {
        const id = req.params.id;
        return show.update(new Show(req.body), { where: { id: id } }).then(() => {
           return show.findById(id).then(findshow => {
                res.status(201).send({
                    success_code: 'show_updated_success',
                    success_description: 'Show updated successfully',
                    details: findshow,
                });
            })
           
        });
    }
    delete(req, res) {
        const id = req.params.id;
        return show.destroy({ where: { id: id } }).then((show) => {
            res.status(201).send({
                success_code: 'show_deleted_success',
                success_description: 'Show deleted successfully',
                details: {},
            });
        });
    }
}

const showController = new ShowController();
export default showController;


function Show(requestbody) {
    this.name = requestbody.name;
    this.genre = requestbody.genre;
    this.website = requestbody.website;
    this.noOfSeasons = requestbody.noOfSeasons;
}