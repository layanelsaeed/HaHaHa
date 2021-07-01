import mongoose from 'mongoose'; 

const courseSchema = mongoose.Schema({
    courseName: String,
    CourseId: Number,
    creditHours: Number, 
    
    
}); 

const course= mongoose.model('course', courseSchema);
export default course;




