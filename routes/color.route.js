import express from 'express';
const router = express.Router();

import colorController from '../controller/color.controller';

router.get('/', colorController.findAll);
router.get('/:id', colorController.findById);
router.post('/', colorController.create);
router.put('/:id', colorController.update);
router.delete('/:id', colorController.delete);

export default router;

