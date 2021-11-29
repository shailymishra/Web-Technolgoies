import express from 'express';
const router = express.Router();

import showController from '../controller/show.controller';

router.get('/', showController.findAll);
router.get('/:id', showController.findById);
router.post('/', showController.create);
router.put('/:id', showController.update);
router.delete('/:id', showController.delete);

export default router;

