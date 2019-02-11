import express from 'express';
import students from './student.route';
import show from './show.route';
import employee from './employee.route';
import song from './song.route';
import book from './book.route';

const router = express.Router();

router.use('/students', students);
router.use('/show', show);
router.use('/employee', employee);
router.use('/song', song);
router.use('/book',book);


export default router;