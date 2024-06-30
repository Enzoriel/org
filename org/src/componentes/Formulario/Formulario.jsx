import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaOpciones from "../ListaOpciones/ListaOpciones";
import Boton from "../Boton";

const Formulario = () => {
  const manejarEnvio = (event) => {
    event.preventDefault();
  };

  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear a un colaborador.</h2>
        <CampoTexto titulo="Nombre" placeholder="Ingrese un nombre" required />
        <CampoTexto titulo="Puesto" placeholder="Ingrese su puesto" required />
        <CampoTexto titulo="Foto" placeholder="Ingrese enlace de la foto" required />
        <ListaOpciones />
        <Boton>Crear</Boton>
      </form>
    </section>
  );
};

export default Formulario;
