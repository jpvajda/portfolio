import Carousel from "react-bootstrap/esm/Carousel";

function MyCarousel() {
  return (
    <Carousel className="carousel">
      <Carousel.Item>
        <img alt="Caption" className="carouselCaption" />
        <Carousel.Caption>
          <h3>Hello!</h3>
          <p className="carouselText">
            I am product and engineering leader who loves to code. I have 16
            years of technical project and technical product management
            experience, and over the last 6 years been investing heavily in
            sharping my developer and engineering skill set.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img alt="Caption" className="carouselCaption" />
        <Carousel.Caption>
          <h3>My mission</h3>
          <p className="carouselText">
            To empower makers and creators to build amazing things that will
            change the world.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img alt="Caption" className="carouselCaption" />

        <Carousel.Caption>
          <h3>About me</h3>
          <p className="carouselText">
            I love empowering developers to build cool and amazing things. Great
            documentation, rich code libraries, and awesome developer support
            enables creative people to do amazing things with your software. I
            love seeing a community grow and use a product to solve their own
            developer challenges.
          </p>

          <p className="carouselText">
            I enjoy talking to customers and users about products and seeing
            their eyes and brains light up when a particular solution solves a
            challenge they are facing. Being in service to people, and making
            their lives easier, brings me joy.
          </p>

          <p className="carouselText">
            I believe in open source, accessibility, transparency in code, and
            clarity in design and documentation. I possess an insatiable
            appetite to learn quickly and a love for coding that goes beyond
            words.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;
