import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas";

export default class App extends Component {
  
  constructor() {
    super();

    this.state = {
      notas: []
    }
  }

  criarNota(titulo, texto) {
    const newNote = { titulo, texto };
    const novoArray = [...this.state.notas, newNote];
    const novoEstado = { notas: novoArray };

    this.setState(novoEstado);
  }
  render() {
    return (
      <section>
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <ListaDeNotas notas={this.state.notas} />
      </section>
    );
  }
}
