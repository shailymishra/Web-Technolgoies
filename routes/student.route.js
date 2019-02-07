import express from 'express';
const router = express.Router();

import studentController from '../controller/student.controller';

router.get('/', studentController.findAll);
router.get('/:id', studentController.findById);
router.post('/', studentController.create);
router.put('/:id', studentController.update);
router.delete('/:id', studentController.delete);

export default router;

