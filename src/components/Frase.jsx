import React from "react";
import { Card, Row, Col } from "react-bootstrap";

const Frase = ({personaje}) => {
  return (
    <Card>
      <Card.Body>
      <Row>
        <Col md={4}>
          <img src={personaje.image} alt={personaje.character} className="w-100"/>
        </Col>
        <Col md={8}>
          <Card.Title>
            <h3>{personaje.character}</h3>
          </Card.Title>
          <Card.Text>
            {personaje.quote}
          </Card.Text>
        </Col>
      </Row>
      </Card.Body>
    </Card>
  );
};

export default Frase;
