import express from 'express';
const router = express.Router();

import bookController from '../controller/book.controller';

router.get('/', bookController.findAll);
router.get('/:id', bookController.findById);
router.post('/', bookController.create);
router.put('/:id', bookController.update);
router.delete('/:id', bookController.delete);

export default router;

