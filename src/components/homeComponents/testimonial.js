import React, { Component } from 'react'
import M from 'materialize-css'

class Testimonial extends Component {

  componentDidMount() {
    let caro = document.querySelectorAll('.carousel');
    M.Carousel.init(caro, {
      fullWidth: true
    });
  }

  render() {
    return (
      <section className="section section-testimonial grey lighten-4">
        <div className="container">
          <div className="row">
            <div className="col s12">
              <div className="carousel carousel-slider center">
                <div className="carousel-item" href='#one!'>
                  <h2>Testimonial 1</h2>
                  <p className="flow-text">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima unde animi alias sapiente. Ipsa quibusdam, ducimus asperiores id incidunt quisquam odio temporibus, nesciunt maxime voluptatem omnis velit voluptates doloribus quam."
                    <p>
                      <em>- John Doe
                        <span className="deep-purple-text text-darken-1"> From Microsystems</span>
                      </em>
                    </p>
                  </p>
                  <div className="carousel-fixed-item center hide-on-small-and-down">
                    <a href="#" className="btn grey">Read More</a>
                  </div>
                </div>

                <div className="carousel-item" href='#two!'>
                  <h2>Testimonial 2</h2>
                  <p className="flow-text">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima unde animi alias sapiente. Ipsa quibusdam, ducimus asperiores id incidunt quisquam odio temporibus, nesciunt maxime voluptatem omnis velit voluptates doloribus quam."
                    <p>
                      <em>- Mike Smith
                        <span className="deep-purple-text text-darken-1"> From Edge Inc</span>
                      </em>
                    </p>
                  </p>
                  <div className="carousel-fixed-item center hide-on-small-and-down">
                    <a href="#" className="btn grey">Read More</a>
                  </div>
                </div>

                <div className="carousel-item" href='#three!'>
                  <h2>Testimonial 3</h2>
                  <p className="flow-text">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima unde animi alias sapiente. Ipsa quibusdam, ducimus asperiores id incidunt quisquam odio temporibus, nesciunt maxime voluptatem omnis velit voluptates doloribus quam."
                    <p>
                      <em>- Karen Williams 
                        <span className="deep-purple-text text-darken-1"> From TechSoft</span>
                      </em>
                    </p>
                  </p>
                  <div className="carousel-fixed-item center hide-on-small-and-down">
                    <a href="#" className="btn grey">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Testimonial
