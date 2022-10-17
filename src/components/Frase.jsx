import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import Homero from "../img/homero.png";

const Frase = () => {
  return (
    <Card>
      <Card.Body>
      <Row>
        <Col md={4}>
          <img src={Homero} alt='homero' className="w-100"/>
        </Col>
        <Col md={8}>
          <Card.Title>
            <h3>Homer Simpsons</h3>
          </Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            dolorum, facilis ducimus recusandae exercitationem nemo eum
            laudantium laboriosam culpa harum.
          </Card.Text>
        </Col>
      </Row>
      </Card.Body>
    </Card>
  );
};

export default Frase;
