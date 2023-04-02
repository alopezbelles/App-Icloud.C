import React from "react";

// BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";

// STYLES AND AESSETS
import "./Home.css";
import logo from "../../assets/logo-complete-blue-05.png";

function Home() {
  return (
    <Container fluid className="containerDesign">
      <Col className="col1Design">
        <Image src={logo} className="logoHome"></Image>
        <h3 className="subtittleLogo">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</h3>
      </Col>
      <Col className="col2Design">SOY COL2
      
      </Col>
    </Container>
  );
}

export default Home;
