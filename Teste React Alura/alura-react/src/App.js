import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas";
import ListaDeCategorias from "./components/ListaDeCategorias";

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
  
deletarNota(index){
  let arrayNotas = this.state.notas;
  arrayNotas.splice(index,1);
  this.setState({notas:arrayNotas})
  console.log("deletar")
}



  render() {
    return (
      <section>
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <main className="conteudo-principal">
        <ListaDeCategorias/>
        <ListaDeNotas 
        notas={this.state.notas}
        apagarNota={this.deletarNota.bind(this)}
        />
        </main>
      </section>
    );
  }
}
