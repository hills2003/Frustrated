import React from 'react';
import ReactDOM from 'react-dom';
import Weather from './Weather';
import {BrowserRouter as Router,Switch ,Route } from "react-router-dom";
import GoogleSignin from "./GoogleSignin";
import Authprovider from './SignInMethod/Authprovider';
import Private from "./Private"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Authprovider>
      <Switch>
             <Private  path="/home" component={Weather} />
             <Route exact path="/" component={GoogleSignin} />
      </Switch>
      </Authprovider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


