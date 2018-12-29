import React, { Component } from 'react'
import Navbar from '../homeComponents/navbar'
import Footer from '../homeComponents/footer'
import LoginModal from '../homeComponents/loginModal'
import SolutionsAbout from './solutionsAbout'
import Features from './features'

class Solutions extends Component {
  render() {
    return (
      <React.Fragment>
       <Navbar 
          title='Welcome To Quazzu'
          subTitle='Cloud Solutions'
          customClass='main-header-inner'
        />
        <LoginModal />
        <SolutionsAbout />
        <Features />
        <Footer />
      </React.Fragment>
    )
  }
}

export default Solutions
