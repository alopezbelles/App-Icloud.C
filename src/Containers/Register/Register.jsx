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
        Certainly, registering on Share Security's website has several
        advantages. Firstly, registered users gain access to additional features
        and resources that are not available to non-registered users. This
        includes access to software updates, support forums, and user guides.
        Secondly, registered users can benefit from personalized support and
        guidance from Share Security's customer service team. This can be
        particularly helpful if users have specific questions or concerns about
        their software or if they encounter any technical issues.
      </h5>
      <Col className="col1Register">
        <Image src={vectors2} className="vectorsRegister" alt="Image2"></Image>
        <h5 className="tittleRegister">
          Another advantage of registering on Share Security's website is that
          it allows users to manage their account settings and preferences. For
          example, users can update their contact information, change their
          password, and adjust their notification settings. Finally, registering
          on Share Security's website allows users to receive promotional
          offers, discounts, and other exclusive deals. This can be a great way
          to save money on Share Security's software and services.
        </h5>
      </Col>
    </Container>
  );
}

export default Register;
