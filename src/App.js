import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import './assets/css/main.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './components/home'
import Solutions from './components/solutionComponents/solutions'
import SignUp from './components/signupComponents/signup'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/solutions" component={Solutions} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
