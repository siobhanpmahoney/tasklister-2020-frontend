import React, {useContext, useState, useEffect} from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import AppContext from './context'

import Home from "./components/Home"
import Login from "./components/Login"

function App() {

  // begin Context tutorial code

  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);
  const [formText, setFormText] = useState('');

  useEffect(() => {
    console.log("loginState here: ", isLoggedIn)
  }, [isLoggedIn])



  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoggedIn(!isLoggedIn)
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

        <h4> Current State: {!!isLoggedIn ? (
          'Logged IN'
        ) : (
          'Logged OUT!'
        )} {!!isLoggedIn.toString()}</h4>
          <button onClick={handleSubmit}>
          {!!isLoggedIn ? (
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
