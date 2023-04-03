import React from "react";

// BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";

// STYLES AND AESSETS
import "./Image.css";

const Imagen = ({ rutaImagen }) => {
  return (
    <Container fluid>
      
      <Image className="previewDesign" src={rutaImagen} alt="Imagen" />

    </Container>
  );
};

export default Imagen;
