import Carousel from "react-bootstrap/Carousel";

function Carousal(props) {
  return (
    <Carousel style={{ width: "50vw", margin: "auto" }}>
      <Carousel.Item interval={1000}>
        <img
          alt="First"
          style={{ height: "21rem", width: "50vw" }}
          text={props.data.title}
          src={props.data.imageUrl[0]}
        />
        <Carousel.Caption>
          <h3>{props.data.mainTitle}</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          alt="Second"
          style={{ height: "21rem", width: "50vw" }}
          text={props.data.title}
          src={props.data.imageUrl[1]}
        />
        <Carousel.Caption>
          <h3>Second Image</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          alt="Third"
          style={{ height: "21rem", width: "50vw" }}
          text={props.data.title}
          src={props.data.imageUrl[2]}
        />
        <Carousel.Caption>
          <h3>Third Image</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousal;
