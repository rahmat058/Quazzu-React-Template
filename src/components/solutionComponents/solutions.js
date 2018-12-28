import React, { Component } from 'react'
import Navbar from '../homeComponents/navbar'
import Footer from '../homeComponents/footer'
import SolutionsAbout from './solutionsAbout'
import Features from './features'

class Solutions extends Component {
  render() {
    return (
      <React.Fragment>
       <Navbar 
          title='Welcome To Quazzu'
          subTitle='Cloud Solutions'
          para='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit fugit deserunt quos provident aliquam inventore.'
          customClass='main-header-inner'
        />
        <SolutionsAbout />
        <Features />
        <Footer />
      </React.Fragment>
    )
  }
}

export default Solutions
