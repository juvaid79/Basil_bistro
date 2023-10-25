import React from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Button, Navbar } from 'react-bootstrap';
import Image from '../assets/images/logo.png';

function HomeNavbar() {

  const Logout = () => {
    localStorage.clear()
    
  }

  return (
    <>
      <Navbar bg="white" data-bs-theme="white">
        <Container>
          <Navbar.Brand href="/"><img
            src={Image}
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt="Your Logo"
          /></Navbar.Brand>
          <Nav>
            <Nav.Link href="/" className="custom-link">Home</Nav.Link>
            <Nav.Link href="/explore" className="custom-link">Explore</Nav.Link>
            <Nav.Link href="/Review" className="custom-link">Review</Nav.Link>
            <Nav.Link href="/Blog" className="custom-link">Blog</Nav.Link>
            <Nav.Link href="/contact" className="custom-link">Contact</Nav.Link>
            <Button variant="outline-info" size="none" onClick={Logout} >Logout</Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default HomeNavbar;