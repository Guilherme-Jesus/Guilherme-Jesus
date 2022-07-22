const salaJs = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

const mediaSala = (notasDaSala) => {
  const somaDasNotas = notasDaSala.reduce(
    (acumulador, atual) => acumulador + atual,
    0 // valor inicial do acumulador
  );
  return somaDasNotas / notasDaSala.length; // divide o valor total pelo número de elementos
};

console.log(
  `Média Sala Javascript: ${mediaSala(salaJs)}, Média Sala Java: ${mediaSala(
    salaJava
  )}, Média Sala Python: ${mediaSala(salaPython)}`
);
