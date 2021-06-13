import React, { Component } from "react";
import Logo from "../../Componentes/Cabecera/Logo";
import Titulo from "../../Componentes/Cabecera/Titulo";

export default class Cabecera extends Component {
  render(props) {
    return (
      <>
        <Logo
          logo_alt={this.props.logo_alt}
          logo_ancho={this.props.logo_ancho}
          logo_alto={this.props.logo_alto}
        />
        <br />
        <Titulo
          color_fondo={this.props.color_fondo}
          color_fondo_tabla={this.props.color_fondo_tabla}
          color_letra={this.props.color_letra}
          tamano_titulo={this.props.tamano_titulo}
          tamano_subtitulo={this.props.tamano_subtitulo}
          disponible_titulo={this.props.disponible_titulo}
          disponible_mensaje={this.props.disponible_mensaje}
          disponible_contacto={this.props.disponible_contacto}
          disponible_fecha={this.props.disponible_fecha}
        />
      </>
    );
  }
}
