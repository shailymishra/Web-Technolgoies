import express from 'express';
import students from './api/student';

const router = express.Router();

router.use('/students', students);

export default router;