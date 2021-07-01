import  express, { request }  from 'express'
import { getStudents, createStudents, deleteStudent } from '../controllers/apply.js';
import student from '../models/apply.js';

const router = express.Router();

router.get('/', getStudents);
router.post('/', createStudents);
router.delete('/:id', deleteStudent);

export default router;