import React, { Component } from "react";

import { Alert, Form, Container } from "react-bootstrap";

export default class Otros extends Component {
  state = { value: 0 };
  render(props) {
    return (
      <>
        <Alert
          variant={this.props.color_fondo}
          text={this.props.color_fondo === "light" ? "dark" : "white"}
        >
          <Alert.Heading as={this.props.tamano_titulo}>
            Novedades:
          </Alert.Heading>
        </Alert>
        <Container>
          <Form.Group controlId="valorObservacion" className="valorObservacion">
            <Form.Label>Observación:</Form.Label>
            <Form.Control placeholder="Escribe las observaciones que tengas para mejorar el servicio y/o alguna novedad." />
          </Form.Group>
        </Container>
      </>
    );
  }
}
