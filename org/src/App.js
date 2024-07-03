import { useState } from "react";
import "./App.css";
import Formulario from "./componentes/Formulario/Formulario";
import Header from "./componentes/Header/Header";
import MiOrg from "./componentes/MiOrg";
import Equipo from "./componentes/Equipo";
import Footer from "./componentes/Footer";
import { v4 as uuid } from "uuid";

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false);
  const [colaboradores, setColaboradores] = useState([
    {
      id: uuid(),
      nombre: "Enzo",
      puesto: "Estudiante",
      foto: "http://github.com/enzoriel.png",
      equipo: "Front End",
      fav: true,
    },
    {
      id: uuid(),
      nombre: "Enzo",
      puesto: "Estudiante",
      foto: "http://github.com/enzoriel.png",
      equipo: "Front End",
      fav: false,
    },
    {
      id: uuid(),
      nombre: "Enzo",
      puesto: "Estudiante",
      foto: "http://github.com/enzoriel.png",
      equipo: "Devops",
      fav: false,
    },
    {
      id: uuid(),
      nombre: "Enzo",
      puesto: "Estudiante",
      foto: "http://github.com/enzoriel.png",
      equipo: "Móvil",
      fav: false,
    },
    {
      id: uuid(),
      nombre: "Enzo",
      puesto: "Estudiante",
      foto: "http://github.com/enzoriel.png",
      equipo: "UX y Diseño",
      fav: false,
    },
  ]);
  const [equipos, setEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9",
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF",
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2",
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8",
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5",
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9",
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF",
    },
  ]);

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  };

  const cambiarColor = (color, id) => {
    const actualizarEquipo = equipos.map((equipos) => {
      if (equipos.id === id) {
        equipos.colorPrimario = color;
      }
      return equipos;
    });

    setEquipos(actualizarEquipo);
  };

  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador", colaborador);
    setColaboradores([...colaboradores, colaborador]);
  };

  const eliminarColaborador = (id) => {
    console.log("Colaborador eliminado", id);
    const nuevosColaboradores = colaboradores.filter((colaboradores) => colaboradores.id !== id);
    setColaboradores(nuevosColaboradores);
  };

  const crearEquipo = (nuevoEquipo) => {
    setEquipos([...equipos, { ...nuevoEquipo, id: uuid() }]);
  };

  const favorito = (id) => {
    const colaboradoresActualizados = colaboradores.map((colaboradores) => {
      if (colaboradores.id === id) {
        colaboradores.fav = !colaboradores.fav;
      }
      return colaboradores;
    });

    setColaboradores(colaboradoresActualizados);
  };

  return (
    <div className="App">
      <Header />
      {mostrarFormulario && (
        <Formulario
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      )}
      <MiOrg cambiarMostrar={cambiarMostrar} />
      {equipos.map((equipos) => (
        <Equipo
          equipo={equipos}
          key={equipos.titulo}
          colaboradores={colaboradores.filter((colab) => colab.equipo === equipos.titulo)}
          eliminar={eliminarColaborador}
          color={cambiarColor}
          like={favorito}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
