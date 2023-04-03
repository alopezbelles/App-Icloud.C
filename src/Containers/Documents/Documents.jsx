import React, { useState } from "react";

// BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";

// STYLES AND AESSETS
import "./Documents.css";
import Pdf from "../../Components/Pdf/Pdf";
import vectors3 from "../../assets/vectors-3.png";

function Documents() {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState("nombre");

  const handleChange = (event) => {
    setOpcionSeleccionada(event.target.value);
  };

  return (
    <Container fluid className="documentsDesign">
      <Col className="col1Documents">
        <h4 className="tittleDocuments">Select level of relevance:</h4>
        {/* SELECTOR */}
        <select
          className="selectorDesign"
          value={opcionSeleccionada}
          onChange={handleChange}
        >
          <option value="Alta">Alta</option>
          <option value="Media">Media</option>
          <option value="Baja">Baja</option>
        </select>

        <h4 className="tittleDocuments">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem.
        </h4>
        <Image src={vectors3} className="vectorsDocuments" alt="Image2" />
      </Col>
      <Col className="col2Documents">
        <Pdf />
      </Col>
    </Container>
  );
}

export default Documents;
