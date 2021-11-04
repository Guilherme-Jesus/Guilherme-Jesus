import { Button, FormControlLabel, Switch, TextField } from "@material-ui/core";
import React, { useState, useContext } from "react";
import ValidacoesCadastro from "../../context/ValidacoesCadastro";

function DadosPessoais({aoEnviar}) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(false);
  const [novidades, setNovidades] = useState(true);
  const [erro, setErro] = useState({ cpf: { valido: true, texto: "" }, nome: {valido: true , texto: ""} });


const validacoes = useContext(ValidacoesCadastro)

  function validarCampos(event) {
    const { name, value } = event.target;
    const novoEstado = { ...erro };
    novoEstado[name] = validacoes[name](value);
    setErro(novoEstado);
  }
  function possoEnviar() {
    for (let campo in erro) {
      if (!erro[campo].valido) { 
        return false;
      }
     
    }
    return true;
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (possoEnviar()) {

          aoEnviar({ nome, sobrenome, cpf, novidades, promocoes });
        }
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
        onBlur={validarCampos}
        error = {!erro.nome.valido}
        helperText={erro.nome.texto}
        id="Nome"
        name="nome"
        label="Nome"
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <TextField
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
        id="Sobrenome"
        name="sobrenome"
        label="Sobrenome"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        onBlur={validarCampos}
        error={!erro.cpf.valido}
        helperText={erro.cpf.texto}
        id="CPF"
        name="cpf"
        label="CPF"
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            checked={promocoes}
            onChange={(event) => {
              setPromocoes(event.target.checked);
            }}
            name="Promoções"
            color="primary"
          />
        }
      />
      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            checked={novidades}
            onChange={(event) => {
              setNovidades(event.target.checked);
            }}
            name="Novidades"
            color="primary"
          />
        }
      />

      <Button type="submit" variant="contained" color="primary">
       Próximo
      </Button>
    </form>
  );
}
export default DadosPessoais;
