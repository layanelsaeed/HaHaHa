import mongoose from 'mongoose'; 

const studentSchema = mongoose.Schema({
    IdNo: Number,
    grade: String,
    updatedgrade: String  
       
    
    
}); 

const student= mongoose.model('student', studentSchema);
export default student;