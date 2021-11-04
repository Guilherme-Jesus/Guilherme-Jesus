import { Button, TextField } from "@material-ui/core";
import React, { useContext, useState } from "react";
import ValidacoesCadastro from "../../context/ValidacoesCadastro";

function DadosUsuario({ aoEnviar}) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState({ senha: { valido: true, texto: "" } });
  
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
