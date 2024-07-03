import "./Colaborador.css";
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Colaborador = (props) => {
  const { nombre, puesto, foto, id, fav } = props.datos;
  const { colorPrimario, eliminar, like } = props;
  const backgroundColor = { backgroundColor: colorPrimario };

  return (
    <div className="colaborador">
      <AiFillCloseCircle onClick={() => eliminar(id)} className="eliminar" />
      <div className="encabezado" style={backgroundColor}>
        <img src={foto} alt={nombre} />
      </div>
      <div className="info">
        <h4>{nombre}</h4>
        <h5>{puesto}</h5>
        {fav ? (
          <AiFillHeart color="red" onClick={() => like(id)} />
        ) : (
          <AiOutlineHeart onClick={() => like(id)} />
        )}
      </div>
    </div>
  );
};

export default Colaborador;
