import React, { Component } from 'react'
import Navbar from '../homeComponents/navbar'
import Footer from '../homeComponents/footer'
import SolutionsAbout from './solutionsAbout'

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
        <Footer />
      </React.Fragment>
    )
  }
}

export default Solutions
