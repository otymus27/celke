"use strict";
//var é global
//let é
// Criar variável do tipo string
const user = "Fábio";
console.log(`Usuário: ${user}`);
// Criar variável do tipo string
const idade = 45;
console.log(`Idade: ${idade}`);
// Criar variável do tipo boolean
const situation = true;
console.log(`Situação: ${situation}`);
// Criar variável do tipo array de string
const cursos = ["Javascript", "Typescritp"];
console.log(`Cursos: ${cursos}`);
// Criar variável do tipo array de número
const valores = [1, 2];
console.log(`Valores: ${valores}`);
// Criar variável do tipo tupla array com tipos diferentes
var pessoa;
pessoa = ["Fabio", 45, true];
console.log(`Usuário: ${pessoa[0]}`);
console.log(`Idade: ${pessoa[1]}`);
console.log(`Situação: ${pessoa[2]}`);
// Criar variável do tipo enum. Representa um conjunto de valores nomeados.
var DiaSemana;
(function (DiaSemana) {
    DiaSemana[DiaSemana["Domingo"] = 1] = "Domingo";
    DiaSemana[DiaSemana["Segunda"] = 2] = "Segunda";
    DiaSemana[DiaSemana["Terca"] = 3] = "Terca";
    DiaSemana[DiaSemana["Quarta"] = 4] = "Quarta";
    DiaSemana[DiaSemana["Quinta"] = 5] = "Quinta";
    DiaSemana[DiaSemana["Sexta"] = 6] = "Sexta";
    DiaSemana[DiaSemana["Sabado"] = 7] = "Sabado";
})(DiaSemana || (DiaSemana = {}));
let dia;
console.log(`Número que representa domingo: ${DiaSemana.Domingo}`);
console.log(`Número que representa sexta: ${DiaSemana.Sexta}`);
// Criar variável do tipo any, atribuir qualquer tipo de valor para a variável
let data;
data = 10; // Atribuir um valor do tipo number
console.log(`Valor atribuido é número: ${data}`);
data = "Fábio"; // Atribuir um valor do tipo string
console.log(`Valor atribuido é texto: ${data}`);
// Criar variável do tipo null e undefined
let variableNull = null;
let variableUndefined = undefined;
console.log(`Variável nula: ${variableNull}`);
console.log(`Variável indefinida: ${variableUndefined}`);
let cliente = {
    nome: "Fábio",
    idade: 45,
    estadoCivil: true,
};
console.log(`Nome do cliente: ${cliente.nome}`);
console.log(`Idade: ${cliente.idade}`);
console.log(`Casado: ${cliente.estadoCivil}`);
// Criar variável utilizando union indicando um ou mais tipo
const value = "Fábio";
console.log(`Valor pode ser string ou boolean: ${value}`);
