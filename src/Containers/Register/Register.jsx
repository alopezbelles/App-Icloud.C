import React from "react";
import { useNavigate } from "react-router-dom";

// BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";

// STYLES AND AESSETS
import "./Register.css";
import Button from "../../../src/Components/Button/Button";
import vectors2 from "../../assets/vectors-2.png";

function Register() {
  const navigate = useNavigate();

  return (
    <Container fluid className="registerDesign">
      <Col className="col1Register">
        <h3 className="tittleRegister">
          Register to have access to all our features.
        </h3>
        <form className="formBox">
          <p>We need your User Name</p>
          <input
            className="inputDesign"
            type="text"
            placeholder="  User Name ... "
          ></input>
          <p>We need your Email</p>

          <input
            className="inputDesign"
            type="email"
            placeholder="  Email ... "
          ></input>
          <p>Please, choose your password:</p>

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
      <h5 className="tittleRegister">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem.
      </h5>
      <Col className="col1Login">
        <Image src={vectors2} className="vectorsRegister" alt="Image2"></Image>
      </Col>
    </Container>
  );
}

export default Register;
