import React, { Component } from 'react'

import Navbar from './homeComponents/navbar'
import IconBoxes from './homeComponents/icon-boxes'
import About from './homeComponents/about'
import Developers from './homeComponents/developers'
import Languages from './homeComponents/languages'
import Podcast from './homeComponents/podcast'
import Testimonial from './homeComponents/testimonial'
import Footer from './homeComponents/footer'


class Home extends Component {
  render() {
    return (
      <div>
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
    )
  }
}

export default Home
