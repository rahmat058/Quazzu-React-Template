import React, { Component } from 'react'
import M from 'materialize-css'
import Navbar from '../homeComponents/navbar'
import Footer from '../homeComponents/footer'

class SignUp extends Component {

  componentDidMount() {
    let selectOption = document.querySelectorAll('select');
    M.FormSelect.init(selectOption, {});
  }

  render() {
    return (
      <React.Fragment>
       <Navbar 
          title='Welcome To Quazzu'
          subTitle='Create An Account'
          customClass='main-header-inner'
        />

        <section className="section section-signup">
          <div className="container">
            <div className="row">
              <div className="col s12 m6">
                <h4>Get a free account?</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum qui ratione enim esse facilis consequatur ipsam quis fuga natus odio!</p>
                <h4>Download the free software</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum qui ratione enim esse facilis consequatur ipsam quis fuga natus odio!</p>
                <h4>Push to the platform</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum qui ratione enim esse facilis consequatur ipsam quis fuga natus odio!</p>
              </div>

              <div className="col s12 m6">
                <div className="card-panel grey lighten-4 grey-text text-darken-4 z-depth-0">
                  <form>
                    <div className="input-field">
                      <input type="text" id="f_name"/>
                      <label htmlFor="f_name">First Name</label>
                    </div>
                    <div className="input-field">
                      <input type="text" id="l_name"/>
                      <label htmlFor="l_name">Last Name</label>
                    </div>
                    <div className="input-field">
                      <input type="email" id="email"/>
                      <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-field">
                      <input type="password" id="password"/>
                      <label htmlFor="password">Password</label>
                    </div>
                    <div className="input-field">
                      <input type="text" id="company"/>
                      <label htmlFor="company">Company</label>
                    </div>
                    <div className="input-field">
                      <select id='role'>
                        <option value="" disabled selected>Select Role</option>
                        <option value="professional">Professional Developer</option>
                        <option value="hobbyist">Hobbyist</option>
                        <option value="student">Student</option>
                        <option value="manager">Manager</option>
                        <option value="other">Other</option>
                      </select>
                      <label htmlFor="role">Role</label>
                    </div>
                    <input type="submit" value="signup" className='btn btn-large purple btn-extend'/>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </React.Fragment>
    )
  }
}

export default SignUp
