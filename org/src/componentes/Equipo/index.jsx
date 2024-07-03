import Colaborador from "../Colaborador";
import "./Equipo.css";
import hexToRgba from "hex-to-rgba";

const Equipo = (props) => {
  const { colorPrimario, titulo, id } = props.equipo;
  const { colaboradores, eliminar, color, like } = props;
  const borderBottom = { borderBottom: `4px solid ${colorPrimario}` };
  const backgroundColor = { backgroundColor: hexToRgba(colorPrimario, 0.3) };

  return (
    colaboradores.length > 0 && (
      <section className="equipo" style={backgroundColor}>
        <input
          type="color"
          className="input-color"
          value={colorPrimario}
          onChange={(event) => {
            color(event.target.value, id);
          }}
        ></input>
        <h3 style={borderBottom}>{titulo}</h3>
        <div className="colaboradores">
          {colaboradores.map((colaboradores, index) => (
            <Colaborador
              key={index}
              datos={colaboradores}
              colorPrimario={colorPrimario}
              eliminar={eliminar}
              like={like}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Equipo;
