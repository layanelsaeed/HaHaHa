import StudentData2 from '../models/student2.js'; 

export const getStudents2= async (req,res) => {
    try {
        const allStudents2= await StudentData2.find(); 

        res.status(200).json(allStudents2); //Ok
    } catch (error) {
        res.status(404).json({message: error.message}) //Not Founnd
    }
}

export const createStudents2= async (req,res) => {
    const student2= req.body; 

    const newStudent2 = new StudentData2(student2); 

    try {
        await newStudent2.save(); 
        res.status(201).json(newStudent2); //Created
    
    } catch (error) {
        res.status(409).json({message: error.message}) //Conflict 
    }

} 

export const deleteStudent2= async (req,res) => {
    const id= req.params.id; 


    try {
       await StudentData2.findByIdAndRemove(id).exec(); 
       res.send('Successfully deleted!')
    
    } catch (error) {
        console.log(error); 
        
    }

}