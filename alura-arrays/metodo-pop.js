/* ========================================================== Utilizando método pop() para remover ultimo elemento do array ==========================================================*/

let notas = [10, 7, 8, 5, 10];
notas.pop(); // remove o ultimo elemento do array
console.log(notas); // [10, 7, 8, 5]

let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length; // media = (10 + 7 + 8 + 5) / 4 = 7.5
console.log(`A média das notas é: ${media}`); // 7.5
