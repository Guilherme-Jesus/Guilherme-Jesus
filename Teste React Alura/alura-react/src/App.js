import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas";

export default class App extends Component {
constructor(){
  super()
  this.notas =[];
}

  criarNota(titulo, texto){
    const newNote = {titulo, texto}
    this.notas.push(newNote)
    console.log(this.notas.length)

  }
  render() {
    return (
      <section>
        <FormularioCadastro criarNota ={this.criarNota.bind(this)}/>
        <ListaDeNotas notas={this.notas}  />
      </section>
    );
  }
}
