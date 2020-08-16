import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Home from "./components/Home"
import Login from "./components/Login"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/login' render={(routerProps) => {
          return <Login history={routerProps.history} />
        }} />

        <Route exact path='/' render={(routerProps) => {
          return <Home history={routerProps.history} />
        }} />
      </Switch>
    </div>
  );
}

export default App;
