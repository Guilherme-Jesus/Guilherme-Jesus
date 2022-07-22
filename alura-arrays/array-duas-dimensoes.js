/* ==========================================================  Criando uma lista com duas dimensões ==========================================================*/

const listaDeAlunos = ["João", "Juliana", "Caio", "Ana"]; // array de alunos
const mediaAlunos = [10, 7, 9, 6]; // array de notas

let listaDeNotasEAlunos = [listaDeAlunos, mediaAlunos]; // cria um array com dois arrays
console.log(
  `${listaDeNotasEAlunos[0][0]},sua média:${listaDeNotasEAlunos[1][0]} ` // imprime o primeiro aluno e sua nota
);
