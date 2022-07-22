/* ========================================================== Utilizando método concat() para concatenar dois arrays, fazendo a junção ==========================================================*/

const salaDePython = ["Melissa", "Helena", "Rodrigo"];
const salaDeJavascript = ["Ju", "Léo", "Raquel"];

const salaDeAlunos = salaDePython.concat(salaDeJavascript); //concatena dois arrays;
console.log(salaDeAlunos); // [Melissa,Helena,Rodrigo,Ju,Léo,Raquel]
const arrayOriginal = ["Maria", "Carlos", "Eduardo", "Samanta"] ; // array original
const arrayConcat = arrayOriginal.concat(["André", "Fernanda"], ["Ricardo", "Ana"], ["Marcelo", "Bia"]) ; // array concatenado

console.log(arrayConcat)    // ["Maria", "Carlos", "Eduardo", "Samanta", "André", "Fernanda", "Ricardo", "Ana", "Marcelo", "Bia"]
console.log(arrayOriginal)  // ["Maria", "Carlos", "Eduardo", "Samanta"]