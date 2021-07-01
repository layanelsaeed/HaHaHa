import CourseData from '../models/course.js'; 

export const getCourse= async (req,res) => {
    try {
        const allCourses= await CourseData.find(); 

        res.status(200).json(allCourses); //Ok
    } catch (error) {
        res.status(404).json({message: error.message}) //Not Founnd
    }
}

export const addCourse= async (req,res) => {
    const course= req.body; 

    const newCourse = new CourseData(course); 

    try {
        await newCourse.save(); 
        res.status(201).json(newCourse); //Created
    
    } catch (error) {
        res.status(409).json({message: error.message}) //Conflict 
    }

} 

export const deleteCourse= async (req,res) => {
    const id= req.params.id; 


    try {
       await CourseData.findByIdAndRemove(id).exec(); 
       res.send('Successfully deleted!')
    
    } catch (error) {
        console.log(error); 
        
    }
}
export const updateCourse = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
      }
    
      const id = req.params.id;
    
      course.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
          if (!data) {
            res.status(404).send({
              message: `Cannot update Course with id=${id}. Maybe course was not found!`
            });
          } else res.send({ message: "course was updated successfully." });
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating course with id=" + id
          });
        });
    
};

