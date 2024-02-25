import React from 'react'
import {Container, Nav, Navbar, Image} from "react-bootstrap"
import youTube from '../Images/you-tube.png'
import faceBook from '../Images/fb.png'
import spotify from '../Images/spotify.png'

const Footer = () => {
  return (
    <Navbar bg="info" data-bs-theme="dark">
        <Container>
          <Navbar.Brand className="ms-5" href="#home" style={{fontSize:"50px"}}>The Generics</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="https://www.spotify.com"><Image src={spotify} rounded /></Nav.Link>
            <Nav.Link href="https://www.facebook.com"><Image src={faceBook} rounded /></Nav.Link>
            <Nav.Link href="https://www.youtube.com"><Image src={youTube} rounded style={{height:"85%", width:"30%"}} /></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Footer