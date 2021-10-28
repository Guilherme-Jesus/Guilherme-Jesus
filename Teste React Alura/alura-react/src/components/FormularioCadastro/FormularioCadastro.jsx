import React, { Component } from "react";
import "./style.css";
class FormularioCadastro extends Component {


  constructor(){
    super()
    this.titulo ="";
  }
  handleMudancaTitle(event){
   this.titulo = event.target.value
   console.log(this.titulo)
  }


  render() {
    return (
      <form className="form-cadastro ">
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
         onChange = {this.handleMudancaTitle.bind(this)}
        />
        <textarea
          rows={5}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;
