import StudentData1 from '../models/student1.js'; 

export const getStudents1= async (req,res) => {
    try {
        const allStudents1= await StudentData1.find(); 

        res.status(200).json(allStudents1); //Ok
    } catch (error) {
        res.status(404).json({message: error.message}) //Not Founnd
    }
}

export const createStudents1= async (req,res) => {
    const student1= req.body; 

    const newStudent1 = new StudentData1(student1); 

    try {
        await newStudent1.save(); 
        res.status(201).json(newStudent1); //Created
    
    } catch (error) {
        res.status(409).json({message: error.message}) //Conflict 
    }

} 

export const deleteStudent1= async (req,res) => {
    const id= req.params.id; 


    try {
       await StudentData1.findByIdAndRemove(id).exec(); 
       res.send('Successfully deleted!')
    
    } catch (error) {
        console.log(error); 
        
    }

}