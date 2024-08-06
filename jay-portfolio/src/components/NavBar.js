import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

export const NavBar = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src="" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggle-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Experience</Nav.Link>
            <Nav.Link href="#link">Education</Nav.Link>
            <Nav.Link href="#link">Skills</Nav.Link>
            <Nav.Link href="#link">Projects</Nav.Link>
            <span className="navbar-text">
                 <div className="social-icon">
                     <a href="#"><img src="" alt="" /></a>
                     <a href="#"><img src="" alt="" /></a>
                     <a href="#"><img src="" alt="" /></a>
                 </div>
            </span>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};