import React from "react";

// BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";

// STYLES AND AESSETS
import "./Register.css";

function Register() {
  return(
    <Container fluid className="registerDesign">
        <Col className="col1Register">SOY REGISTER
        <h3 className="tittleRegister">Want to Register?</h3>
        
        <form className="formBox">
        <input
          className="inputDesign"
          type="text"
          placeholder="  Isbn ... "
        ></input>
        <input
          className="inputDesign"
          type="text"
          placeholder="  Title ... "
        ></input>
        
        <br />
      </form>
        
        </Col>
    </Container>
        
  ); 
}

export default Register;
