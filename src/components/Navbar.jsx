import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
const MyNavbar = (props) => {
  return (
    <>
      <Navbar
        bg="dark"
        data-bs-theme="dark"
        className="p-0 sticky-top border-bottom border-light border-2"
      >
        <Container>
          <Nav className="me-auto offset-5 ">
            <Nav.Link href="#home" className="me-5 text-light">
              HOME
            </Nav.Link>
            <Nav.Link href="#store" className="me-5 text-light">
              STORE
            </Nav.Link>
            <Nav.Link href="#about" className="text-light">
              ABOUT
            </Nav.Link>
          </Nav>
        </Container>
        <Button
          variant="outline-info"
          className="text-light border-2 py-0 mt-2"
          onClick={props.openCart}
        >
          cart
        </Button>
        <sup className="me-4 fs-5 text-info">0</sup>
      </Navbar>
    </>
  );
};

export default MyNavbar;
