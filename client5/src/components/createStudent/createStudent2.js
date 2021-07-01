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

export default function CreateStudent2() {
  const classes = useStyles();

  //Update the states 
  const [student2, setStudent2]= useState({
      IdNo: '', 
      studentName: '', 
      grade: '', 
      tutorialGroup: ''
      }); 

   const createStudent2 = () => {
       axios.post('http://localhost:5000/students', student2).then( () =>{
           window.location.reload(false);
       })

   }

  return (
      <>
      <h2> Create Student 2</h2>
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Id number" variant="outlined" value = {student2.IdNo} onChange= {(event) => {
          setStudent2({ ...student2, IdNo :event.target.value}) 
          }}/>
      <TextField id="outlined-basic" label="Name" variant="outlined" value = {student2.studentName} onChange= {(event) => {
          setStudent2({ ...student2, studentName :event.target.value}) 
          }}/>
      <TextField id="outlined-basic" label="Grade" variant="outlined" value = {student2.grade} onChange= {(event) => {
          setStudent2({ ...student2, grade :event.target.value}) 
          }}/>
      <TextField id="outlined-basic" label="Tutorial Group" variant="outlined" value = {student2.tutorialGroup} onChange= {(event) => {
          setStudent2({ ...student2, tutorialGroup :event.target.value}) 
          }}/>
          <TextField id="outlined-basic" label="Tutorial Code" variant="outlined" value = {student2.tutorialCode} onChange= {(event) => {
        setStudent2({ ...student2, tutorialCode :event.target.value}) 
        }}/>
      <Button variant="contained" color="primary" onClick ={createStudent2}> 
        Create Student 2
      </Button>
    </form>
    </>
  );
}