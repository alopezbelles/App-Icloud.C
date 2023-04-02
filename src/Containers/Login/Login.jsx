import React from "react";

// BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";

// STYLES AND AESSETS
import "./Login.css";
import Button from "../../../src/Components/Button/Button";

function Login() {
  return (
    <Container fluid className="loginDesign">
      <Col className="col2Login">
        <h3 className="tittleLogin">
          Register to have access to all our features.
        </h3>

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
    </Container>
  );
}

export default Login;
