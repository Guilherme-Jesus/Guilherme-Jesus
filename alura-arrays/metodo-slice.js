/* ========================================================== Utilizando método slice() para pegar um dividindo array ==========================================================*/

const nomes = [
  "João",
  "Maria",
  "José",
  "Pedro",
  "Lara",
  "Júlia",
  "Guilherme",
  "Gabriela",
];

const sala1 = nomes.slice(0, nomes.length / 2); // pega o subarray da posição 0 até o meio do array
console.log(sala1.length);
const sala2 = nomes.slice(nomes.length / 2, nomes.length); // pega o subarray da posição do meio até o fim do array
console.log(`Sala 1: ${sala1}`); // Sala 1: [João,Maria,José,Pedro]
console.log(`Sala 2: ${sala2}`); // Sala 2: [Lara,Júlia,Guilherme,Gabriela]
