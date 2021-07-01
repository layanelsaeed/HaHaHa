import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios'; 

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function CreateGrade() {
  const classes = useStyles();

  //Update the states 
  const [grade, setGrade]= useState({
      courseId: '', 
      courseName: '', 
      letterGrade: ''
      }); 

   const createGrade = () => {
       axios.post('http://localhost:5000/grades', grade).then( () =>{
           window.location.reload(false);
       })

   }

  return (
      <>
      <h2> Create Grade</h2>
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Course Id" variant="outlined" value = {grade.courseId} onChange= {(event) => {
          setGrade({ ...grade, courseId :event.target.value}) 
          }}/>
      <TextField id="outlined-basic" label="Course Name" variant="outlined" value = {grade.courseName} onChange= {(event) => {
          setGrade({ ...grade, courseName :event.target.value}) 
          }}/>
      <TextField id="outlined-basic" label="Letter Grade" variant="outlined" value = {grade.letterGrade} onChange= {(event) => {
          setGrade({ ...grade, letterGrade :event.target.value}) 
          }}/>
      <Button variant="contained" color="primary" onClick ={createGrade}> 
        Add 
      </Button>
    </form>
    </>
  );
}