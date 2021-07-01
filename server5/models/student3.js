import mongoose from 'mongoose'; 

const studentSchema3 = mongoose.Schema({
    IdNo: Number,
    studentName: String, 
    grade: String,
    tutorialCode: Number, 
    tutorialGroup: {
        type: String, 
        default: 'A'
    },
    
}); 

const student3= mongoose.model('student3', studentSchema3);
export default student3; 

