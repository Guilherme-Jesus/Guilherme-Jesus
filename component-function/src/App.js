import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import { Typography } from "@material-ui/core";
import { validarCPF, validarSenha } from "./models/cadastro";
import ValidacoesCadastro from "./context/ValidacoesCadastro";

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h3" align="center">
          Formulario de Cadastro
        </Typography>
        <ValidacoesCadastro.Provider
          value={{ cpf: validarCPF, senha: validarSenha, nome: validarSenha }}
        >
          <FormularioCadastro aoEnviar={aoEnviarForm} />
        </ValidacoesCadastro.Provider>
      </Container>
    );
  }
}

function aoEnviarForm(dados) {
  console.log(dados);
}

export default App;
