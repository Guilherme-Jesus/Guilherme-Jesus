/* ========================================================== Utilizando método push() para adicionar um novo elemento no final do array ==========================================================*/

let notas = [10, 6, 8]; // array de notas
notas.push(7); // adiciona o valor 7 no final do array
console.log(notas); // [10, 6, 8, 7]

let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length; // media = (10 + 6 + 8 + 7) / 4 = 7.75
console.log(media); // 7.75
