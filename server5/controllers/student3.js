import StudentData3 from '../models/student3.js'; 

export const getStudents3= async (req,res) => {
    try {
        const allStudents3= await StudentData3.find(); 

        res.status(200).json(allStudents3); //Ok
    } catch (error) {
        res.status(404).json({message: error.message}) //Not Founnd
    }
}

export const createStudents3= async (req,res) => {
    const student3= req.body; 

    const newStudent3 = new StudentData3(student3); 

    try {
        await newStudent3.save(); 
        res.status(201).json(newStudent3); //Created
    
    } catch (error) {
        res.status(409).json({message: error.message}) //Conflict 
    }

} 

export const deleteStudent3= async (req,res) => {
    const id= req.params.id; 


    try {
       await StudentData3.findByIdAndRemove(id).exec(); 
       res.send('Successfully deleted!')
    
    } catch (error) {
        console.log(error); 
        
    }

}