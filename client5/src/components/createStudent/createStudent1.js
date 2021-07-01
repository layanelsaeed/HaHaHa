
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

export default function CreateStudent1() {
  const classes = useStyles();

  //Update the states 
  const [student1, setStudent1]= useState({
      IdNo: '', 
      studentName: '', 
      grade: '', 
      tutorialGroup: ''
      }); 

   const createStudent1 = () => {
       axios.post('http://localhost:5000/students', student1).then( () =>{
           window.location.reload(false);
       })

   }

  return (
      <>
      <h2> Create Student 1</h2>
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Id number" variant="outlined" value = {student1.IdNo} onChange= {(event) => {
          setStudent1({ ...student1, IdNo :event.target.value}) 
          }}/>
      <TextField id="outlined-basic" label="Name" variant="outlined" value = {student1.studentName} onChange= {(event) => {
          setStudent1({ ...student1, studentName :event.target.value}) 
          }}/>
      <TextField id="outlined-basic" label="Grade" variant="outlined" value = {student1.grade} onChange= {(event) => {
          setStudent1({ ...student1, grade :event.target.value}) 
          }}/>
      <TextField id="outlined-basic" label="Tutorial Group" variant="outlined" value = {student1.tutorialGroup} onChange= {(event) => {
          setStudent1({ ...student1, tutorialGroup :event.target.value}) 
          }}/>
          <TextField id="outlined-basic" label="Tutorial Code" variant="outlined" value = {student1.tutorialCode} onChange= {(event) => {
        setStudent1({ ...student1, tutorialCode :event.target.value}) 
        }}/>
      <Button variant="contained" color="primary" onClick ={createStudent1}> 
        Create Student 1
      </Button>
    </form>
    </>
  );
}