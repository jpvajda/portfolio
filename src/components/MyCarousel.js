import Carousel from "react-bootstrap/esm/Carousel";

function MyCarousel() {
  return (
    <Carousel className="carousel">
      <Carousel.Item>
        <img alt="" className="carouselCaption" />
        <Carousel.Caption>
          <h3>Hello!</h3>
          <p className="carouselText">
            I am an impact driven product led growth leader focused on building
            amazing Developer Experience.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img alt="" className="carouselCaption" />

        <Carousel.Caption>
          <h3>About me</h3>
          <p className="carouselText">
            I thrive on empowering developers to build amazing things. When you
            can provide developers clear and concise documentation, a healthy
            and vibrant community, supportive open source libraries, and a
            seamless developer experience, they can do incredible things with
            your software.
          </p>

          <p className="carouselText">
            DX-PLG (Developer Experience Product Led Growth) is a winning
            formula that many don't do well as it's really hard to pull off. I
            believe if you do this right you can increase overall PLG driven
            revenue.
          </p>

          <p className="carouselText">
            Let me help you set your company up for DX-PLG success and leverage
            the growth opportunities of your developers.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;
