import logo from './logo.svg';
import {Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'; 
import Course from './components/showCourse/showCourse.js'; 
import Create from './components/addCourse/addCourse.js'; 
import View from './components/viewCourse/viewCourse.js';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import useStyles from './styles'; 

function App() {
  const classes = useStyles(); 
  
  return (
    <div className="App">
      <img src="/images/Glogo.jpg" alt="" />
      <Router>
        <Switch>
          <Route path="/viewCourse" component={View} />
          <Route path='/addCourse' render={props =>
            <div>
              <Create />
              <Course />
            </div>
          } />
          
          </Switch>

        <Route path="VSschedule">
      <Container maxWidth = "lg"> 
        <AppBar className= {classes.appBar} position="static" color = "inherit">
          <Typography className= {classes.heading} variant="h2" align = "center"> Create & Update Courses</Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container jusify = "space-between" allignItems="stretch">
            <Grid item xs={12} sm={7}>
              <AppBar className = {classes.appBar} position="static" color = "inherit"> 
              <Course />
              </AppBar>
            </Grid>



            <Grid item xs={12} sm={4}>
            <AppBar className = {classes.appBar} position="static" color = "inherit"> 
              < Create Course />
              </AppBar>
            </Grid>


          </Grid>
          </Container> 

      </Grow>
        </Container> 
        </Route>
      </Router>
     
   
     
 
   </div> 
  
  );
}

export default App;
  