import React, {useContext, useState, useEffect} from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import AppContext from './context'

import Home from "./components/Home"
import Login from "./components/Login"

function App() {

  // begin Context tutorial code

  const { example, setExample } = useContext(AppContext);
  const [formText, setFormText] = useState('');

  useEffect(() => {
    console.log("example here: ", example)
  }, [example])

  const handleChange = (e) => {
    setFormText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setExample(formText)
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
          <form onSubmit={handleSubmit}>
            <label htmlFor="example">Example: </label>
            <input
              type='text'
              value={formText}
              onChange={handleChange}
              />
            <button>DO IT</button>
          </form>
          <h3>END TUTORIAL</h3>
        </div>
      );
    }

    export default App;
