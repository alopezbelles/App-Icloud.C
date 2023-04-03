import React, { useState } from "react";
import Imagen from "./Image";
import datos from "../../assets/documents.json";

// BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

import "./Pdf.css";

const Pdf = () => {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState("alto");

  const handleChange = (event) => {
    setOpcionSeleccionada(event.target.value);
  };

  const datosFiltrados = datos.filter((dato) => {
    if (opcionSeleccionada === "alto") {
      return dato.relevance === "Alta";
    } else if (opcionSeleccionada === "medio") {
      return dato.relevance === "Media";
    } else {
      return dato.relevance === "Baja";
    }
  });

  return (
    <Container fluid className="pdfDesign">
      {datos.map((dato) => (
        <div key={dato.path_image}>
          <a href={dato.path_pdf} target="_blank" rel="noopener noreferrer">
            <Imagen className="previewImage" rutaImagen={dato.path_image} />
          </a>
          {/* <h5>{dato.relevance}</h5> */}
          <p>{dato.date}</p>
        </div>
      ))}
    </Container>
  );
};

export default Pdf;
