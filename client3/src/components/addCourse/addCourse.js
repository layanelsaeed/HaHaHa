import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
//import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';
//import EditIcon from '@material-ui/icons/Edit';
import axios from 'axios'; 
//import { updateCourse } from '../../../../server/controllers/student';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  },
}));

export default function AddCourse() {
  const classes = useStyles();

  //Update the states 
  const [course, setCourse]= useState({
      courseName: '',
      CourseId: '' ,  
      creditHours: ''
      }); 
    const updateCourse = (id) => {
       axios.put(`http://localhost:5000/courses/ ${id}`).then( () =>{
           window.location.replace(updateCourse);
            
     })
   }

      
   const addCourse = () => {
       axios.post('http://localhost:5000/courses', course).then( () =>{
           window.location.reload(false);
       })
       

   }
  
   


   
   


    return (
      <>
      <h2> Add Course</h2>
    <form className={classes.root} noValidate autoComplete="off">
    <TextField id="outlined-basic" label="Course Name" variant="outlined" value = {course.courseName} onChange= {(event) => {
          setCourse({ ...course, courseName :event.target.value}) 
          }}/>
      <TextField id="outlined-basic" label="Course Id" variant="outlined" value = {course.CourseId} onChange= {(event) => {
          setCourse({ ...course, CourseId :event.target.value}) 
          }}/>
      <TextField id="outlined-basic" label="Credit Hours" variant="outlined" value = {course.creditHours} onChange= {(event) => {
          setCourse({ ...course, creditHours :event.target.value}) 
          }}/>
      <Button variant="contained" color="primary" onClick ={addCourse}> 
        Add 
      </Button>
      <Button variant="contained" color="primary" onClick ={updateCourse}> 
        Update
      </Button>
      
      
           
     
    </form>
    </>
  );
}