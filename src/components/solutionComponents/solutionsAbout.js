import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import M from 'materialize-css'

class SolutionsAbout extends Component {

  componentDidMount() {
    let tabs = document.querySelectorAll('.tabs')
    M.Tabs.init(tabs, {})
  }

  render() {
    return (
      <section className="section section-solutions-about">
        <div className="container">
          <div className="row">
            <div className="col s12 m5">
              <h2>What We do...</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, architecto culpa a neque nulla vero, tempora reiciendis commodi aliquid minus dolorem mollitia praesentium totam consectetur dignissimos laboriosam. Id, libero delectus.</p>
            </div>

            <div className="col s12 m6 offset-m1">
              <div className="row">
                <div className="col s12">
                  <ul className="tabs">
                    <li className="tab col s4"><Link to="#tab1" className='purple-text'>Cloud Hosting</Link></li>
                    <li className="tab col s4"><Link className="active purple-text" to="#tab2">Cloud Storage</Link></li>
                    <li className="tab col s4"><Link to="#tab3" className='purple-text'>Cloud Database</Link></li>
                  </ul>
                </div>
                <div id="tab1" className="col s12">
                  <h5>Cloud Hosting</h5>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, a possimus! Quo corrupti sed ullam odit voluptate voluptatibus non expedita?</p>
                </div>
                <div id="tab2" className="col s12">
                  <h5>Cloud Storage</h5>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, totam. Est possimus architecto molestias repellendus nesciunt, laboriosam ad facilis tempora recusandae animi aliquid voluptatem repudiandae voluptas iste iure numquam reprehenderit?</p>
                </div>
                <div id="tab3" className="col s12">
                  <h5>Cloud Database</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, iste? Culpa libero nulla tenetur sed.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default SolutionsAbout
