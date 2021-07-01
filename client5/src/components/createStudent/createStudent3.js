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

export default function CreateStudent3() {
  const classes = useStyles();

  //Update the states 
  const [student3, setStudent3]= useState({
      IdNo: '', 
      studentName: '', 
      grade: '', 
      tutorialGroup: ''
      }); 

   const createStudent3 = () => {
       axios.post('http://localhost:5000/students', student3).then( () =>{
           window.location.reload(false);
       })

   }

  return (
      <>
      <h2> Create Student 3</h2>
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Id number" variant="outlined" value = {student3.IdNo} onChange= {(event) => {
          setStudent3({ ...student3, IdNo :event.target.value}) 
          }}/>
      <TextField id="outlined-basic" label="Name" variant="outlined" value = {student3.studentName} onChange= {(event) => {
          setStudent3({ ...student3, studentName :event.target.value}) 
          }}/>
      <TextField id="outlined-basic" label="Grade" variant="outlined" value = {student3.grade} onChange= {(event) => {
          setStudent3({ ...student3, grade :event.target.value}) 
          }}/>
      <TextField id="outlined-basic" label="Tutorial Group" variant="outlined" value = {student3.tutorialGroup} onChange= {(event) => {
          setStudent3({ ...student3, tutorialGroup :event.target.value}) 
          }}/>
        <TextField id="outlined-basic" label="Tutorial Code" variant="outlined" value = {student3.tutorialCode} onChange= {(event) => {
        setStudent3({ ...student3, tutorialCode :event.target.value}) 
        }}/>
      <Button variant="contained" color="primary" onClick ={createStudent3}> 
        Create Student 3
      </Button>
    </form>
    </>
  );
}