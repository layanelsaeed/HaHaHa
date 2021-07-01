import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import DeleteIcon from '@material-ui/icons/Delete'; 



const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


export default function ShowStudent2() {
  const classes = useStyles();

  const [studentsList2, setStudentList2] = useState([])

  const deleteStudent2= (id) => {
    axios.delete(`http://localhost:5000/students/${id}`).then( () =>{
      window.location.reload(false); 
    })
  }
  useEffect(() =>{
    axios.get('http://localhost:5000/students').then( (allStudents2) => {
      setStudentList2(allStudents2.data); 
    })
  }, [])

  return (
      <>
      <h2>Show Tutorial 2</h2>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
        <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Id Number</TableCell>
            <TableCell align="right">Grade</TableCell>
            <TableCell align="right">TutorialGroup</TableCell>
            <TableCell align="right">TutorialCode</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {studentsList2.map((student2,key) => (
            <TableRow key={key}>
              <TableCell component="th" scope="row">
                {student2.studentName}
              </TableCell>
              <TableCell align="right">{student2.IdNo}</TableCell>
              <TableCell align="right">{student2.grade}</TableCell>
              <TableCell align="right">{student2.tutorialGroup}</TableCell>
              <TableCell align="right">{student2.tutorialCode}</TableCell>
              <TableCell align="right">
           <IconButton aria-label="delete" className={classes.margin} onClick ={() => deleteStudent2(student2._id)}> 
          <DeleteIcon fontSize="small" />
        </IconButton> 
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </> 
  );
}










































