import mongoose from 'mongoose'; 

const studentSchema = mongoose.Schema({
    IdNo: Number,
    studentName: String, 
    grade: String,
    tutorialCode: Number, 
    tutorialGroup: {
        type: String, 
        default: 'A'
    },
    
}); 

const student= mongoose.model('student', studentSchema);
export default student; 

