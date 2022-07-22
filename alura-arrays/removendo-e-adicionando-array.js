/* ========================================================== Utilizando método push() para adicionar um novo elemento ao final do array, e splice() para remover elementos  ==========================================================*/

const listaDeAlunos = ["João", "Ana", "Caio", "Lara", "Marjorie", "Léo"];

const removerAluno = listaDeAlunos.splice(1, 2, "Rodrigo"); // remove dois elementos na posição 1 e 2 e substitui por um novo elemento.

console.log(`Nova Lista de alunos : ${listaDeAlunos}`); // [João,Rodrigo,Lara,Marjorie,Léo]
