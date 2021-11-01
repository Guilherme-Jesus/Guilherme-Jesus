import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import "./App.css";
import FormularioCadastro from './FormularioCadastro/FormularioCadastro';

class App extends Component {
  render() {
    return (
      <Container component = "article">
        <h1>Formulario Cadastro</h1>
        <FormularioCadastro/>
      </Container>
    );
  }
}

export default App;
