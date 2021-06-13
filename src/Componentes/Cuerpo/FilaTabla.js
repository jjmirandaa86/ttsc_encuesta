import React, { Component } from "react";
import Badge from "react-bootstrap/Badge";

export default class FilaTabla extends Component {
  constructor(props) {
    console.log("FilaTabla -> ========= constructor ============");
    super(props);
    this.state = {
      it_agencia: this.props.e_agencia,
      it_ruta: this.props.e_ruta,
      it_backup: this.props.e_backups,
      it_sim: this.props.e_sim,
      user_agencia: this.props.e_agencia,
      user_ruta: this.props.e_ruta,
      user_backup: this.props.e_backups,
      user_sim: this.props.e_sim,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log("FilaTabla -> ========= handleChange ============");
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  }
  render(props) {
    console.log("FilaTabla -> ========= Render ============");
    return (
      <>
        <td className="agencia">{this.state.it_agencia}</td>
        <td className="ruta">
          <input
            type="number"
            id="user_ruta"
            name="user_ruta"
            value={this.state.user_ruta}
            size={2}
            onChange={this.handleChange}
          />
          <Badge variant="success">
            <h7>{this.state.it_ruta}</h7>
          </Badge>{" "}
        </td>

        <td className="backup">
          <input
            type="number"
            id="user_backup"
            name="user_backup"
            value={this.state.user_backup}
            size={2}
            onChange={this.handleChange}
          />
          <Badge variant="success">
            <h7>{this.state.it_backup}</h7>
          </Badge>{" "}
        </td>

        <td className="sim">
          <input
            type="number"
            id="user_sim"
            name="user_sim"
            value={this.state.user_sim}
            size={2}
            onChange={this.handleChange}
          />
          <Badge variant="success">
            <h7>{this.state.it_sim}</h7>
          </Badge>{" "}
        </td>
      </>
    );
  }
}
