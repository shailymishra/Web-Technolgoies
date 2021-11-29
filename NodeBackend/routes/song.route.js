import express from 'express';
const router = express.Router();

import songController from '../controller/song.controller';

router.get('/', songController.findAll);
router.get('/:id', songController.findById);
router.post('/', songController.create);
router.put('/:id', songController.update);
router.delete('/:id', songController.delete);

export default router;

