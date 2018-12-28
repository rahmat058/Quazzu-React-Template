import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import './assets/css/main.css'
import { BrowserRouter } from 'react-router-dom'

import Navbar from './components/navbar'
import IconBoxes from './components/icon-boxes'
import About from './components/about'
import Developers from './components/developers'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <IconBoxes />
          <About />
          <Developers />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
