let nomes = ["Ana", "Bia", "Carlos", "Daniel"];
const notas = [7, 4.5, 8, 7.5];

const reprovados = nomes.filter((_aluno, index) => notas[index] < 5);
console.log(`${reprovados} foi reprovado(a)`);
