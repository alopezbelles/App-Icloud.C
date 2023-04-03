
import React from "react";
import Imagen from "./Image";
import datos from "../../assets/documents.json";

// BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

const Pdf = () => {
  return (
    <Container>
      {datos.map((dato) => (
        <div key={dato.path}>
          <Imagen rutaImagen={dato.path} />
          <h5>{dato.relevance}</h5>
          <p>{dato.date}</p>
        </div>
      ))}
    </Container>
  );
};

export default Pdf;
