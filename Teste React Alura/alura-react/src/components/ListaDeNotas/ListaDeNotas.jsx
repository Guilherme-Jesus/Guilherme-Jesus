import React, { Component } from "react";
import CardNota from "../CardNota";
import "./style.css";

class ListaDeNotas extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props)
  }
  render() {
    return (
      <ul className="card-nota">
        {this.props.notas.map((nota, index) => {
          return (
            <li key={index}>
              <CardNota />
            </li>
          );
        })}
      </ul>
    );
  }
}
export default ListaDeNotas;
