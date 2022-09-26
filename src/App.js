import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import './style.css';

function App() {
  return (
    <Container className='my-3 text-center'>
      <h1 className="text-center">simpsons</h1>
      <Button type="submit" className="button">Obtener frase</Button>
    </Container>
  );
}

export default App;
