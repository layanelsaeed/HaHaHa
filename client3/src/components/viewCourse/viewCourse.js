import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import axios from 'axios';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


export default function ViewCourse() {
  const classes = useStyles();

  const [coursesList, setCoursesList] = useState([])


  useEffect(() =>{
    axios.get('http://localhost:5000/courses').then( (allCourses) => {
      setCoursesList(allCourses.data); 
    })
  }, [])
 
  return (
      <>
      <h2>All Courses</h2>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell> Course Name</TableCell>
            <TableCell align="right">Course Id</TableCell>
            <TableCell align="right">Credit Hours</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {coursesList.map((course,key) => (
            <TableRow key={key}>
              <TableCell component="th" scope="row">
                {course.courseName}
              </TableCell>
              <TableCell align="right">{course.CourseId}</TableCell>
              <TableCell align="right">{course.creditHours}</TableCell>
              <TableCell align="right">
           
        
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </> 
  );
}