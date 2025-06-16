console.log("Como criar função!");

// Criar a função para receber duas variaveis do tipo string e retornar a string
function getUser(nome: string, ultimoNome: string): string {
    return `${nome} ${ultimoNome}`;
}
// Chamar a função e imprimir o valor
console.log(getUser("Fábio", "Rocha"));

// Criar a função para receber duas variaveis do tipo numero e retornar um numero
function getSpeed(current: number, add: number): number {
    return current + add;
}
// Chamar a função e imprimir o valor
console.log(getSpeed(9, 3));

// Criar a função para receber uma variavel do tipo numero e retornar boolean
function getSituation(current: number): boolean {
    return current >= 7 ? true : false;
}
// Chamar a função e imprimir o valor
console.log(getSituation(9));

// Criar a função para receber uma variavel do tipo any e retornar string
function getValue(value: any): string {
    if (typeof value === "string") {
        return "Valor do tipo string";
    } else {
        return "Valor diferente de string";
    }
}
// Chamar a função e imprimir o valor
console.log(getValue("Cesar"));

// Criar a função para receber uma variavel do tipo string ou numero e retornar string
function getType(valueType: string | number): string {
    if (typeof valueType === "string") {
        return "Valor do tipo string";
    } else {
        return "Valor do tipo número";
    }
}
// Chamar a função e imprimir o valor
console.log(getType(7));
