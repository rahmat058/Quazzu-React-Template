import React, { Component } from 'react'
import M from 'materialize-css'

class LoginModal extends Component {

  componentDidMount() {
    let modal = document.querySelectorAll('.modal');
    M.Modal.init(modal, {});
  }
  render() {
    return (
      <div id="login-modal" className="modal">
        <div className="modal-content">
          <h4>Account Login</h4>
          <p>Login to access your account dashboard</p>
          <form>
            <div className="input-field">
              <input type="email" id='email'/>
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-field">
              <input type="password" id='password'/>
              <label htmlFor="password">Password</label>
            </div>
          </form>
        </div>

        <div className="modal-footer">
          <a href="#!" className="modal-action modal-close btn grey reset-password-btn">
          <i className="fa fa-sync"></i> Reset Password</a>
          <a href="#!" className="modal-action modal-close btn purple">
          <i className="fa fa-lock"></i> Login </a>
        </div>
      </div>
    )
  }
}

export default LoginModal
