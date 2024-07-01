import "./ListaOpciones.css";

const ListaOpciones = (props) => {
  const equipos = [
    "Programación",
    "Front End",
    "Data Science",
    "Devops",
    "UX y Diseño",
    "Móvil",
    "Innovacion y Gestión",
  ];

  const manejarCambio = (e) => {
    console.log("cambio", e.target.value);
    props.setValor(e.target.value);
  };

  return (
    <div className="lista-opciones">
      <label>Equipos</label>
      <select value={props.valor} onChange={manejarCambio}>
        <option value="" disabled defaultValue="" hidden>
          Selecciona equipo
        </option>
        {equipos.map((equipos, index) => (
          <option key={index} value={equipos}>
            {equipos}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ListaOpciones;
