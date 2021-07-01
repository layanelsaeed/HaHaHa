import mongoose from 'mongoose'; 

const studentSchema = mongoose.Schema({
    






    
    firstName: String,
    middleName: String,
    lastName: String,
    email: String,
    pwd:String,
    conPwd:String,
    birthDate:String,
    Nationality:String,
    City:String,
    buildingNo: Number,
    streetName:String,
    major:String  
       
    
    
}); 

const student= mongoose.model('student', studentSchema);
export default student;