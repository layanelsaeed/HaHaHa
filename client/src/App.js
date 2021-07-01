import logo from './logo.svg';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Student from './components/showSchedule/showSchedule.js';
import Create from './components/createSchedule/createSchedule.js';
import View from './components/viewSchedule/viewSchedule.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import useStyles from './styles';

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <img src="/images/Glogo.jpg" alt="" />
      <Router>
        <Switch>
          <Route path="/viewSchedule" component={View} />
          <Route path='/showStudent' render={props =>
            <div>
              <Create />
              <Student />
            </div>
          } />
        </Switch>

        <Route path="VSschedule">
          <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
              <Typography className={classes.heading} variant="h2" align="center"> Schedule create</Typography>
            </AppBar>
            <Grow in>
              <Container>
                <Grid container jusify="space-between" allignItems="stretch">
                  <Grid item xs={12} sm={7}>
                    <AppBar className={classes.appBar} position="static" color="inherit">
                      <Student />
                    </AppBar>
                  </Grid>

                  <Grid item xs={12} sm={4}>
                    <AppBar className={classes.appBar} position="static" color="inherit">
                      < Create Student />
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
