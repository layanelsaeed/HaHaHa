import  express, { request }  from 'express'
import { getStudents, createStudents, deleteStudent } from '../controllers/grade1.js';
import student from '../models/grade1.js';

const router = express.Router();

router.get('/', getStudents);
router.post('/', createStudents);
router.delete('/:id', deleteStudent);

export default router;