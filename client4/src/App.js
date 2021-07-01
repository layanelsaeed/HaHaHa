


import logo from './logo.svg';
import {Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'; 
import Student from './components/showStudent/showStudent'; 
import Create from './components/applyUni/apply.js'; 
import './App.css';
import useStyles from './styles'; 

function App() {
  const classes = useStyles(); 
  return (
    <div className="App">
      <Container maxWidth = "lg"> 
        <AppBar className= {classes.appBar} position="static" color = "inherit">
          <Typography className= {classes.heading} variant="h2" align = "center"> Admission Application</Typography>
      </AppBar>
      <Grow in>
        <Container>
          

            <Grid item xs={20} sm={15}>
            <AppBar className = {classes.appBar} position="static"  align = "center" color = "inherit"> 
              < Create Student />
              </AppBar>
            </Grid>


          
          </Container> 

      </Grow>
        </Container> 
      
    </div> 
  );
}

export default App;