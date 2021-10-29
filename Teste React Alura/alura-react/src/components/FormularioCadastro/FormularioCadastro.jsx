import React, { Component } from "react";
import "./style.css";
class FormularioCadastro extends Component {

  constructor(props){
    super(props)
    this.titulo = "";
    this.texto = "";
    this.categoria =""
  }
  _handleMudancaTitle(event){
    event.stopPropagation();
   this.titulo = event.target.value

  }
  _handleMudancaCategoria(e){
    e.stopPropagation()
    this.categoria = e.target.value
  }

  _handleAtualizaForm(event){
    event.stopPropagation();
    this.texto = event.target.value
  }

  _criarNota(event){
    event.preventDefault();
    event.stopPropagation();
    this.props.criarNota(this.titulo, this.texto, this.categoria)
    
 
  }

  render() {
    return (
      <form className="form-cadastro "
      onSubmit = {this._criarNota.bind(this)}
      >
        <select onChange={this._handleMudancaCategoria.bind(this)}>
          <option>Sem Categoria</option>
          {this.props.categorias.map((categoria)=>{
            return <option key={categoria}>{categoria}</option>
          })}  </select>
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
         onChange = {this._handleMudancaTitle.bind(this)}
        />
        <textarea
          rows={5}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this._handleAtualizaForm.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;
