import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container } from "react-bootstrap";
import './style.css';
import titulo from "./img/los simpsons.png";
import Frase from "./components/Frase";
import { useEffect, useState } from "react";


 function App() {
  const [personaje,setPersonaje] = useState({});

  useEffect(()=>{
    consultarApi();
  },[])

  const consultarApi = async()=>{
    try {
      const respuesta = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
      console.log(respuesta)
      const dato = await respuesta.json();
      console.log(dato[0])
      setPersonaje(dato[0]);
      
    } catch (error) {
      console.log(error);
      //mostrar un mensaje al usuario
    }
  }

    return (
      <Container>
        <div className="m-5 text-center">
        <img src={titulo} alt="homero simpsons" className="w-100"/>
        </div>
        <div className="text-center">
          <Button type="submit" className="button mb-5" variant="warning">Obtener frase</Button>
        </div>
        <Frase personaje={personaje}></Frase>
      </Container>
    );
  }



export default App;
