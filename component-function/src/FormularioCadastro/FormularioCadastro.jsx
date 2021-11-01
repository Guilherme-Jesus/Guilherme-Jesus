import { Button, TextField } from "@material-ui/core";
import React from "react";

function FormularioCadastro() {
  return (
    <form>
      <TextField id="Nome" label="Nome" variant="outlined"fullWidth />
      <TextField id="Sobrenome" label="Sobrenome" variant="outlined" fullWidth />
      <TextField id="CPF" label="CPF" variant="outlined" size='medium'fullWidth/>

      <label>Promoções</label>
      <input type="checkbox" />

      <label>Novidades</label>
      <input type="checkbox" />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}
export default FormularioCadastro;
