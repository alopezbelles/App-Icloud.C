import React from "react";
import Button from "../../../src/Components/Button/Button";

// BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";

// STYLES AND AESSETS
import "./Home.css";
import logo from "../../assets/logo-complete-blue-05.png";
import vectors from "../../assets/vectors.png";

function Home() {
  return (
    <Container fluid className="containerDesign">
      <Col className="col1Design">
        <Image src={logo} className="logoHome"></Image>
        <h3 className="subtittleLogo">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa.
        </h3>
        <Row className="rowButtons">
        <Button text="LOGIN"></Button>
        <Button text="REGISTER"></Button>
        </Row>
      
      </Col>
      <Col className="col2Design">
        <Image src={vectors} className="vectorsDesign"></Image>
      </Col>
      <Col className="col4Design">
        <h3 className="subtittleLogo">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa.
        </h3>
        <h3 className="subtittleLogo">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa.
        </h3>
      </Col>
    </Container>
  );
}

export default Home;
