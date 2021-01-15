import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'


export default class MyCarousel extends Component {

  render() {

    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="carouselCaption"
            src="holder.js/800x400?text=First slide&bg=373940"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Hello!</h3>
            <p>Hello! I am product and engineering leader who loves to code. I have 14 years of technical
            project and technical product management experience, and over the last 4 years been
              investing heavily in sharping my developer / engineering skill set.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carouselCaption"
            src="holder.js/800x400?text=Second slide&bg=282c34"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>My mission</h3>
            <p>To empower makers and creators to build amazing things that
                will change the world.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carouselCaption"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>More about me</h3>
            <p>To say I love empowering developers to build cool things is an understatement.
            Great documentation, amazing code libraries, and awesome developer support enables
            creative people to do amazing things with your software. I love seeing a
              community grow and use a product to solve their own developer challenges.</p>

            <p>I enjoy talking to customers and users about products and seeing their eyes and brains
            light up when a particular solution solves a challenge they are facing.
                Being in service to people, and making their lives easier, brings me joy.</p>

            <p>I believe in open source, accessibility, transparency in code, and clarity in design and
            documentation. I possess an insatiable appetite to learn, and ability to
                learn quickly and love for coding that goes beyond words.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}


