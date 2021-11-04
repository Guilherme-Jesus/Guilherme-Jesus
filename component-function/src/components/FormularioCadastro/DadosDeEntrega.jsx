import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";

function DadosDeEntrega({ aoEnviar }) {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  const [complemento, setComplemento] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({ cep, endereco, numero, estado, cidade, complemento });
      }}
    >
      <TextField
        value={cep}
        onChange={(event) => {
          setCep(event.target.value);
        }}
        id="CEP"
        label="CEP"
        type="number"
        variant="outlined"
        margin="normal"
      />
      <TextField
        value={endereco}
        onChange={(event) => {
          setEndereco(event.target.value);
        }}
        id="Endereço"
        label="Endereço"
        type="text"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        value={numero}
        onChange={(event) => {
          setNumero(event.target.value);
        }}
        id="Número"
        label="Número"
        type="number"
        variant="outlined"
        margin="normal"
      />
      <TextField
        value={complemento}
        onChange={(event) => {
          setComplemento(event.target.value);
        }}
        id="Complemento"
        label="Complemento"
        type="text"
        variant="outlined"
        margin="normal"
      />
      <TextField
        value={estado}
        onChange={(event) => {
          setEstado(event.target.value);
        }}
        id="Estado"
        label="Estado"
        type="text"
        variant="outlined"
        margin="normal"
      />
      <TextField
        value={cidade}
        onChange={(event) => {
          setCidade(event.target.value);
        }}
        id="Cidade"
        label="Cidade"
        type="text"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Finalizar Cadastro
      </Button>
    </form>
  );
}

export default DadosDeEntrega;
