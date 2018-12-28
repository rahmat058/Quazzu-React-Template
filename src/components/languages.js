import React, { Component } from 'react'

class Languages extends Component {
  render() {
    return (
      <section className="section section-languages grey lighten-4">
        <div className="container">
          <div className="row">
            <h4 className='center'>Work with 
              <span className="deep-purple-text text-darken-1"> Any Languages</span>
            </h4>
            <br/>
            <br/>
            <div className="row">
              <div className="col s2">
                <img src={require('../assets/img/python-logo.png')} alt="" className='responsive-img'/>
              </div>
              <div className="col s2">
                <img src={require('../assets/img/ruby-logo.png')} alt="" className='responsive-img'/>
              </div>
              <div className="col s2">
                <img src={require('../assets/img/php-logo.png')} alt="" className='responsive-img'/>
              </div>
              <div className="col s2">
                <img src={require('../assets/img/node-logo.png')} alt="" className='responsive-img'/>
              </div>
              <div className="col s2">
                <img src={require('../assets/img/c-sharp-logo.png')} alt="" className='responsive-img'/>
              </div>
              <div className="col s2">
                <img src={require('../assets/img/java-logo.png')} alt="" className='responsive-img'/>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Languages
