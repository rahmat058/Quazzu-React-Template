import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import './assets/css/main.css'
import { BrowserRouter, Route } from 'react-router-dom'

import Navbar from './components/navbar'
import IconBoxes from './components/icon-boxes'
import About from './components/about'
import Developers from './components/developers'
import Languages from './components/languages'
import Podcast from './components/podcast'
import Testimonial from './components/testimonial'
import Footer from './components/footer'
import LoginModal from './components/loginModal'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/login-modal" component={LoginModal} />
          <Navbar 
            title='Welcome To Quazzu'
            subTitle='Build For The Future'
            navBodyButton='true'
            customClass='main-header'
          />
          <IconBoxes />
          <About />
          <Developers />
          <Languages />
          <Podcast />
          <Testimonial />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
