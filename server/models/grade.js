import mongoose from 'mongoose'; 

const gradeSchema = mongoose.Schema({
    courseId: Number,
    courseName: String, 
    letterGrade: String, 
}); 

const grade= mongoose.model('grade', gradeSchema);
export default grade; 