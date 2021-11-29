import express from 'express';
const router = express.Router();

import countryController from '../controller/country.controller';

router.get('/', countryController.findAll);
router.get('/:id', countryController.findById);
router.post('/', countryController.create);
router.put('/:id', countryController.update);
router.delete('/:id', countryController.delete);

export default router;

