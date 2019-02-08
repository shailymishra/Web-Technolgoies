import express from 'express';
const router = express.Router();

import employeeController from '../controller/employee.controller';

router.get('/', employeeController.findAll);
router.get('/:id', employeeController.findById);
router.post('/', employeeController.create);
router.put('/:id', employeeController.update);
router.delete('/:id', employeeController.delete);

export default router;

