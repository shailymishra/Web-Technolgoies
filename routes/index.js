import express from 'express';
import students from './student.route';
import show from './show.route';
const router = express.Router();

router.use('/students', students);
router.use('/show',show);
export default router;