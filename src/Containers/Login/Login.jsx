import React from "react";

// BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import vectors2 from "../../assets/vectors-2.png";

// STYLES AND AESSETS
import "./Login.css";
import Button from "../../../src/Components/Button/Button";

function Login() {
  return (
    <Container fluid className="loginDesign">
      
      <Col className="col2Login">
        <form className="formBoxLogin">
          <input
            className="inputDesignLogin"
            type="email"
            placeholder="  Email ... "
          ></input>
          <input
            className="inputDesignLogin"
            type="password"
            placeholder="  Password ... "
          ></input>

          <Button text="LOGIN"></Button>
        </form>
      </Col>
      <Col className="col1Login">
        <Image src={vectors2} className="vectorsLogin" alt="Image2"></Image>
      </Col>
    </Container>
  );
}

export default Login;
