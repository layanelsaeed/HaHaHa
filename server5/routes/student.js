import  express, { request }  from 'express'
import mongoose from 'mongoose';
import { getStudents, createStudents, deleteStudent } from '../controllers/student.js';
import student from '../models/student.js';
import student1 from '../models/student1.js'
import student2 from '../models/student2.js';
import student3 from '../models/student3.js';
const router = express.Router();

router.get('/', getStudents);
router.post('/', createStudents);
router.delete('/:id', deleteStudent);

export default router;