import { useState } from "react";

function useErros(validacoes) {
  const estadoInicial = criarEstadoInicial(validacoes);
  const [erro, setErro] = useState(estadoInicial);

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
  return [erro, validarCampos, possoEnviar];
}

function criarEstadoInicial(validacoes) {
  const estadoInicial = {};
  for (let campo in validacoes) {
    estadoInicial[campo] = { valido: true, texto: "" };
  }
}
export default useErros;
