import React, {useContext, useState, useEffect} from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import AppContext from './context';

import Home from "./components/Home"
import Login from "./components/Login"

const App = () => {

  const { authenticated, setAuthenticated } = useContext(AppContext)


  const [formText, setFormText] = useState('');

  useEffect(() => {
    console.log("loginState here: ", authenticated)
  }, [authenticated])



  const handleSubmit = (e) => {
    e.preventDefault()
    setAuthenticated(!authenticated)
  }






  // end context tutorial code

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

        <h3>BEGIN tutorial</h3>

      <h4> Current State: {!!authenticated ? (
          'Logged IN'
        ) : (
          'Logged OUT!'
        )} {!!authenticated.toString()}

      </h4>

      <button onClick={handleSubmit}>
        {!!authenticated ? (
            'Logout'
          ) : (
            'Login!'
          )}
      </button>

      <h3>END TUTORIAL</h3>
    </div>
  );
}

export default App;
