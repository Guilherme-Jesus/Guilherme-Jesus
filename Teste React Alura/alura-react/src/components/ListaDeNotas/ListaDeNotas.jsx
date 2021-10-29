import React, { Component } from "react";
import CardNota from "../CardNota";
import "./style.css";

class ListaDeNotas extends Component {

  render() {
    return (
      <ul className="card-nota">
        {this.props.notas.map((nota, index) => {
          return (
            <li key={index}>
              <CardNota
                indice={index}
                titulo={nota.titulo}
                texto={nota.texto}
                apagarNota={this.props.apagarNota}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}
export default ListaDeNotas;
