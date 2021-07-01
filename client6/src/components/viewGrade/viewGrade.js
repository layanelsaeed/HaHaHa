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
import IconButton from '@material-ui/core/IconButton'; 
import DeleteIcon from '@material-ui/icons/Delete'; 

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


export default function ShowGrade() {
  const classes = useStyles();

  const [gradesList, setGradeList] = useState([])

  const deleteGrade= (id) => {
    axios.delete(`http://localhost:5000/grades/${id}`).then( () =>{
      window.location.reload(false); 
    })
  }
  useEffect(() =>{
    axios.get('http://localhost:5000/grades').then( (allGrades) => {
      setGradeList(allGrades.data); 
    })
  }, [])

  return (
      <>
      <h2>All Grades</h2>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Course Id</TableCell>
            <TableCell align="right">Course Name</TableCell>
            <TableCell align="right">Letter Grade</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {gradesList.map((grade,key) => (
            <TableRow key={key}>
              <TableCell component="th" scope="row">
                {grade.courseId}
              </TableCell>
              <TableCell align="right">{grade.courseName}</TableCell>
              <TableCell align="right">{grade.letterGrade}</TableCell>
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