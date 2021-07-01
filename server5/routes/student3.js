import  express, { request }  from 'express'
import mongoose from 'mongoose';
import { getStudents3, createStudents3, deleteStudent3 } from '../controllers/student3.js';

import student from '../models/student.js';
import student1 from '../models/student1.js'
import student2 from '../models/student2.js';
import student3 from '../models/student3.js';

const router3 = express.Router();

router3.get('/', getStudents3);
router3.post('/', createStudents3);
router3.delete('/:id', deleteStudent3);

export default router3;