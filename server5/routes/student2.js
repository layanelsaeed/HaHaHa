import  express, { request }  from 'express'
import mongoose from 'mongoose';
import { getStudents2, createStudents2, deleteStudent2 } from '../controllers/student2.js';





import student2 from '../models/student2.js';

const router2 = express.Router();

router2.post('/', createStudents2);
router2.get('/', getStudents2);
router2.delete('/:id', deleteStudent2);

export default router2;