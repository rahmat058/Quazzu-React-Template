import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import M from 'materialize-css'

class Navbar extends Component {

  componentDidMount() {
    //Sidenav Open
    let sideNav = document.querySelector(".button-collapse");
    M.Sidenav.init(sideNav, {})
  }

  render() {
    return (
      <header className="main-header">
        <nav className="transparent">
          <div className="container">
            <div className="nav-wrapper">
              <Link to='/' className="brand-logo">Quazzu</Link>
              <a href="#" data-activates="mobile-nav" className="button-collapse">
                <i className="fa fa-bars"></i>
              </a>
              <ul className="right hide-on-med-and-down">
                <li>
                  <Link to='/' className="active-link">Home</Link>
                </li>
                <li>
                  <a href="solutions.html">Solutions</a>
                </li>
                <li>
                  <a href="signup.html">Sign Up</a>
                </li>
                <li>
                  <a href="#" className="btn purple">Login</a>
                </li>
                <li>
                  <Link to="https://facebook.com">
                    <i className="fab fa-facebook"></i>
                  </Link>
                </li>
                <li>
                  <Link to="https://twitter.com">
                    <i className="fab fa-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link to="https://instagram.com">
                    <i className="fab fa-instagram"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* <ul className="side-nav" id="mobile-nav">
                <h4 className="purple-text text-darken-4 center">Quazzu</h4>
                <li>
                  <div className="divider"></div>
                </li>
                <li>
                  <a href="index.html">
                    <i className="fa fa-home grey-text text-darken-4"></i> Home</a>
                </li>
                <li>
                  <a href="solutions.html">
                    <i className="fa fa-cog grey-text text-darken-4"></i> Solutions</a>
                </li>
                <li>
                  <a href="signup.html">
                    <i className="fa fa-users grey-text text-darken-4"></i> Sign Up</a>
                </li>
                <li>
                  <div className="divider"></div>
                </li>
                <li>
                  <a href="#" className="btn purple">Login</a>
                </li>
              </ul> */}
        
        <div className="showcase container">
          <div className="row">
            <div className="col s12 m10 offset-m1 center">
              <h5>Welcome To Quazzu</h5>
              <h1>Build For The Future</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit fugit deserunt quos provident aliquam inventore.</p>
              <br/>
              <br/>
              <a href="solutions.html" className="btn btn-large white purple-text learn-more">Learn More</a>
              <a href="signup.html" className="btn btn-large purple white-text">Sign Up</a>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Navbar
