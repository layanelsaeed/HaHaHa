import mongoose from 'mongoose'; 

const studentSchema2 = mongoose.Schema({
    IdNo: Number,
    studentName: String, 
    grade: String,
    tutorialCode: Number,
    tutorialGroup: {
        type: String, 
        default: 'A'
    },
    
}); 

const student2= mongoose.model('student2', studentSchema2);
export default student2; 

