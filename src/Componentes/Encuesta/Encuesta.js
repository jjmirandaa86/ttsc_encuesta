import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import NoDisponible from "../NoDisponible/NoDisponible";
import Cabecera from "../Cabecera/Cabecera";
import Cuerpo from "../Cuerpo/Cuerpo";
//Enviar parametros a los Hijos

export default class Encuesta extends Component {
  render() {
    console.log("Encuesta -> ========= render ============");
    console.log("ultimo cambio 05.05.2021 17:52 - Jeff Miranda ");
    return (
      <>
        {this.state.disponible ? (
          <>
            <Container>
              <Row>
                <Col xs>
                  <Cabecera
                    color_fondo={this.state.color_fondo}
                    color_fondo_tabla={this.state.color_fondo_tabla}
                    color_letra={this.state.color_letra}
                    tamano_titulo={this.state.tamano_titulo}
                    tamano_subtitulo={this.state.tamano_subtitulo}
                    disponible_titulo={this.state.disponible_titulo}
                    disponible_mensaje={this.state.disponible_mensaje}
                    disponible_contacto={this.state.disponible_contacto}
                    disponible_fecha={this.state.disponible_fecha}
                    logo_alt={this.state.logo_alt}
                    logo_ancho={this.state.logo_ancho}
                    logo_alto={this.state.logo_alto}
                  />
                </Col>
              </Row>
              <Row>
                <Col xs>
                  <Cuerpo
                    color_fondo={this.state.color_fondo}
                    color_fondo_tabla={this.state.color_fondo_tabla}
                    color_letra={this.state.color_letra}
                    tamano_titulo={this.state.tamano_titulo}
                    tamano_subtitulo={this.state.tamano_subtitulo}
                    datos_funcionarios={this.state.datos_funcionarios}
                    datos_agencias={this.state.datos_agencias}
                  />
                </Col>
              </Row>
            </Container>
            <br></br>
          </>
        ) : (
          <NoDisponible
            color_fondo={this.state.color_fondo}
            tamano_titulo={this.state.tamano_titulo}
            tamano_subtitulo={this.state.tamano_subtitulo}
            no_disponible_titulo={this.state.no_disponible_titulo}
            no_disponible_mensaje={this.state.no_disponible_mensaje}
            no_disponible_contacto={this.state.no_disponible_contacto}
          />
        )}
      </>
    );
  }

  constructor(props) {
    console.log("Encuesta -> ========= constructor ============");
    super(props);
    this.state = {
      disponible: false,
      titulo_pagina_web: "",
      color_fondo: "",
      tamano_titulo: "h2",
      tamano_subtitulo: "h4",
      no_disponible_titulo: "",
      no_disponible_mensaje: "",
      no_disponible_contacto: "",
      color_fondo_tabla: "",
      color_letra: "",
      disponible_titulo: "",
      disponible_mensaje: "",
      disponible_contacto: "",
      disponible_fecha: "",
      logo_alt: "",
      logo_ancho: "",
      logo_alto: "",
      datos_funcionarios: {},
      datos_agencias: {},
    };
  }

  componentDidMount(e) {
    console.log("Encuesta -> ========= componentDidMount ============");

    let url = getAbsolutePath() + "Json/data.json";
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        //Asigno a las varibales de State
        this.setState({
          disponible: json.disponible,
          titulo_pagina_web: json.titulo_pagina_web,
          color_fondo: json.color_fondo,
          tamano_titulo: json.tamano_titulo,
          tamano_subtitulo: json.tamano_subtitulo,
          no_disponible_titulo: json.no_disponible_titulo,
          no_disponible_mensaje: json.no_disponible_mensaje,
          no_disponible_contacto: json.no_disponible_contacto,
          color_fondo_tabla: json.color_fondo_tabla,
          color_letra: json.color_letra,
          disponible_titulo: json.disponible_titulo,
          disponible_mensaje: json.disponible_mensaje,
          disponible_contacto: json.disponible_contacto,
          disponible_fecha: json.disponible_fecha,
          logo_alt: json.logo_alt,
          logo_ancho: json.logo_ancho,
          logo_alto: json.logo_alto,
          datos_funcionarios: json.funcionarios,
          datos_agencias: json.agencias,
        });
        //Pongo el titulo a la pagina Web
        document.title = json.titulo_pagina_web;
      });
  }
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
