import logo from './logo.svg';
import {Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'; 
import Student from './components/showStudent/showStudent'; 
import Student1 from './components/showStudent/showStudent1';
import Student2 from './components/showStudent/showStudent2';
import Student3 from './components/showStudent/showStudent3';


import Create from './components/createStudent/createStudent'; 

import './App.css';
import useStyles from './styles'; 
import CreateStudent from './components/createStudent/createStudent';
import CreateStudent1 from './components/createStudent/createStudent1';
import CreateStudent2 from './components/createStudent/createStudent2';
import CreateStudent3 from './components/createStudent/createStudent3';
import ShowStudent from './components/showStudent/showStudent';
import ShowStudent1 from './components/showStudent/showStudent1';
import ShowStudent2 from './components/showStudent/showStudent2';
import ShowStudent3 from './components/showStudent/showStudent3';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';


function App() {
  const classes = useStyles(); 
  return (
    
    <div className="App">

      <Router>
      


      

      <Container maxWidth = "lg"> 
        <AppBar className= {classes.appBar} position="static" color = "inherit">
          <Typography className= {classes.heading} variant="h2" align = "center"> Students Create & Show</Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container jusify = "space-between" allignItems="stretch">
            <Grid item xs={12} sm={7}>
              <AppBar className = {classes.appBar} position="static" color = "inherit"> 
              <ShowStudent />
              

              </AppBar>
            </Grid>

            <Grid item xs={12} sm={4}>
            <AppBar className = {classes.appBar} position="static" color = "inherit"> 
              < CreateStudent />
              </AppBar>
            </Grid>
          </Grid>
          </Container> 

      </Grow>
        </Container> 



</Router>
      </div>





    
  );
}

export default App;