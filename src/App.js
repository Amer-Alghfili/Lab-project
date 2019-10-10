import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './auth/signin';
import Signup from './auth/signup';
import HomePage from './homePage/homePage';
import Patient from './patient/patient';


class App extends Component {
  render() {
    return (
      <main>
      <Switch>
        <Route path='/signup' component={Signup} />
        <Route path='/patient' component={Patient} />
        <Route path='/homePage' component={HomePage} />
        <Route path='/' exact component={Login} />  
        <Route render={()=><h1>Error</h1>} /> 
      </Switch>
    </main>
    );
  }
}

export default App;
