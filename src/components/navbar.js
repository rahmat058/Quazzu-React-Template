import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import M from 'materialize-css'

import NavbarBodyButton from './subComponents/navbarBodyButton'

class Navbar extends Component {

  componentDidMount() {
    //Sidenav Open
    let sideNav = document.querySelector(".sidenav");
    M.Sidenav.init(sideNav, {})
  }

  render() {
    const { title, subTitle, para, navBodyButton, customClass } = this.props

    return (
      <header className={`${ customClass }`}>
        <nav className="transparent">
          <div className="container">
            <div className="nav-wrapper">
              <Link to='/' className="brand-logo">Quazzu</Link>
              {/* <a href="#" data-activates="mobile-nav" className="button-collapse">
                <i className="fa fa-bars"></i>
              </a> */}
              <a href="#" data-target='mobile-nav' className="sidenav-trigger">
                <i className="material-icons">menu</i>
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
                  <Link to="/login-modal" className="btn purple modal-trigger">Login</Link>
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

        <ul className="sidenav" id="mobile-nav">
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
        </ul>

        <div className="showcase container">
          <div className="row">
            <div className="col s12 m10 offset-m1 center">
              <h5>{title}</h5>
              <h1>{subTitle}</h1>
              {
                (navBodyButton === 'true') ? <NavbarBodyButton /> : ''
              } 
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Navbar
