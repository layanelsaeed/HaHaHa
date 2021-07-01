import logo from './logo.svg';
import {Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'; 
import Grade from './components/showGrade/showGrade'; 
import Create from './components/createGrade/createGrade'; 
import View from './components/viewGrade/viewGrade';
import './App.css';
import useStyles from './styles'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const classes = useStyles(); 
  return (
    <div className="App">
      <img src="/images/Glogo.jpg" alt="" />
      <Router>
        <Switch>
          <Route path="/viewGrade" component={View} />
          <Route path='/createGrade' render={props =>
            <div>
              <Create />
              <Grade />
            </div>
          } />

          </Switch>

        <Route path="VSschedule">


      <Container maxWidth = "lg"> 
        <AppBar className= {classes.appBar} position="static" color = "inherit">
          <Typography className= {classes.heading} variant="h2" align = "center"> Grades Create & Show</Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container jusify = "space-between" allignItems="stretch">
            <Grid item xs={12} sm={7}>
              <AppBar className = {classes.appBar} position="static" color = "inherit"> 
              <Grade />
              </AppBar>
            </Grid>

            <Grid item xs={12} sm={4}>
            <AppBar className = {classes.appBar} position="static" color = "inherit"> 
              < Create Grade />
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
