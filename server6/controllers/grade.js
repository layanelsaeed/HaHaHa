import GradeData from '../models/grade.js'; 

export const getGrades= async (req,res) => {
    try {
        const allGrades= await GradeData.find(); 

        res.status(200).json(allGrades); //Ok
    } catch (error) {
        res.status(404).json({message: error.message}) //Not Founnd
    }
}

export const createGrades= async (req,res) => {
    const grade= req.body; 

    const newGrade = new GradeData(grade); 

    try {
        await newGrade.save(); 
        res.status(201).json(newGrade); //Created
    
    } catch (error) {
        res.status(409).json({message: error.message}) //Conflict 
    }

} 

export const deleteGrade= async (req,res) => {
    const id= req.params.id; 


    try {
       await GradeData.findByIdAndRemove(id).exec(); 
       res.send('Successfully deleted!')
    
    } catch (error) {
        console.log(error); 
        
    }

}    