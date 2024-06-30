import "./Formulario.css";
import CampoTexto from "../CampoTexto";

const Formulario = () => {
  return (
    <section className="formulario">
      <form>
        <h2>Rellena el formulario para crear a un colaborador.</h2>
        <CampoTexto titulo="Nombre" placeholder="Ingrese un nombre" />
        <CampoTexto titulo="Puesto" placeholder="Ingrese su puesto" />
        <CampoTexto titulo="Foto" placeholder="Ingrese enlace de la foto" />
        <CampoTexto titulo="Equipo" placeholder="selecciona un equipo" />
      </form>
    </section>
  );
};

export default Formulario;
