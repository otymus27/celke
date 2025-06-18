// type assertions, conversions e casting
let valorNumerico: number;
let valorString: string;
let valorDesconhecido: unknown; // Pode assumir qualquer tipo quando atribuido

valorDesconhecido = 10;
console.log(valorDesconhecido + ' é do tipo: ' + typeof valorDesconhecido);

// Aqui preciso usar type assertion
valorNumerico = <number>valorDesconhecido;
console.log(valorNumerico + ' é do tipo: ' + typeof valorNumerico);

valorString = <string>valorDesconhecido;
console.log(valorString + ' é do tipo: ' + typeof valorString);

// Conversão de tipos de variáveis ou casting
valorString = '20'; // Vamos converter uma string em number
valorNumerico = parseInt(valorString);
console.log('Aqui fizemos a conversão de uma string em number: ' + valorNumerico);

valorNumerico = 30;
valorString = valorNumerico.toString();
console.log('Aqui fizemos a conversão de um number em string: ' + valorString);

const ativo: boolean = true;
const str = ativo.toString(); // "true"
console.log('Aqui fizemos a conversão de um boolear em string: ' + ativo);

const bool = Boolean('qualquer coisa'); // true
const bool2 = Boolean(''); // false
console.log('Aqui fizemos a conversão de um string em boolean: ' + bool2);
