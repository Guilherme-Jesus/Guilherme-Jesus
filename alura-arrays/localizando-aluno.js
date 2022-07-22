/* ==========================================================  Localizando aluno na lista com array de duas dimensões ==========================================================*/

const listaDeAlunos = ["João", "Juliana", "Caio", "Ana"]; // array de alunos
const mediaAlunos = [10, 7, 9, 6]; // array de nota
let listaDeNotasEAlunos = [listaDeAlunos, mediaAlunos]; // cria um array com dois arrays
const exibeNomeNota = (nomeDoAluno) => {
  // função para exibir o nome do aluno e sua nota
  if (listaDeNotasEAlunos[0].includes(nomeDoAluno)) {
    // verifica se o aluno está na lista
    let index = listaDeNotasEAlunos[0].indexOf(nomeDoAluno); // pega o index do aluno na lista de alunos e armazena na variável index (0,1,2,3)
    return `${listaDeNotasEAlunos[0][index]}, sua média é: ${listaDeNotasEAlunos[1][index]}`; // imprime o nome do aluno e sua nota
  } else {
    return "Aluno não encontrado"; // caso o aluno não esteja na lista
  }
};
exibeNomeNota("Caio"); // imprime o nome do aluno e sua nota
console.log(exibeNomeNota("Ana"));
