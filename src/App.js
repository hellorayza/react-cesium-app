import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import baseModule from './components/baseModule/baseModule';
import { HashRouter as Router, Route,Switch } from "react-router-dom";
class  App extends Component { 
  render() {
    return (
      <Router>
        <div style={{height:'100%',width:'100%'}}>
        <Switch>
          <Route exact path="/"   component={baseModule} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
