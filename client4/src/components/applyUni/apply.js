import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios'; 

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
      width: '130ch',
    },
  },
}));

export default function CreateStudent() {
  const classes = useStyles();

  //Update the states 
  const [student, setStudent]= useState({
      
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    pwd:'',
    conPwd:'',
    birthDate:'',
    Nationality:'',
    City:'',
    buildingNo: '',
    streetName:''  
       
      }); 

   const createStudent = () => {
       axios.post('http://localhost:5000/applys', student).then( () =>{
           window.location.reload(false);
       })

   }

  return (
      <>
      <h2> Create Account</h2>
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="First Name" variant="outlined" value = {student.firstName} onChange= {(event) => {
          setStudent({ ...student, firstName :event.target.value}) 
          }}/>
      <TextField id="outlined-basic" label="Middle Name" variant="outlined" value = {student.middleName} onChange= {(event) => {
          setStudent({ ...student, middleName :event.target.value}) 
          }}/>
      <TextField id="outlined-basic" label="Last Name" variant="outlined" value = {student.lastName} onChange= {(event) => {
          setStudent({ ...student, lastName :event.target.value}) 
          }}/>
      <TextField id="outlined-basic" label="Email" variant="outlined" value = {student.email} onChange= {(event) => {
          setStudent({ ...student, email :event.target.value}) 
          }}/>
          <TextField id="outlined-basic" label="Password" variant="outlined" value = {student.pwd} onChange= {(event) => {
          setStudent({ ...student, pwd :event.target.value}) 
          }}/>
          <TextField id="outlined-basic" label="Confirm Password" variant="outlined" value = {student.conPwd} onChange= {(event) => {
          setStudent({ ...student, conPwd :event.target.value}) 
          }}/>
          <TextField id="outlined-basic" label="Birth Date" variant="outlined" value = {student.birthDate} onChange= {(event) => {
          setStudent({ ...student, birthDate :event.target.value}) 
          }}/>
          <TextField id="outlined-basic" label="Nationality" variant="outlined" value = {student.Nationality} onChange= {(event) => {
          setStudent({ ...student, Nationality :event.target.value}) 
          }}/>
          <TextField id="outlined-basic" label="City" variant="outlined" value = {student.City} onChange= {(event) => {
          setStudent({ ...student, City :event.target.value}) 
          }}/>
          <TextField id="outlined-basic" label="Building Number" variant="outlined" value = {student.buildingNo} onChange= {(event) => {
          setStudent({ ...student, buildingNo :event.target.value}) 
          }}/>
          <TextField id="outlined-basic" label="Street Name" variant="outlined" value = {student.streetname} onChange= {(event) => {
          setStudent({ ...student, streetName :event.target.value}) 
          }}/>
          <TextField id="outlined-basic" label="Major" variant="outlined" value = {student.major} onChange= {(event) => {
          setStudent({ ...student, major :event.target.value}) 
          }}/>

      <Button variant="contained" color="primary" onClick ={createStudent}> 
        Apply Now! 
      </Button>
    </form>
    </>
  );
}