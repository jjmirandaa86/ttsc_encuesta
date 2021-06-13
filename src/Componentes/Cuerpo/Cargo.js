import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Funcionario from "../../Componentes/Cuerpo/Funcionario";

export default class Cargo extends Component {
  render(props) {
    console.log("Cargo -> ========= render ============");
    return (
      <>
        <Form.Group controlId="valorCargo" className="valorCargo">
          <Form.Label>Cargo: * </Form.Label>
          <Form.Control as="select" onChange={this.onChangeCargo}>
            <option></option>
            {this.state.dataCargo.map((dato) => (
              <option key={dato}>{dato}</option>
            ))}
          </Form.Control>
        </Form.Group>
        {this.state.funcionario ? (
          <Funcionario
            color_fondo={this.props.color_fondo}
            tamano_titulo={this.props.tamano_titulo}
            color_fondo_tabla={this.props.color_fondo_tabla}
            color_letra={this.props.color_letra}
            tamano_subtitulo={this.props.tamano_subtitulo}
            datos_funcionario={this.props.datos_funcionarios}
            dato_Cargo={this.state.datoCargoValue} //this.handler
            datos_agencias={this.props.datos_agencias}
          />
        ) : (
          ""
        )}
      </>
    );
  }

  constructor(props) {
    console.log("Cargo -> ========= Constructor ============");
    super(props);
    this.state = {
      //dataCargo: this.extraeCargosUnicos(x),
      dataCargo: this.extraeCargosUnicos(this.props.datos_funcionarios),
      funcionario: false,
      datoCargoValue: "",
    };
    this.onChangeCargo = this.onChangeCargo.bind(this);
  }

  onChangeCargo(e) {
    console.log("Cargo -> =========== metodoCargo ============");
    //this.setState({ dataCargo: e.target.value, });
    if (document.getElementsByTagName("valorCargo").value !== "") {
      this.setState({
        funcionario: true,
        datoCargoValue: e.target.value,
      });
    }
  }

  extraeCargosUnicos(datos_funcionario) {
    console.log("Cargo -> =========== extraeCargosUnicos ============");
    const varBuscar = [];
    let arrayFuncionario = datos_funcionario.filter((vectorResultado) => {
      if (!varBuscar.includes(vectorResultado.short_position)) {
        varBuscar.push(vectorResultado.short_position);
        return false;
      }
    });
    return varBuscar.sort();
  }
}
