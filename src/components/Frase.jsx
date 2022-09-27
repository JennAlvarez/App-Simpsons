import React from "react";
import Card from "react-bootstrap/Card";
import Homero from "../img/homero.png";

const Frase = () => {
  return (
    <Card className="card mb-3" style={{ width: "100%" }}>
        <div className="d-flex">
         <Card.Img variant="top" src={Homero} />
         <Card.Body>
           <Card.Title>Homer Simpson</Card.Title>
           <Card.Text>
             Some quick example text to build on the card title and make up the
             bulk of the card's content.
           </Card.Text>
         </Card.Body>
        </div>
    </Card>
  );
};

export default Frase;
