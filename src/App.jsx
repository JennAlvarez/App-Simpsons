import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import './style.css';
import titulo from "./img/los simpsons.png";
import Frase from "./components/Frase";

function App() {
  return (
    <Container className='my-3 text-center'>
      <img src={titulo}/>
      <br/>
      <Button type="submit" className="button my-4">Obtener frase</Button>
      <Frase></Frase>
    </Container>
  );
}

export default App;
