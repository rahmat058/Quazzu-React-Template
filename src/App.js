import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import './assets/css/main.css'
import { BrowserRouter, Route } from 'react-router-dom'

import LoginModal from './components/homeComponents/loginModal'
import Solutions from './components/solutionComponents/solutions'
import Home from './components/home'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/solutions" component={Solutions} />
          <Route path="/login-modal" component={LoginModal} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
