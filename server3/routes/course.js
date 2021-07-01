import  express, { request }  from 'express'
import { getCourse, addCourse, deleteCourse, updateCourse } from '../controllers/course.js';
import course from '../models/course.js';
import student from '../models/course.js';


const router = express.Router();

router.get('/', getCourse);
router.post('/', addCourse);
router.delete('/:id', deleteCourse);
router.put("/:id", updateCourse);


export default router;