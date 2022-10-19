import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container } from "react-bootstrap";
import "./style.css";
import titulo from "./img/los simpsons.png";
import Frase from "./components/Frase";
import { useEffect, useState } from "react";
import Spinner from "./components/Spinner";

function App() {
  const [personaje, setPersonaje] = useState({});
  const [mostrarSpinner, setMostrarSpinner] = useState(true);

  useEffect(() => {
    consultarApi();
  }, []);

  const consultarApi = async () => {
    try {
      //mostrar spinner
      setMostrarSpinner(true)
      const respuesta = await fetch(
        "https://thesimpsonsquoteapi.glitch.me/quotes"
      );
      console.log(respuesta);
      const dato = await respuesta.json();
      console.log(dato[0]);
      setPersonaje(dato[0]);
      // mostrar el componente frase
      setMostrarSpinner(false)

    } catch (error) {
      console.log(error);
      //mostrar un mensaje al usuario
    }
  };

  //condicion logica if, operador ternario ? :
  //(condicion logica)?(logica a ejecutar si cumplo la condicion logica):(lo que quiero ejecutar si no cumplo la condicion logica)
  const mostrarComponente = (mostrarSpinner === true)?(<Spinner></Spinner>):(<Frase personaje={personaje}></Frase>) 

  return (
    <Container>
      <div className="m-5 text-center">
        <img src={titulo} alt="homero simpsons" className="w-100" />
      </div>
      <div className="text-center">
        <Button
          type="submit"
          className="button mb-5"
          variant="warning"
          onClick={consultarApi}
        >
          Obtener frase
        </Button>
      </div>
      {
        mostrarComponente
      }
    </Container>
  );
}

export default App;
