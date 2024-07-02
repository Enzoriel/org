import Colaborador from "../Colaborador";
import "./Equipo.css";

const Equipo = (props) => {
  const { colorPrimario, colorSecundario, titulo } = props.equipo;
  const { colaboradores } = props;
  const borderBottom = { borderBottom: `4px solid ${colorPrimario}` };
  const backgroundColor = { backgroundColor: colorSecundario };

  return (
    colaboradores.length > 0 && (
      <section className="equipo" style={backgroundColor}>
        <h3 style={borderBottom}>{titulo}</h3>
        <div className="colaboradores">
          {colaboradores.map((colaboradores, index) => (
            <Colaborador key={index} datos={colaboradores} colorPrimario={colorPrimario} />
          ))}
        </div>
      </section>
    )
  );
};

export default Equipo;
