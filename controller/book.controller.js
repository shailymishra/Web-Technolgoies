const db = require('../config/db.sequelize.config');
const book = db.postgresdb.book;

class BookController {
    findAll(req, res) {
        return book.findAll().then(books => {
            res.status(200).send({
                success_code: 'book_retrieved_success',
                success_description: 'Book retrieved successfully',
                details: books,
            });
        });
    }
    findById(req, res) {
        return book.findByPk(req.params.id).then(book => {
            res.status(200).send({
                success_code: 'book_retrieved_success',
                success_description: 'Book retrieved successfully',
                details: book,
            });
        })
    }
    create(req, res) {
        return book.create(new Book(req.body)).then(book => {
            res.status(201).send({
                success_code: 'book_added_success',
                success_description: 'Book added successfully',
                details: book,
            });
        });
    }
    update(req, res) {
        const id = req.params.id;
        return book.update(new Book(req.body), { where: { id: id } }).then(() => {
            return book.findById(id).then(findbook => {
                res.status(201).send({
                    success_code: 'book_updated_success',
                    success_description: 'Book updated successfully',
                    details: findbook,
                });
            })

        });
    }
    delete(req, res) {
        const id = req.params.id;
        return book.destroy({ where: { id: id } }).then(() => {
            res.status(201).send({
                success_code: 'book_deleted_success',
                success_description: 'Book deleted successfully',
                details: {},
            });
        });
    }
}

const bookController = new BookController();
export default bookController;


function Book(requestbody) {
    this.name = requestbody.name;
    this.genre = requestbody.genre;
    this.author = requestbody.author;
}