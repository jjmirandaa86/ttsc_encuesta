import React, { Component } from "react";
import { Card, Image, Container, Row, Col } from "react-bootstrap";
import Horario from "../../Media/Img/horario.png";
import Logo from "../Cabecera/Logo";

export default class NoDisponible extends Component {
  constructor(props) {
    console.log("NoDisponible -> ========= constructor ============");
    super(props);
  }

  render() {
    console.log("NoDisponible -> ========= render ============");
    return (
      <>
        <br />
        <Container>
          <Row>
            <Col xs>
              <Logo />
            </Col>
          </Row>
          <Row>
            <Col xs>
              <Card
                bg={this.props.color_fondo}
                text={this.props.color_fondo === "light" ? "dark" : "white"}
                className="text-center p-3"
                key={1}
              >
                <Card.Header as={this.props.tamano_titulo}>
                  {this.props.no_disponible_titulo}
                </Card.Header>
                <div className="center-block">
                  <Image
                    className="center"
                    src={Horario}
                    width={140}
                    height={140}
                    rounded
                  ></Image>
                </div>
                <Card.Body>
                  <Card.Text as={this.props.tamano_subtitulo}>
                    {this.props.no_disponible_mensaje}{" "}
                    {this.props.no_disponible_contacto}.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
