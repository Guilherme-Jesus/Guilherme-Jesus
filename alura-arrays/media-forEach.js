const notas = [10, 6.5, 8, 7.5];
let somaDasNotas = 0;

notas.forEach((nota) => { // percorre o array e executa uma função para cada elemento do array e recebe o valor do elemento atual como parâmetro da função (nota)
  somaDasNotas += nota;
});

//funcao de callback para o forEach (nota)
// notas.forEach(function(nota){ 
//     somaDasNotas += nota;
//   });

let media = somaDasNotas / notas.length;
console.log(media);
