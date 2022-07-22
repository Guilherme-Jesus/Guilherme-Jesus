const notas = [10, 9, 8, 7, 6];

const notasAtualizadas = notas.map((nota) => {
  return nota === 10 ? nota : ++nota; // incrementa a nota se ela for igual a 10, senão incrementa + 1
}); // retorna um novo array com as notas atualizadas
console.log(notasAtualizadas); // [11, 10, 9, 8, 7]
