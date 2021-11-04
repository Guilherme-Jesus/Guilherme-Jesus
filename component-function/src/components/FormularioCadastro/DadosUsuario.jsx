import { Button, TextField } from "@material-ui/core";
import React, { useContext, useState } from "react";
import ValidacoesCadastro from "../../context/ValidacoesCadastro";
import useErros from "../../hooks/useErros";

function DadosUsuario({ aoEnviar}) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const validacoes = useContext(ValidacoesCadastro)
  
 const[erro, validarCampos, possoEnviar]= useErros(validacoes)


  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (possoEnviar()) {
          aoEnviar({ email, senha });
        }
      }}
    >
      <TextField
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        id="Email"
        name="email"
        label="Email"
        type="email"
        variant="outlined"
        required
        fullWidth
        margin="normal"
      />
      <TextField
        value={senha}
        onChange={(event) => {
          setSenha(event.target.value);
        }}
        onBlur={validarCampos}
        error={!erro.senha.valido}
        helperText={erro.senha.texto}
        id="Senha"
        name="senha"
        label="Senha"
        type="password"
        variant="outlined"
        required
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Próximo
      </Button>
    </form>
  );
}
export default DadosUsuario;
