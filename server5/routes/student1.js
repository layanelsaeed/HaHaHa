import  express, { request }  from 'express'
import mongoose from 'mongoose';
import { getStudents1, createStudents1, deleteStudent1 } from '../controllers/student1.js';





import student1 from '../models/student1.js';

const router1 = express.Router();

router1.post('/', createStudents1);
router1.get('/', getStudents1);
router1.delete('/:id', deleteStudent1);

export default router1;

/*router1.post('/:tutorialCode', (req,res,next)=>{

    try{
        x= (req.params.tutorialCode) 
        student1.find({tutorialCode: x})

    
    student1.find({tutorialCode: x})   
}



    catch(err) {
        console.log(err)
        res.status(500).json({

            error:err
        })
    }
})*/



