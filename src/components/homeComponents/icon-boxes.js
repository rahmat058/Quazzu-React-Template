import React, { Component } from 'react'

class IconBoxes extends Component {
  render() {
    return (
      <section className="section-icons center">
        <div className="container">
          <div className="row">
            <div className="col s12 m4">
              <div className="card-panel">
                <i className="fa fa-user fa-3x deep-purple-text text-darken-2"></i>
                <h5 className="grey-text text-darken-4">Free Account</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, accusantium!</p>
              </div>
            </div>
            <div className="col s12 m4">
              <div className="card-panel">
                <i className="fa fa-database fa-3x deep-purple-text text-darken-2"></i>
                <h5 className="grey-text text-darken-4">NoSQL Databases</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, accusantium!</p>
              </div>
            </div>
            <div className="col s12 m4">
              <div className="card-panel">
                <i className="fa fa-bolt fa-3x deep-purple-text text-darken-2"></i>
                <h5 className="grey-text text-darken-4">Fast Connections</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, accusantium!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default IconBoxes
