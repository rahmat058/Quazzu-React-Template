import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export class Footer extends Component {
  render() {
    return (
      <div>
         <footer className="page-footer deep-purple lighten-1">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">About Us</h5>
                <p className="grey-text text-lighten-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe veniam non amet accusamus quisquam</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Links</h5>
                <ul>
                  <li><NavLink exact activeClassName='active-link' className="grey-text text-lighten-3" to="/">Home</NavLink></li>
                  <li><NavLink activeClassName='active-link' className="grey-text text-lighten-3" to="/solutions">Solutions</NavLink></li>
                  <li><NavLink activeClassName='active-link' className="grey-text text-lighten-3" to="/signup">Sign Up</NavLink></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright deep-purple lighten-1">
            <div className="container">
            Quazzu &copy; 2018
            <a className="grey-text text-lighten-4 right" href="#!">Terms & Conditions</a>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default Footer
