import React from "react";
import Button from "../../../src/Components/Button/Button";
import { useNavigate } from "react-router-dom";

// BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";

// STYLES AND AESSETS
import "./Home.css";
import logo from "../../assets/logo-complete-blue-05.png";
import vectors from "../../assets/vectors.png";

function Home() {
  const navigate = useNavigate();

  return (
    <Container fluid className="containerDesign">
      <Col className="col1Design">
        <Image src={logo} className="logoHome" alt="Image1"></Image>
        <h3 className="subtittleLogo">
          Share Security is a fictional software security company that provides
          top-notch solutions to businesses and individuals. Their software
          offers comprehensive protection against various cyber threats,
          including malware, ransomware, and phishing attacks. Share Security
          prides itself on its advanced technology, which allows for real-time
          monitoring and threat detection.
        </h3>
      </Col>
      <Col className="colButtons">
        
          <div onClick={() => navigate("/login")}>
            <Button text="LOGIN"></Button>
          </div>
          <div onClick={() => navigate("/register")}>
            <Button text="REGISTER"></Button>
          </div>
        
      </Col>
      <Col className="col2Design">
        <Image src={vectors} className="vectorsDesign" alt="Image2"></Image>
      </Col>
      <Col className="col4Design">
        <h3 className="subtittleLogo">
          The company also offers regular software updates and excellent
          customer support to ensure that its clients are always secure.
        </h3>
        <h3 className="subtittleLogo">
          Overall, Share Security is a trusted and reliable choice for anyone
          looking to safeguard their digital assets.
        </h3>
      </Col>
    </Container>
  );
}

export default Home;
