import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../Media/Img/logo_blanco.png";

export default class Logo extends Component {
  render(props) {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col xs="auto" sm="auto" md="auto" lg="auto" xl="auto">
            <img
              src={logo}
              alt={this.props.logo_alt}
              height={this.props.logo_alto}
              width={this.props.logo_ancho}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}
