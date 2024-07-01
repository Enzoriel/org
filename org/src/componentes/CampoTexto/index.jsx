import "./CampoTexto.css";

const CampoTexto = (props) => {
  const placeholderMod = `${props.placeholder}...`;

  const cambiarValor = (e) => {
    props.setValor(e.target.value);
  };
  return (
    <div className="campo-texto">
      <label>{props.titulo}</label>
      <input placeholder={placeholderMod} required={props.required} value={props.valor} onChange={cambiarValor} />
    </div>
  );
};

export default CampoTexto;
