import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import axios from 'axios';
import IconButton from '@material-ui/core/IconButton'; 
import DeleteIcon from '@material-ui/icons/Delete'; 
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


export default function ShowCourse() {
  const classes = useStyles();

  const [coursesList, setCoursesList] = useState([])

  const deleteCourse= (id) => {
    axios.delete(`http://localhost:5000/courses/${id}`).then( () =>{
      window.location.reload(false); 
    })
  }
  const updateCourse = (courseId) => {
    axios.put(`http://localhost:5000/courses/${courseId}`).then( () =>{
        window.location.replace(updateCourse);
        
 })
}

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
            <TableCell align="right">Action</TableCell>
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
           <IconButton aria-label="delete" className={classes.margin} onClick ={() => deleteCourse(course._id)}> 
          <DeleteIcon fontSize="small" />
        </IconButton> 
        <Fab color="secondary" aria-label="edit"  className={classes.margin} onClick ={() => updateCourse(course._id)}>
  <EditIcon size="small" /> 
</Fab>
        
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </> 
  );
}