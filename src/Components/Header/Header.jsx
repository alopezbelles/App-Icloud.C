
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


// BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// STYLES AND AESSETS
import "./Header.css";
import logoNavbarWhite from "../../assets/logo-white-04.png"



function Header() {
    const [expanded, setExpanded] = useState(false);
  
    return (
      <Navbar className="navbarDesign"  variant="dark" expand="md" expanded={expanded}>
        <Container>
          <Navbar.Brand href="/">
          <Image src={logoNavbarWhite} className="logoNavbar"></Image>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="login">Login</Nav.Link>
              <Nav.Link href="register">Register</Nav.Link>
              <Nav.Link href="documents">Documents</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }


export default Header;