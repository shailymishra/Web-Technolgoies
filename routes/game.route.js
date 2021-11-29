import express from 'express';
const router = express.Router();

import gameController from '../controller/game.comtroller';

router.get('/', gameController.findAll);
router.get('/:id', gameController.findById);
router.post('/', gameController.create);
router.put('/:id', gameController.update);
router.delete('/:id', gameController.delete);

export default router;

