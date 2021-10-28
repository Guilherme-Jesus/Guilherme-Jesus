import React, { Component } from "react";
import CardNota from "../CardNota";
import "./style.css"

class ListaDeNotas extends Component {
  render() {
    return (
      
       <ul className = "card-nota"> {Array.of("Trabalho", "Estudos", "Trabalho").map((categoria, index) => {
return (
  <li key = {index}>
      <CardNota/>
  </li>

)
       })}
       
       </ul>
    
      
    )
  }
}
export default ListaDeNotas