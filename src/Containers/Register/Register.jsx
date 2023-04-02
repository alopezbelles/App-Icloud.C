import React from "react";
import { useNavigate } from "react-router-dom";


// BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";

// STYLES AND AESSETS
import "./Register.css";
import Button from "../../../src/Components/Button/Button";

function Register() {
    const navigate = useNavigate();

  return (
    <Container fluid className="registerDesign">
      <Col className="col1Register">
        
        <h3 className="tittleRegister">Register to have access to all our features.</h3>
        <form className="formBox">
          <input
            className="inputDesign"
            type="text"
            placeholder="  User Name ... "
          ></input>
          <input
            className="inputDesign"
            type="email"
            placeholder="  Email ... "
          ></input>
          <input
            className="inputDesign"
            type="password"
            placeholder="  Password ... "
          ></input>
          <input
            className="inputDesign"
            type="password"
            placeholder="  Repeat Password ... "
          ></input>

          
          <Button text="REGISTER"></Button>
        </form>
      </Col>
    </Container>
  );
}

export default Register;
