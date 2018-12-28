import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Features extends Component {
  render() {
    return (
      <section className="section section-features grey lighten-3">
        <div className="container">
          <h4 className="purple-text text-darken-1 center">Powerful & Innovative</h4>
          <h6 className="grey-text text-darken-2 center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, laborum!</h6>
          <br/>
          <br/>

          {/* Row 1 */}
          <div className="row">
            <div className="col s12 m4">
              <h5>
                <i className="fa fa-user"></i> Unlimited Users
              </h5>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt asperiores temporibus voluptatibus facere in! Veniam dolore expedita ullam rem fuga.</p>
            </div>
            <div className="col s12 m4">
              <h5>
                <i className="fa fa-database"></i> Scalable Data
              </h5>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt asperiores temporibus voluptatibus facere in! Veniam dolore expedita ullam rem fuga.</p>
            </div>
            <div className="col s12 m4">
              <h5>
                <i className="fa fa-chart-line"></i> Data Analytics
              </h5>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt asperiores temporibus voluptatibus facere in! Veniam dolore expedita ullam rem fuga.</p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="row">
            <div className="col s12 m4">
              <h5>
                <i className="fab fa-github"></i> Github Integration
              </h5>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt asperiores temporibus voluptatibus facere in! Veniam dolore expedita ullam rem fuga.</p>
            </div>
            <div className="col s12 m4">
              <h5>
                <i className="fa fa-plus"></i> Add-ons
              </h5>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt asperiores temporibus voluptatibus facere in! Veniam dolore expedita ullam rem fuga.</p>
            </div>
            <div className="col s12 m4">
              <h5>
                <i className="fa fa-hdd"></i> Smart Storage
              </h5>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt asperiores temporibus voluptatibus facere in! Veniam dolore expedita ullam rem fuga.</p>
            </div>
          </div>

          <div className="center">
            <Link to="/signup" className="btn btn-large grey">Sign Up For Free</Link>
            <br/>
            <br/>
            <h5>
              <span className="deep-purple-text text-lighten-1">Have a question?</span> Contact our sales team
            </h5>
            <p>sales@quazzutheme.test</p>
          </div>
        </div>
      </section>
    )
  }
}

export default Features
