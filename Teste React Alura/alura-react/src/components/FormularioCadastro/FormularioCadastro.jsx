import React, { Component } from "react";
import "./style.css";
class FormularioCadastro extends Component {

  constructor(props){
    super(props)
    this.titulo = "";
    this.texto = "";
    this.categoria =""
    this.state = { categorias: []}

    this._novasCategorias = this._novasCategorias.bind(this)
  }


  
  componentDidMount() {
    this.props.categorias.inscrever(this._novasCategorias)
  }
  
  componentWillUnmount() {  
    this.props.categorias.desinscrever(this._novasCategorias)
}
  
  _novasCategorias(categorias){
   this.setState({...this.state, categorias})
  }



  _handleMudancaTitle(e){
    e.stopPropagation();
   this.titulo = e.target.value

  }
  _handleMudancaCategoria(e){
    e.stopPropagation()
    this.categoria = e.target.value
  }

  _handleAtualizaForm(e){
    e.stopPropagation();
    this.texto = e.target.value
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
          {this.state.categorias.map((categoria,index)=>{
            return <option key={index}>{categoria}</option>
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
