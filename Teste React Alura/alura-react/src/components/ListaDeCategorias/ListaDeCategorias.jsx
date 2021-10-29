import React from "react";

class ListaDeCategorias extends React.Component {
 
 constructor(){
   super()
   this.state = {categorias:[]}
 }
 
  componentDidMount(){
   this.props.categorias.inscrever(this._novasCategorias.bind(this));
 }

 _novasCategorias(categorias){
 this.setState({...this.state, categorias})
 }


  _handleEventoInput(e) {
    if (e.key === "Enter") {
    let valorCategoria = e.target.value
    this.props.adicionarCategoria(valorCategoria)
    }
  }

  render() {
    return (
      <section>
        <ul>
          {this.props.categorias.categorias.map((categoria, index) => {
            return <li key={index}>{categoria}</li>
          })}
        </ul>
        <input
          type="text"
          placeholder="Adicionar Categoria"
          onKeyUp={this._handleEventoInput.bind(this)}
        />
      </section>
    );
  }
}

export default ListaDeCategorias;
