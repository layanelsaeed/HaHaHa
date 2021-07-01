import StudentData from '../models/grade1.js'; 

export const getStudents= async (req,res) => {
    try {
        const allStudents= await StudentData.find(); 

        res.status(200).json(allStudents); //Ok
    } catch (error) {
        res.status(404).json({message: error.message}) //Not Founnd
    }
}

export const createStudents= async (req,res) => {
    const student= req.body; 

    const newStudent = new StudentData(student); 

    try {
        await newStudent.save(); 
        res.status(201).json(newStudent); //Created
    
    } catch (error) {
        res.status(409).json({message: error.message}) //Conflict 
    }

} 

export const deleteStudent= async (req,res) => {
    const id= req.params.id; 


    try {
       await StudentData.findByIdAndRemove(id).exec(); 
       res.send('Successfully deleted!')
    
    } catch (error) {
        console.log(error); 
        
    }

}
