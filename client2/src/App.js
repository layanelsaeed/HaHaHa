import React from 'react';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Home from './Components/Home';
import Todos from './Components/Todo';
import Register from './Components/Register';
import Admin  from './Components/Admin';
import Student  from './Components/Student';
import TA  from './Components/TA';
import PrivateRoute from './hocs/PrivateRoute';
import UnPrivateRoute from './hocs/UnPrivateRoute';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar/>
      <Route exact path="/" component={Home}/>
      <UnPrivateRoute path="/login" component={Login}/>
      <UnPrivateRoute path="/register" component={Register}/>
      <PrivateRoute path="/todos" roles={["TA","admin","Student"]} component={Todos}/>
      <PrivateRoute path="/admin" roles={["admin"]} component={Admin}/>
      <PrivateRoute path="/TA" roles={["TA"]} component={TA}/>
      <PrivateRoute path="/Student" roles={["Student"]} component={Student}/>

    </Router>
  );
}

export default App;