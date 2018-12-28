import React, { Component } from 'react'
import Navbar from '../navbar'


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
      </React.Fragment>
    )
  }
}

export default Solutions
