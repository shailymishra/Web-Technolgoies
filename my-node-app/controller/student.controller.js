const db = require('../config/db.config.js');
const students = db.students;

// Post a Customer
exports.create = (req, res) => {
    // Save to MySQL database
    students.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        gender: req.body.gender

    }).then(student => {
        // Send created customer to client
        res.send(student);
    });
};

// FETCH all Customers
exports.findAll = (req, res) => {
    students.findAll().then(studentlist => {
        // Send all customers to Client
        res.send(studentlist);
    });
};

// Find a Customer by Id
exports.findById = (req, res) => {
    students.findById(req.params.id).then(customer => {
        res.send(customer);
    })
};

// Update a Customer
exports.update = (req, res) => {
    const id = req.params.id;
    students.update({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        gender: req.body.gender
    },
        { where: { id: req.params.id } }
    ).then(() => {
        res.status(200).send("updated successfully a customer with id = " + id);
    });
};

// Delete a Customer by Id
exports.delete = (req, res) => {
    const id = req.params.id;
    students.destroy({
        where: { id: id }
    }).then(() => {
        res.status(200).send('deleted successfully a customer with id = ' + id);
    });
};