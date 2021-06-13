import React, { Component } from "react";
import Card from "react-bootstrap/Card";

export default class Titulo extends Component {
  render(props) {
    return (
      <>
        <Card
          bg={this.props.color_fondo}
          text={this.props.color_fondo === "light" ? "dark" : "white"}
          className="text-center p-3"
          key={1}
        >
          <Card.Header as={this.props.tamano_titulo}>
            {this.props.disponible_titulo}
          </Card.Header>
          <Card.Body>
            <Card.Title>{this.props.disponible_fecha}</Card.Title>
            <Card.Text as={this.props.tamano_subtitulo}>
              {this.props.disponible_mensaje} {this.props.disponible_contacto}
            </Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  }
}
