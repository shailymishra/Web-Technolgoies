import express from 'express';
import students from './student.route';

const router = express.Router();

router.use('/students', students);

export default router;