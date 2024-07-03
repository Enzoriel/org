import "./Formulario.css";
import Campo from "../Campo";
import ListaOpciones from "../ListaOpciones/ListaOpciones";
import Boton from "../Boton";
import { useState } from "react";
import { v4 as uuid } from "uuid";

const Formulario = (props) => {
  const [nombre, setNombre] = useState("");
  const [puesto, setPuesto] = useState("");
  const [foto, setFoto] = useState("");
  const [equipo, setEquipo] = useState("");
  const [titulo, setTitulo] = useState("");
  const [color, setColor] = useState("");

  const { registrarColaborador, crearEquipo } = props;

  const manejarEnvio = (event) => {
    event.preventDefault();
    const id = uuid();
    let enviarDatos = { id, nombre, puesto, foto, equipo };
    registrarColaborador(enviarDatos);
  };

  const manejarNuevoEquipo = (e) => {
    e.preventDefault();
    crearEquipo({ titulo, colorPrimario: color });
  };

  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear a un colaborador.</h2>
        <Campo titulo="Nombre" placeholder="Ingrese un nombre" required valor={nombre} setValor={setNombre} />
        <Campo titulo="Puesto" placeholder="Ingrese su puesto" required valor={puesto} setValor={setPuesto} />
        <Campo
          titulo="Foto"
          placeholder="Ingrese enlace de la foto"
          required
          valor={foto}
          setValor={setFoto}
        />
        <ListaOpciones valor={equipo} setValor={setEquipo} equipos={props.equipos} />
        <Boton>Crear</Boton>
      </form>
      <form onSubmit={manejarNuevoEquipo}>
        <h2>Rellena el formulario para crear a un equipo.</h2>
        <Campo titulo="Titulo" placeholder="Ingrese el titulo" required valor={titulo} setValor={setTitulo} />
        <Campo
          titulo="Color"
          placeholder="Ingrese el color en hex"
          required
          valor={color}
          setValor={setColor}
          type="color"
        />
        <Boton>Registrar equipo</Boton>
      </form>
    </section>
  );
};

export default Formulario;
