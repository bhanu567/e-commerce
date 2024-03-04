import React from "react";
import { Row, Col, Card, Button, Container } from "react-bootstrap";
import "./MyCardComponent.css";
import { Link } from "react-router-dom";

const MyCardComponent = (props) => {
  return (
    <>
      <h2 className="my-5 fw-bold text-center">{props.title}</h2>
      <Row xs={1} md={2} className="g-5 mx-auto">
        {props.products.map((product, index) => (
          <Col key={index}>
            <Card
              className={
                (index % 2 ? "offset-0" : "offset-5") +
                " col-7 border-0 mt-1 mb-3"
              }
            >
              <Card.Body>
                <Card.Title className="text-center fw-bold">
                  {product.mainTitle}
                </Card.Title>
                <Container id="imgContainer" className="mx-auto my-4">
                  <Link to={product.id}>
                    <Card.Img
                      id="image"
                      variant="top"
                      src={product.imageUrl[0]}
                    />
                  </Link>
                </Container>
                <span className="ms-4">${product.price}</span>
                <Button
                  id="button"
                  variant="info"
                  size="sm"
                  className="fw-bold text-light"
                  style={{
                    right: "13%",
                    position: "absolute",
                  }}
                >
                  ADD TO CART
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default MyCardComponent;
