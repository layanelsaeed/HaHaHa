import  express, { request }  from 'express'
import { getGrades, createGrades, deleteGrade } from '../controllers/grade.js';
import grade from '../models/grade.js';

const router = express.Router();

router.get('/', getGrades);
router.post('/', createGrades);
router.delete('/:id', deleteGrade);

export default router;