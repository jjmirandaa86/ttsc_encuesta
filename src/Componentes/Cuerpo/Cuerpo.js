import React, { Component } from "react";
import Cargo from "../../Componentes/Cuerpo/Cargo";
import Otros from "../../Componentes/Cuerpo/Otros";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Modal from "react-bootstrap/Modal";

import Grid from "../../Componentes/Cuerpo/Grid";

export default class Cuerpo extends Component {
  render(props) {
    console.log("Cuerpo -> ========= render ============");
    return (
      <>
        {this.state.formularioRespuesta ? (
          <>
            <form
              id="enviaFormulario"
              action={getAbsolutePath() + "Php/saveData.php"}
              onSubmit={this.handleSubmit}
            >
              <Alert
                variant={this.props.color_fondo}
                text={this.props.color_fondo === "light" ? "dark" : "white"}
              >
                <Alert.Heading as={this.props.tamano_titulo}>
                  Datos del funcionario:
                </Alert.Heading>
              </Alert>
              <Cargo
                color_fondo={this.props.color_fondo}
                tamano_titulo={this.props.tamano_titulo}
                color_fondo_tabla={this.props.color_fondo_tabla}
                color_letra={this.props.color_letra}
                tamano_subtitulo={this.props.tamano_subtitulo}
                datos_funcionarios={this.props.datos_funcionarios}
                datos_agencias={this.props.datos_agencias}
              />

              <Otros
                color_fondo={this.props.color_fondo}
                color_fondo_tabla={this.props.color_fondo_tabla}
                color_letra={this.props.color_letra}
                tamano_titulo={this.props.tamano_titulo}
                tamano_subtitulo={this.props.tamano_subtitulo}
              />
              <br />
              <Button variant={this.props.color_fondo} onClick={this.guardar}>
                Enviar
              </Button>
            </form>
          </>
        ) : (
          <>
            <Modal.Dialog>
              <Modal.Header variant={this.props.color_fondo}>
                <Modal.Title>Mensaje</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>Registro Almacenado con Exito.</p>
              </Modal.Body>
              <Modal.Footer>
                <Button variant={this.props.color_fondo} onClick={this.reload}>
                  Otra Respuesta
                </Button>
              </Modal.Footer>
            </Modal.Dialog>
          </>
        )}
      </>
    );
  }

  constructor(props) {
    console.log("Cuerpo -> ========= Constructor ============");
    super(props);
    this.state = {
      formularioRespuesta: true,
      tituloRespuesta: "Mensaje",
      cuerpoRespuesta: "",
    };
    this.guardar = this.guardar.bind(this);
  }

  guardar(e) {
    console.log("Cuerpo -> ========= guardar ============");
    //Cabecera
    const getCargo = document.getElementById("valorCargo").value;
    if (getCargo === "") {
      alert("Debes seleccionar un cargo.");
      return false;
    }
    const getUsuario = document.getElementById("valorFuncionario").options[
      document.getElementById("valorFuncionario").selectedIndex
    ].text;
    if (getUsuario === "") {
      alert("Debes seleccionar un Usuario.");
      return false;
    }
    const getCorreo = document.getElementById("valorCorreo").value;
    if (getCorreo === "") {
      alert("Debes seleccionar un Correo.");
      return false;
    }
    const getNovedad = document.getElementById("valorObservacion").value;
    const getEstrellas = 10;

    //Detalle
    let agencias = [];
    document.querySelectorAll(".tabla-Agencias tbody tr").forEach(function (e) {
      let fila = {
        agencia: e.querySelector(".agencia").innerText,
        user_ruta: e.querySelector(".ruta input,select").value,
        user_backup: e.querySelector(".backup input,select").value,
        user_sim: e.querySelector(".sim input,select").value,
        it_ruta: e.querySelector(".ruta").innerText,
        it_backup: e.querySelector(".backup").innerText,
        it_sim: e.querySelector(".sim").innerText,
      };
      agencias.push(fila);
    });

    //Agrego con un objeto todos los datos para enviar solo un objeto
    const datos = {
      fecha: fechaHora("F"),
      hora: fechaHora("H"),
      usuario: getUsuario,
      correo: getCorreo,
      cargo: getCargo,
      novedad: getNovedad,
      estrellas: getEstrellas,
      respuesta: agencias,
    };

    (async () => {
      try {
        var init = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(datos),
        };
        let url = getAbsolutePath() + "Php/saveData.php";
        var response = await fetch(url, init);
        if (response.ok) {
          this.setState({
            formularioRespuesta: false,
            tituloRespuesta: "Mensaje",
            cuerpoRespuesta: "Registro guardado con exito.",
          });
        } else {
          this.setState({
            formularioRespuesta: false,
            tituloRespuesta: "Mensaje",
            cuerpoRespuesta: "Ocurrio un erro al almacenar el registro.",
          });
          throw new Error(response.statusText);
        }
      } catch (err) {
        console.log("Error al realizar la petición AJAX: " + err.message);
      }
    })();
  }

  cargo(e) {
    console.log("Cuerpo -> ========= cargo ============");
    const cargo = document.getElementById("valorCargo").value;
    return cargo;
  }

  reload = () => {
    window.location.reload(true);
    //console.log("se recarga pagina");
  };
}

function getAbsolutePath() {
  console.log("Encuesta -> ========= getAbsolutePath ============");
  var loc = window.location;
  /*
  console.log(loc);
  var pathName = loc.pathname.substring(0, loc.pathname.lastIndexOf("/") + 1);
  console.log(pathName);
  return loc.href.substring(
    0,
    loc.href.length -
      ((loc.pathname + loc.search + loc.hash).length - pathName.length)
  );
  */
  return window.location;
}

function fechaHora(tipo) {
  const MyDate = new Date(); //var MyDate = new Date();
  var MyDateString;
  if (tipo === "F") {
    MyDateString =
      ("0" + MyDate.getDate()).slice(-2) +
      "." +
      ("0" + (MyDate.getMonth() + 1)).slice(-2) +
      "." +
      MyDate.getFullYear();
    return MyDateString;
  }
  if (tipo === "H") {
    return (
      MyDate.getHours() + ":" + MyDate.getMinutes() + ":" + MyDate.getSeconds()
    );
  }
}
