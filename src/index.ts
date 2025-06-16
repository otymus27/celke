//var é global
//let é

// Criar variável do tipo string
const user: string = "Fábio";
console.log(`Usuário: ${user}`);

// Criar variável do tipo string
const idade: number = 45;
console.log(`Idade: ${idade}`);

// Criar variável do tipo boolean
const situation: boolean = true;
console.log(`Situação: ${situation}`);

// Criar variável do tipo array de string
const cursos: string[] = ["Javascript", "Typescritp"];
console.log(`Cursos: ${cursos}`);

// Criar variável do tipo array de número
const valores: number[] = [1, 2];
console.log(`Valores: ${valores}`);

// Criar variável do tipo tupla array com tipos diferentes
var pessoa: [string, number, boolean];
pessoa = ["Fabio", 45, true];
console.log(`Usuário: ${pessoa[0]}`);
console.log(`Idade: ${pessoa[1]}`);
console.log(`Situação: ${pessoa[2]}`);

// Criar variável do tipo enum. Representa um conjunto de valores nomeados.
enum DiaSemana {
    Domingo = 1,
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado,
}

let dia: DiaSemana;
console.log(`Número que representa domingo: ${DiaSemana.Domingo}`);
console.log(`Número que representa sexta: ${DiaSemana.Sexta}`);

// Criar variável do tipo any, atribuir qualquer tipo de valor para a variável
let data: any;
data = 10; // Atribuir um valor do tipo number
console.log(`Valor atribuido é número: ${data}`);
data = "Fábio"; // Atribuir um valor do tipo string
console.log(`Valor atribuido é texto: ${data}`);

// Criar variável do tipo null e undefined
let variableNull: null = null;
let variableUndefined: undefined = undefined;
console.log(`Variável nula: ${variableNull}`);
console.log(`Variável indefinida: ${variableUndefined}`);

// Criar variável do tipo object
interface Cliente {
    nome: string;
    idade: number;
    estadoCivil: boolean;
}

let cliente: Cliente = {
    nome: "Fábio",
    idade: 45,
    estadoCivil: true,
};

console.log(`Nome do cliente: ${cliente.nome}`);
console.log(`Idade: ${cliente.idade}`);
console.log(`Casado: ${cliente.estadoCivil}`);

// Criar variável utilizando union indicando um ou mais tipo
const value: string | boolean = "Fábio";
console.log(`Valor pode ser string ou boolean: ${value}`);
