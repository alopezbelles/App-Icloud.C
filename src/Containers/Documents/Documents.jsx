import React from "react";

// BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

// STYLES AND AESSETS

import "./Documents.css";
import Pdf from "../../Components/Pdf/Pdf";

function Documents() {
  return (
    <Container>
      HOLA SOY DOCUMENTS
      <Pdf></Pdf>
    </Container>
  );
}

export default Documents;
