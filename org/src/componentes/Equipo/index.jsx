import "./Equipo.css";

const Equipo = (props) => {
  const { colorPrimario, colorSecundario, titulo } = props.equipo;

  return (
    <section className="equipo" style={{ backgroundColor: colorSecundario }}>
      <h3 style={{ borderBottom: `4px solid ${colorPrimario}` }}>{titulo}</h3>
      <div className="colaboradores"></div>
    </section>
  );
};

export default Equipo;
