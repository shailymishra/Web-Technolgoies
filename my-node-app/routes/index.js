import express from 'express';
import TodoController from '../todoController/todos';
import StudentRoute from './student.route';
const companyController = require('../controller').company;
const router = express.Router();


router.get('/api/v1/todos', TodoController.getAllTodos);
router.get('/api/v1/todos/:id', TodoController.getTodo);
router.post('/api/v1/todos', TodoController.createTodo);
router.put('/api/v1/todos/:id', TodoController.updateTodo);
router.delete('/api/v1/todos/:id', TodoController.deleteTodo);

router.post('/api/company',companyController.create)

router.use('/api/student',StudentRoute)

export default router;