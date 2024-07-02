import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaOpciones from "../ListaOpciones/ListaOpciones";
import Boton from "../Boton";
import { useState } from "react";

const Formulario = (props) => {
  const [nombre, setNombre] = useState("");
  const [puesto, setPuesto] = useState("");
  const [foto, setFoto] = useState("");
  const [equipo, setEquipo] = useState("");

  const { registrarColaborador } = props;

  const manejarEnvio = (event) => {
    event.preventDefault();
    let enviarDatos = { nombre, puesto, foto, equipo };
    registrarColaborador(enviarDatos);
  };

  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear a un colaborador.</h2>
        <CampoTexto titulo="Nombre" placeholder="Ingrese un nombre" required valor={nombre} setValor={setNombre} />
        <CampoTexto titulo="Puesto" placeholder="Ingrese su puesto" required valor={puesto} setValor={setPuesto} />
        <CampoTexto titulo="Foto" placeholder="Ingrese enlace de la foto" required valor={foto} setValor={setFoto} />
        <ListaOpciones valor={equipo} setValor={setEquipo} equipos={props.equipos} />
        <Boton>Crear</Boton>
      </form>
    </section>
  );
};

export default Formulario;
