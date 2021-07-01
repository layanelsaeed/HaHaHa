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


export default function ViewSchedule() {
  const classes = useStyles();

  const [studentsList, setStudentList] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/students').then((allStudents) => {
      setStudentList(allStudents.data);
    })
  }, [])

  return (
    <>
      <h2>Schedule</h2>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Day</TableCell>
              <TableCell align="right">First period</TableCell>
              <TableCell align="right">Second Period</TableCell>
              <TableCell align="right">Third Period</TableCell>
              <TableCell align="right">Fourth Period</TableCell>
              <TableCell align="right">Fifth Period</TableCell>
              <TableCell align="right">Tutorial</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {studentsList.map((student, key) => (
              <TableRow key={key}>
                <TableCell component="th" scope="row">
                  {student.Day}
                </TableCell>
                <TableCell align="right">{student.FirstP}</TableCell>
                <TableCell align="right">{student.SecondP}</TableCell>
                <TableCell align="right">{student.ThirdP}</TableCell>
                <TableCell align="right">{student.FourthP}</TableCell>
                <TableCell align="right">{student.FifthP}</TableCell>
                <TableCell align="right">{student.tutorial}</TableCell>
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