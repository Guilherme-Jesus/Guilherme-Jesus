const notas = [10, 6.5, 8, 7.5];
let mediaDasNotas = 0;

for (let i = 0; i < notas.length; i++) {
  // percorre o array
  mediaDasNotas += notas[i]; //  soma o valor de cada posição do array e o indice da posição do array (i) que é o mesmo que o valor da posição do array
}

let media = mediaDasNotas / notas.length; // media = 29.5 / 4 = 7.25
console.log(media); // 7.25
