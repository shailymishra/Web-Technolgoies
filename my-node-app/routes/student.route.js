import express from 'express';
const router = express.Router();



const students = require('../controller/student.controller');

// Create a new Customer
router.post('/', students.create);

// Retrieve all Customer
router.get('/', students.findAll);

// Retrieve a single Customer by Id
router.get('/api/student/:id', students.findById);

// Update a Customer with Id
router.put('/api/student/:id', students.update);

// Delete a Customer with Id
router.delete('/api/student/:id', students.delete);
module.exports = router;
