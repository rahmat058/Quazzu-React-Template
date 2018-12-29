import React, { Component } from 'react'

class About extends Component {
  render() {
    return (
      <section className="section section-about grey lighten-4">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <h3><span className="deep-purple-text text-darken-1">About</span> Us</h3>
              <p className="flow-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem provident labore ipsa sapiente, id nihil praesentium eum non ut ad!
              </p>
            </div>
            <div className="col s12 m6">
              <img src={require('../../assets/img/tech.jpg')} alt="" className='circle responsive-img'/>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default About
