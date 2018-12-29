import React from 'react'
import { Link } from 'react-router-dom'

function NavbarBodyButton() {
  return (
    <React.Fragment>
      <p>'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit fugit deserunt quos provident aliquam inventore.'</p>
      <br/>
      <br/>
      <Link to="/solutions" className="btn btn-large white purple-text learn-more">Learn More</Link>
      <Link to="/signup" className="btn btn-large purple white-text">Sign Up</Link>
    </React.Fragment>
  )
}

export default NavbarBodyButton
