import mongoose from 'mongoose'; 

const studentSchema1 = mongoose.Schema({
    IdNo: Number,
    studentName: String, 
    grade: String,
    tutorialCode: Number, 
    tutorialGroup: {
        type: String, 
        default: 'A'
    },
    
}); 

const student1= mongoose.model('student1', studentSchema1);
export default student1; 

