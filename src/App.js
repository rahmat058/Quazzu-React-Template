import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import './assets/css/main.css'
import { BrowserRouter } from 'react-router-dom'

import Navbar from './components/navbar'
import IconBoxes from './components/icon-boxes'
import About from './components/about'
import Developers from './components/developers'
import Languages from './components/languages'
import Podcast from './components/podcast'
import Testimonial from './components/testimonial'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <IconBoxes />
          <About />
          <Developers />
          <Languages />
          <Podcast />
          <Testimonial />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
