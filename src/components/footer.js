import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <div>
         <footer class="page-footer deep-purple lighten-1">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">About Us</h5>
                <p class="grey-text text-lighten-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe veniam non amet accusamus quisquam</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Links</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#!">Home</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Solutions</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Sign Up</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright deep-purple lighten-1">
            <div class="container">
            Quazzu &copy; 2018
            <a class="grey-text text-lighten-4 right" href="#!">Terms & Conditions</a>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default Footer
