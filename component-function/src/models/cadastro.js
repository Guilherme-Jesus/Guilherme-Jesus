function validarCPF(cpf) {
  if (cpf.lenght !== 11) {
    return { valido: false, texto: "CPF deve ter 11 dígitos" };
  } else {
    return { valido: true, texto: "" };
  }
}

function validarSenha(senha) {
  if (senha.lenght < 4 || senha.lenght > 72) {
    return { valido: false, texto: "A senha deve ter 4 e 72 dígitos." };
  } else {
    return { valido: true, texto: "" };
  }
}

export {validarCPF, validarSenha}